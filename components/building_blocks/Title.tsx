import styles from "../../styles";
import { Text } from "react-native";

export default function Title({ children, style = {} }) {
  return (
    <Text style={{ ...styles.baseText, ...styles.titleText, ...style }}>
      {children}
    </Text>
  );
}
