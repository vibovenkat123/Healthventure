import { View } from "react-native";
import Title from "./building_blocks/Title";
import styles from "../styles";
import SubtitleText from "./building_blocks/Subtitle";
import RegularText from "./building_blocks/RegularText";

export default function About() {
  return (
    <View style={{ ...styles.container, ...styles.bg, padding: 30, flex: 1 }}>
      <Title>About</Title>
      <SubtitleText style={{ textAlign: "center", marginTop: 20 }}>
        About Healthventure and creators of it
      </SubtitleText>
      <RegularText style={{ fontSize: 15, marginTop: 20, textAlign: "center" }}>
        In this game, players are tasked with different real-life 
        situations. The objective of the game is to
        successfully make correct choices in each game to gain wellness points.
        The main goal is to teach players about healthy habits while keeping the
        gameplay enjoyable.
      </RegularText>
      <RegularText style={{ fontSize: 15, marginTop: 20, textAlign: "center" }}>
        This game was created by Vaibhav Venkat {"(developer, designer)"} and Vishruit Venkat {"(product manager)"}.
      </RegularText>
    </View>
  );
}
