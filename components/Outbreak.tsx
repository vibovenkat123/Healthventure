import { useState } from "react";
import { Text, Pressable, View, Image } from "react-native";
import styles from "../styles";
enum Page {
    Game = 1,
    Result,
}
export default function Outbreak() {
    const [started, setStarted] = useState(false);
    return (
        (!started) ? <DefaultViewNotStarted setStarted={setStarted} /> : <Game />
    )
}

function DefaultViewNotStarted(props: { setStarted: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <View style={{ ...styles.bg, flex: 1, display: "flex", alignItems: "center", paddingTop: "30%" }}>
            <Image source={require("../assets/virus.png")} style={{ width: 100, height: 100, marginBottom: 20 }} />
            <Text style={{ ...styles.baseText, ...styles.subTitleText }}>Outbreak Game</Text>
            <Text style={{ ...styles.baseText, ...styles.regularText, textAlign: "center", marginTop: 20, marginBottom: 20 }}>Help identify people who are sick and quickly quarantine them</Text>
            <Pressable style={styles.ctaBtn} onPress={() =>
                props.setStarted(true)
            }>
                <Text style={{ ...styles.baseText, ...styles.regularText }} accessible={true} accessibilityLabel={"Start the outbreak game"}>Start</Text>
            </Pressable>
        </View>
    )
}

function Game() {
    return (
        <View style={{ ...styles.bg, flex: 1, display: "flex", alignItems: "center", paddingTop: "30%" }}>
            <Text style={{ ...styles.baseText, ...styles.subTitleText }}>Outbreak Game</Text>
        </View>
    )
}
