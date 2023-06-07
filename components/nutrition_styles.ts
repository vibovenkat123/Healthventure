import {StyleSheet} from "react-native";
import styles from "../styles";
const nutrition_styles = StyleSheet.create({
    infoContainer: {
        ...styles.ctaBtn,
        ...styles.container,
        flexDirection: "row",
        gap: 15,
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: 15,
        padding: 10,
    },
    foodIsHealthy: {
        ...styles.baseText,
        ...styles.regularText,
        marginBottom: 3
    }
})

export default nutrition_styles;