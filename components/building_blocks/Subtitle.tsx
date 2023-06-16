import styles from "../../styles";
import { Text } from "react-native";
export default function SubtitleText({ children, style = {} }) {
  return (
    <Text style={{ ...styles.baseText, ...styles.subTitleText, ...style }}>
      {children}
    </Text>
  );
}
