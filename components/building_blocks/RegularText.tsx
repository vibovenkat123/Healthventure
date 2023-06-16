import styles from "../../styles";
import { Text } from "react-native";
export default function RegularText({ children, style = {} }) {
  return (
    <Text
      accessible={true}
      style={{ ...styles.baseText, ...styles.regularText, ...style }}
    >
      {children}
    </Text>
  );
}
