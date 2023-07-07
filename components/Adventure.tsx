import { View } from "react-native";
import styles from "../styles";
import RegularText from "./building_blocks/RegularText";
import {
  AdventureItem,
  adventureGame,
  AdventureOption,
} from "../content/adventure";
import { Dispatch, SetStateAction, useState } from "react";
import Btn from "./building_blocks/Btn";
import { usePointStore } from "../src/storage";

export default function Adventure() {
  const [curr, setCurr] = useState(0);
  const increase = usePointStore((state) => state.increase);
  const mappedChoices = adventureGame.map((choice: AdventureItem) => {
    if (
      curr == adventureGame.length - 1 &&
      choice.id == adventureGame.length - 1
    ) {
      increase(5);
    }
    return (
      <View style={[styles.container, styles.bg]} key={choice.id}>
        <RegularText
          style={[
            choice.failed || choice.id == adventureGame.length - 1
              ? { fontSize: 30, padding: 10 }
              : { fontSize: 23, padding: 10 },
          ]}
        >
          {choice.text}
        </RegularText>
        {choice.options && (
          <Option options={choice.options} setCurr={setCurr} />
        )}
        {choice.failed && (
          <Btn style={{ width: 250 }} onPress={() => setCurr(0)}>
            <RegularText>Try Again</RegularText>
          </Btn>
        )}
        {choice.id == adventureGame.length - 1 && (
          <Btn style={{ width: 250 }} onPress={() => setCurr(0)}>
            <RegularText>Play Again</RegularText>
          </Btn>
        )}
      </View>
    );
  });
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
      {mappedChoices[curr]}
    </View>
  );
}

function Option(props: {
  options: AdventureOption[];
  setCurr: Dispatch<SetStateAction<number>>;
}) {
  const mappedOptions = props.options.map((option: AdventureOption) => {
    return (
      <Btn
        key={option.text}
        style={{ width: 250 }}
        onPress={() => {
          props.setCurr(option.next);
        }}
      >
        <RegularText>{option.text}</RegularText>
      </Btn>
    );
  });
  return (
    <View
      style={[{ flexDirection: "column", gap: 15, marginTop: 30 }, styles.bg]}
    >
      {mappedOptions}
    </View>
  );
}
