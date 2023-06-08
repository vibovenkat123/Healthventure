import { Pressable, Text, View } from "react-native";
import styles from "../styles";

export default function Home({ navigation }) {
    return (
        <View style={{ ...styles.container, ...styles.bg }}>
            <Text style={{ ...styles.titleText, ...styles.baseText }} accessible={true}>Healthventure</Text>
            <Pressable accessible={true} accessibilityLabel={"Begin the nutrition game"}
                accessibilityHint="Start the new nutrition game, pick the right healthy foods to gain points" style={styles.ctaBtn} onPress={() =>
                    navigation.navigate('Nutrition')
                }>
                <Text style={{ ...styles.regularText, ...styles.baseText }}>🍱 Nutrition</Text>
            </Pressable>
            <Pressable style={styles.ctaBtn} accessible={true} accessibilityLabel={"Begin the outbreak game"} onPress={() =>
                navigation.navigate('Outbreak')
            }
                accessibilityHint={"Start the new outbreak game, help identify people who are sick and quickly quarantine them"}>
                <Text style={{ ...styles.regularText, ...styles.baseText }}>🦠 Outbreak</Text>
            </Pressable>
        </View>
    )
}
