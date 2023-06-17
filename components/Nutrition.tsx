import styles from "../styles";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { Dispatch, useState } from "react";
import info, { categories, FoodCategory } from "../content/food";
import nutrition_styles from "./nutrition_styles";
import DropDownPicker from "react-native-dropdown-picker";
import SubtitleText from "./building_blocks/Subtitle";
import RegularText from "./building_blocks/RegularText";
import Title from "./building_blocks/Title";
import Btn from "./building_blocks/Btn";
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
  setStarted: Dispatch<React.SetStateAction<boolean>>;
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
      <RegularText
        style={{
          textAlign: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Pick the right healthy foods to gain points
      </RegularText>
      <Btn onPress={() => props.setStarted(true)}>
        <RegularText accessibilityLabel={"Start the nutrition game"}>
          Start
        </RegularText>
      </Btn>
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
  setPage: Dispatch<React.SetStateAction<Page>>
) {
  switch (page) {
    case Page.INFO:
      return <Info setPage={setPage} />;
    case Page.CATEGORY:
      return <SelectCategoryGame setPage={setPage} />;
  }
}
function Test(props: { test: string }) {
}
function Info(props: { setPage: Dispatch<React.SetStateAction<Page>> }) {
  const food_items = info.good_bad.map((item, index) => {
    return (
      <View
        accessible={true}
        key={index}
        style={nutrition_styles.infoContainer}
      >
        <RegularText>{item.name}</RegularText>
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
        <Btn
          style={{ marginBottom: 40 }}
          accessibilityLabel="Go to the next category section"
          onPress={() => props.setPage(Page.CATEGORY)}
        >
          <RegularText>Start</RegularText>
        </Btn>
      </ScrollView>
    </>
  );
}

function shuffle(array: any[]) {
  let randomIndex: number = 0;
  let currentIndex = array.length;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function SelectCategoryGame(props: {
  setPage: Dispatch<React.SetStateAction<Page>>;
}) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [total, setTotal] = useState(0);
  const [vegTotal, setVegTotal] = useState(0);
  const [protienTotal, setProtienTotal] = useState(0);
  const [grainTotal, setGrainTotal] = useState(0);
  const [dairyTotal, setDairyTotal] = useState(0);
  const [fruitTotal, setFruitTotal] = useState(0);
  type Total = {
    total: number;
    setTotal: Dispatch<React.SetStateAction<number>>;
  };
  const totals = [
    { total: vegTotal, setTotal: setVegTotal },
    { total: protienTotal, setTotal: setProtienTotal },
    { total: grainTotal, setTotal: setGrainTotal },
    { total: dairyTotal, setTotal: setDairyTotal },
    { total: fruitTotal, setTotal: setFruitTotal },
  ];
  const food = shuffle(info.food);
  function SubmitCategory(index: number, value: string) {
    setIdx(idx + 1);
    setOpen(false);
    const item = food.find((item) => item.name === value)!;
    if (item.category === index) {
      setTotal(total + item.points);
      totals[item.category].setTotal(totals[item.category].total + item.points);
    }
  }
  const categoriesView = categories.map((category, index) => {
    const [items, setItems] = useState(
      food
        .map((item) => {
          return {
            label: item.name,
            value: item.name,
          };
        })
    );
    const [value, setValue] = useState(items[0].label);
    return (
      <View key={index} style={[styles.container, styles.bg, { width: 300 }]}>
        <Title>{category.name}</Title>
        <RegularText style={{ margin: 20 }}>
          Select the best food choice
        </RegularText>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Btn
          style={{ marginTop: 40 }}
          accessibilityLabel={
            index == categories.length - 1 ? "See total" : "Submit category"
          }
          onPress={() => SubmitCategory(index, value)}
        >
          <RegularText>
            {index == categories.length - 1 ? "Total" : "Submit"}
          </RegularText>
        </Btn>
      </View>
    );
  });
  return (
    <>
      {idx == categories.length ? (
        <TotalView
          fruitTotal={fruitTotal}
          vegTotal={vegTotal}
          proteinTotal={protienTotal}
          grainTotal={grainTotal}
          dairyTotal={dairyTotal}
          setPage={props.setPage}
        />
      ) : (
        categoriesView[idx]
      )}
    </>
  );
}

function TotalView(props: {
  vegTotal: number;
  proteinTotal: number;
  grainTotal: number;
  dairyTotal: number;
  fruitTotal: number;
  setPage: Dispatch<React.SetStateAction<Page>>;
}) {
  const total =
    props.vegTotal +
    props.proteinTotal +
    props.grainTotal +
    props.dairyTotal +
    props.fruitTotal;
  return (
    <View style={[styles.container, styles.bg]}>
      <Title>Score</Title>
      <SubtitleText style={{ marginTop: 20 }}>
        Your score is {total.toString()}/{categories.length * 2}
      </SubtitleText>
      <SubtitleText style={{ margin: 20 }}>
        That is {((total / (categories.length * 2)) * 100).toFixed(2)}%
      </SubtitleText>
      <RegularText>Vegetables: {props.vegTotal.toString()}</RegularText>
      <RegularText>Protein: {props.proteinTotal.toString()}</RegularText>
      <RegularText>Grain: {props.grainTotal.toString()}</RegularText>
      <RegularText>Dairy: {props.dairyTotal.toString()}</RegularText>
      <Btn
          onPress={() => props.setPage(Page.INFO)}
      >
        <RegularText
          accessibilityLabel="Try again"
        >
          Try again
        </RegularText>
      </Btn>
    </View>
  );
}