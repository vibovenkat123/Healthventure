import { View, Alert } from "react-native";
import styles from "../styles";
import RegularText from "./building_blocks/RegularText";
import { Dispatch, useState } from "react";
import Title from "./building_blocks/Title";
import SubtitleText from "./building_blocks/Subtitle";
import Btn from "./building_blocks/Btn";
import quiz, { Option, QuizItem } from "../content/hygienequiz";
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
        <Btn onPress={() => props.setPage(Page.BRUSH)}>
          <RegularText>🦷 Brush Teeth</RegularText>
        </Btn>
        <Btn
          onPress={() => props.setPage(Page.WASH)}
          style={{ display: "flex" }}
        >
          <RegularText>🧼 Wash Hands</RegularText>
        </Btn>
      </View>
    );
  }
  return RenderPage(props.page, props.setPage);
}
function GenOptions(props: {
  quizItem: QuizItem;
  options: Option[];
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
  const quizElems = quiz.brush.map((item) => {
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
        <TotalView points={points} setPage={props.setPage} />
      )}
    </View>
  );
}

function TotalView(props: {
  points: number;
  setPage: Dispatch<React.SetStateAction<Page>>;
}) {
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
        You got {props.points} out of {quiz.brush.length} correct!
      </SubtitleText>
      <RegularText style={{ textAlign: "center", marginTop: 20}}>
        That is {Math.round((props.points / quiz.brush.length) * 100)}% of questions correct!
      </RegularText>
      <Btn onPress={() => props.setPage(Page.HOME)} style={{width: "100%"}}>
        <RegularText>Go back to the hygiene page</RegularText>
      </Btn>
    </View>
  );
}
