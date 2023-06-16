import { Pressable, View } from "react-native";
import styles from "../styles";
import RegularText from "./building_blocks/RegularText";
import Title from "./building_blocks/Title";

export default function Home({ navigation }) {
  return (
    <View style={{ ...styles.container, ...styles.bg }}>
      <Title>Healthventure</Title>
      <Pressable
        accessible={true}
        accessibilityLabel={"Begin the nutrition game"}
        accessibilityHint="Start the new nutrition game, pick the right healthy foods to gain points"
        style={styles.ctaBtn}
        onPress={() => navigation.navigate("Nutrition")}
      >
        <RegularText>🍱 Nutrition</RegularText>
      </Pressable>
      <Pressable
        style={styles.ctaBtn}
        accessible={true}
        accessibilityLabel={"Begin the outbreak game"}
        onPress={() => navigation.navigate("Outbreak")}
        accessibilityHint={
          "Start the new outbreak game, help identify people who are sick and quickly quarantine them"
        }
      >
        <RegularText>🦠 Outbreak</RegularText>
      </Pressable>
    </View>
  );
}
