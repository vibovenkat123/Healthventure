import { View } from "react-native";
import styles from "../styles";
import RegularText from "./building_blocks/RegularText";
import Title from "./building_blocks/Title";
import Btn from "./building_blocks/Btn";
import { usePointStore } from "../src/storage";

export default function Home({ navigation }) {
  const points = usePointStore((state) => state.points);
  return (
    <View style={[styles.container, styles.bg]}>
      <Title>Healthventure</Title>
      <RegularText style={{ marginTop: 30 }}>
        You have {points} wellness points
      </RegularText>
      <Btn
        accessibilityLabel={"Begin the nutrition game"}
        accessibilityHint="Start the new nutrition game, pick the right healthy foods to gain points"
        onPress={() => navigation.navigate("Nutrition")}
      >
        <RegularText>🍱 Nutrition</RegularText>
      </Btn>
      <Btn
        accessibilityLabel={"Begin the hygiene game"}
        onPress={() => navigation.navigate("Hygiene")}
        accessibilityHint={
          "Start the new hygiene game, learn healthy hygiene habits"
        }
      >
        <RegularText>🧼 Hygiene</RegularText>
      </Btn>
      <Btn
        accessibilityLabel={"Help bob with his sickness"}
        onPress={() => navigation.navigate("Help Bob")}
        accessibilityHint={
          "Help bob with his sickness, all in a choose your own adventure game"
        }
      >
        <RegularText>🤒 Help Bob</RegularText>
      </Btn>
      <Btn
        accessibilityLabel={"Learn more about Healthventure"}
        onPress={() => navigation.navigate("About")}
        accessibilityHint={
          "Learn about the game mechanics and the team behind Healthventure"
        }
      >
        <RegularText>📘 About</RegularText>
      </Btn>
    </View>
  );
}
