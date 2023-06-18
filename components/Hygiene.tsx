import { View, Alert } from "react-native";
import styles from "../styles";
import RegularText from "./building_blocks/RegularText";
import { Dispatch, useState } from "react";
import Title from "./building_blocks/Title";
import SubtitleText from "./building_blocks/Subtitle";
import Btn from "./building_blocks/Btn";
import quiz, {
  Option,
  QuizItem,
  correctHandwashOrder,
} from "../content/hygienequiz";
import { DraxList, DraxProvider } from "react-native-drax";
import { shuffle } from "../src/helpers";
import { usePointStore } from "../src/storage";
enum Page {
  HOME = 1,
  BRUSH,
  WASH,
  SKIN,
}

function RenderPage(
  page: Page,
  setPage: Dispatch<React.SetStateAction<Page>>
): JSX.Element {
  switch (page) {
    case Page.HOME:
      return <Hygiene setPage={setPage} page={page} />;
    case Page.BRUSH:
      return <Brush setPage={setPage} />;
    case Page.WASH:
      return <Wash setPage={setPage} />;
    case Page.SKIN:
  }
}
export default function Home() {
  const [page, setPage] = useState<Page>(Page.HOME);
  return RenderPage(page, setPage);
}

function Hygiene(props: {
  page: Page;
  setPage: Dispatch<React.SetStateAction<Page>>;
}) {
  if (props.page == Page.HOME) {
    return (
      <View style={{ ...styles.container, ...styles.bg, flex: 1 }}>
        <Title>Hygiene</Title>
        <SubtitleText style={{ marginTop: 30 }}>Select a game</SubtitleText>
        <Btn
          onPress={() => props.setPage(Page.BRUSH)}
          accessibilityLabel="Play the brushing teeth game"
        >
          <RegularText>🦷 Brush Teeth</RegularText>
        </Btn>
        <Btn
          onPress={() => props.setPage(Page.WASH)}
          style={{ display: "flex" }}
        >
          <RegularText accessibilityLabel="Play the washing hands game">
            🧼 Wash Hands
          </RegularText>
        </Btn>
      </View>
    );
  }
  return RenderPage(props.page, props.setPage);
}
function GenOptions(props: {
  quizItem: QuizItem;
  options: Option[];
  idx: number;
  setPoints: Dispatch<React.SetStateAction<number>>;
  points: number;
  setQuestion: Dispatch<React.SetStateAction<number>>;
  question: number;
}) {
  const options = props.options.map((item) => {
    return (
      <Btn
        onPress={() => {
          if (props.quizItem.answer == item.id) {
            props.setPoints(props.points + 1);
            Alert.alert("Correct!", "You got the answer right!", [
              {
                text: "Next Question",
                onPress: () => props.setQuestion(props.question + 1),
              },
            ]);
          } else {
            Alert.alert(
              "Incorrect!",
              `The correct answer was:
${props.quizItem.options[props.quizItem.answer - 1].text}
${quiz.brush[props.idx].reason ? "\n" + quiz.brush[props.idx].reason : ""}
            `,
              [
                {
                  text: "Next Question",
                  onPress: () => props.setQuestion(props.question + 1),
                },
              ]
            );
          }
        }}
        style={{ width: 200 }}
        key={item.text}
      >
        <RegularText>{item.text}</RegularText>
      </Btn>
    );
  });
  return options;
}
function Brush(props: { setPage: Dispatch<React.SetStateAction<Page>> }) {
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState(0);
  const quizElems = quiz.brush.map((item, index) => {
    return (
      <View
        style={{
          ...styles.bg,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        key={item.question}
      >
        <SubtitleText style={{ textAlign: "center" }}>
          {item.question}
        </SubtitleText>
        {GenOptions({
          quizItem: item,
          options: item.options,
          setPoints: setPoints,
          points: points,
          setQuestion: setQuestion,
          question: question,
          idx: index,
        })}
      </View>
    );
  });
  return (
    <View
      style={{
        ...styles.container,
        ...styles.bg,
        flex: 1,
        padding: 20,
      }}
    >
      <Title style={{ marginBottom: 20 }}>Brushing Quiz!!</Title>
      {question != quiz.brush.length ? (
        quizElems[question]
      ) : (
        <TotalView
          points={points}
          setPage={props.setPage}
          length={quiz.brush.length}
        />
      )}
    </View>
  );
}

function TotalView(props: {
  points: number;
  setPage: Dispatch<React.SetStateAction<Page>>;
  length: number;
}) {
  const increase = usePointStore((state) => state.increase);
  increase(props.points)
  return (
    <View
      style={{
        ...styles.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SubtitleText style={{ textAlign: "center" }}>
        You got {props.points} out of {props.length} correct!
      </SubtitleText>
      <RegularText style={{ textAlign: "center", marginTop: 20 }}>
        That is {Math.round((props.points / props.length) * 100)}% of questions
        correct!
      </RegularText>
      <Btn onPress={() => props.setPage(Page.HOME)} style={{ width: "100%" }}>
        <RegularText>Go back to the hygiene page</RegularText>
      </Btn>
    </View>
  );
}

// wash hands
function Wash(props: { setPage: Dispatch<React.SetStateAction<Page>> }) {
  const [total, setTotal] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  return (
    <View style={{ ...styles.container, ...styles.bg, flex: 1 , paddingTop: 30}}>
      <SubtitleText style={{textAlign: "center"}}>Drag the items to the correct order for washing your hands!</SubtitleText>
      {isEnded ? (
        <TotalView
          points={total}
          length={quiz.handwash.length}
          setPage={props.setPage}
        />
      ) : (
        <WashOrder total={total} setTotal={setTotal} setIsEnded={setIsEnded} />
      )}
    </View>
  );
}
function WashOrder(props: {
  total: number;
  setTotal: Dispatch<React.SetStateAction<number>>;
  setIsEnded: Dispatch<React.SetStateAction<boolean>>;
}) {
  const [orderData, setOrderData] = useState(shuffle(quiz.handwash));
  return (
    <DraxProvider style={{ flex: 1 }}>
      <View
        style={[styles.container, styles.bg, { flex: 1 }, { paddingTop: 50 }]}
      >
        <Btn
          onPress={() => {
            let points = 0;
            for (let i = 0; i < orderData.length; i++) {
              if (orderData[i].id == correctHandwashOrder[i]) {
                points++;
              }
            }
            props.setTotal(points);
            props.setIsEnded(true);
          }}
        >
          <RegularText>Submit</RegularText>
        </Btn>
        <DraxList
          data={orderData}
          style={{ width: "100%", padding: 30, marginBottom: 30}}
          renderItemContent={({ item, index }) => (
            <Btn key={item.id} style={{ width: "100%" }}>
              <SubtitleText>{item.emoji}</SubtitleText>
              <RegularText>{item.text}</RegularText>
            </Btn>
          )}
          onItemReorder={({ fromIndex, toIndex }) => {
            const newData = orderData.slice();
            newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
            setOrderData(newData);
          }}
          keyExtractor={(item) => item.id.toString()}
        ></DraxList>
      </View>
    </DraxProvider>
  );
}
