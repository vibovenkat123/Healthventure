import styles from "../styles";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import info, { categories, FoodCategory } from "../content/food";
import nutrition_styles from "./nutrition_styles";
import DropDownPicker from "react-native-dropdown-picker";
import SubtitleText from "./building_blocks/Subtitle";
import RegularText from "./building_blocks/RegularText";
import Title from "./building_blocks/Title";

enum Page {
  INFO = 1,
  CATEGORY,
  REVIEW,
  SCORE,
}
export default function HealthyFood() {
  const [started, setStarted] = useState(false);
  return !started ? <DefaultWaiting setStarted={setStarted} /> : <Game />;
}

function DefaultWaiting(props: {
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <View
      style={{
        ...styles.bg,
        flex: 1,
        display: "flex",
        alignItems: "center",
        paddingTop: "30%",
      }}
    >
      <Image
        source={require("../assets/food_plate.png")}
        style={{ width: 100, height: 100, marginBottom: 30 }}
      />
      <SubtitleText>Nutrition Game</SubtitleText>
      <Pressable style={styles.ctaBtn} onPress={() => props.setStarted(true)}>
        <Text
          style={{ ...styles.baseText, ...styles.regularText }}
          accessible={true}
          accessibilityLabel={"Start the nutrition game"}
        >
          Start
        </Text>
      </Pressable>
    </View>
  );
}
function Game() {
  const [page, setPage] = useState<Page>(Page.INFO);
  return (
    <View style={{ ...styles.container, ...styles.bg }}>
      {renderGamePage(page, setPage)}
    </View>
  );
}

function renderGamePage(
  page: Page,
  setPage: React.Dispatch<React.SetStateAction<Page>>
) {
  switch (page) {
    case Page.INFO:
      return <Info setPage={setPage} />;
    case Page.CATEGORY:
      return <SelectCategoryGame setPage={setPage} />;
  }
}

function Info(props: { setPage: React.Dispatch<React.SetStateAction<Page>> }) {
  const food_items = info.good_bad.map((item, index) => {
    return (
      <View
        accessible={true}
        key={index}
        style={nutrition_styles.infoContainer}
      >
        <Text style={{ ...styles.baseText, ...styles.regularText }}>
          {item.name}
        </Text>
        {item.good ? (
          <Text
            style={nutrition_styles.foodIsHealthy}
            accessibilityLabel={"are Good"}
          >
            ✅
          </Text>
        ) : (
          <Text
            style={nutrition_styles.foodIsHealthy}
            accessibilityLabel={"are not good"}
          >
            ❌
          </Text>
        )}
      </View>
    );
  });
  const rows = [];
  for (let i = 0; i < food_items.length; i += 2) {
    rows.push(
      <View
        key={i}
        style={{ ...nutrition_styles.row, ...styles.container, ...styles.bg }}
      >
        {food_items[i]}
        {food_items[i + 1]}
      </View>
    );
  }
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          ...styles.container,
          width: "100%",
          ...styles.bg,
        }}
      >
        {rows}
        <Pressable
          style={[styles.ctaBtn, { marginBottom: 40 }]}
          accessibilityLabel="Go to the next category section"
          onPress={() => props.setPage(Page.CATEGORY)}
        >
          <RegularText>Start</RegularText>
        </Pressable>
      </ScrollView>
    </>
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function SelectCategoryGame(props: {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}) {
  const food = shuffle(info.food);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(food[0].name);
  const [idx, setIdx] = useState(0);
  const [total, setTotal] = useState(0);
  const [vegTotal, setVegTotal] = useState(0);
  const [protienTotal, setProtienTotal] = useState(0);
  const [grainTotal, setGrainTotal] = useState(0);
  const [dairyTotal, setDairyTotal] = useState(0);
  const [items, setItems] = useState(
    food.map((item) => {
      return {
        label: item.name,
        value: item.name,
      };
    })
  );
  const categoriesView = categories.map((category, index) => {
    return (
      <View key={index} style={[styles.container, styles.bg, { width: 300 }]}>
        <Title>{category.name}</Title>
        <RegularText style={{ margin: 20 }}>Select the best food choice</RegularText>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Pressable
          style={[styles.ctaBtn, { marginTop: 40 }]}
          accessibilityLabel={
            index == categories.length - 1 ? "See total" : "Submit category"
          }
          onPress={() => {
            setIdx(idx + 1);
            setOpen(false);
            const item = food.find((item) => item.name === value)!;
            if (item.category === index) {
              setTotal(total + item.points);
              switch (item.category) {
                case 0:
                  console.log(index);
                  setVegTotal(vegTotal + item.points);
                  break;
                case 1:
                  setProtienTotal(protienTotal + item.points);
                  break;
                case 2:
                  setGrainTotal(grainTotal + item.points);
                  break;
                case 3:
                  setDairyTotal(dairyTotal + item.points);
                  break;
                default:
                  break;
              }
            }
          }}
        >
          <RegularText>
            {index == categories.length - 1 ? "Total" : "Submit"}
          </RegularText>
        </Pressable>
      </View>
    );
  });
  return (
    <>
      {idx == categories.length ? (
        <TotalView
          total={total}
          vegTotal={vegTotal}
          proteinTotal={protienTotal}
          grainTotal={grainTotal}
          dairyTotal={dairyTotal}
        />
      ) : (
        categoriesView[idx]
      )}
    </>
  );
}

function TotalView(props: {
  total: number;
  vegTotal: number;
  proteinTotal: number;
  grainTotal: number;
  dairyTotal: number;
}) {
  return (
    <View style={[styles.container, styles.bg]}>
      <Title>Score</Title>
      <SubtitleText style={{ marginTop: 20 }}>
        Your score is {props.total.toString()}/{categories.length * 2}
      </SubtitleText>
      <SubtitleText style={{ margin: 20 }}>
        That is {((props.total / (categories.length * 2)) * 100).toFixed(2)}%
      </SubtitleText>
      <RegularText>Vegetables: {props.vegTotal.toString()}</RegularText>
      <RegularText>Protein: {props.proteinTotal.toString()}</RegularText>
      <RegularText>Grain: {props.grainTotal.toString()}</RegularText>
      <RegularText>Dairy: {props.dairyTotal.toString()}</RegularText>
    </View>
  );
}
