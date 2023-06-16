import { Pressable, View } from "react-native";
import styles from "../styles";
import RegularText from "./building_blocks/RegularText";
import Title from "./building_blocks/Title";
import Btn from "./building_blocks/Btn";

export default function Home({ navigation }) {
  return (
    <View style={{ ...styles.container, ...styles.bg }}>
      <Title>Healthventure</Title>
      <Btn
        accessibilityLabel={"Begin the nutrition game"}
        accessibilityHint="Start the new nutrition game, pick the right healthy foods to gain points"
        onPress={() => navigation.navigate("Nutrition")}
      >
        <RegularText>🍱 Nutrition</RegularText>
      </Btn>
      <Btn
        accessibilityLabel={"Begin the outbreak game"}
        onPress={() => navigation.navigate("Outbreak")}
        accessibilityHint={
          "Start the new outbreak game, help identify people who are sick and quickly quarantine them"
        }
      >
        <RegularText>🦠 Outbreak</RegularText>
      </Btn>
    </View>
  );
}
