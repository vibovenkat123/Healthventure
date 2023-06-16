import styles from "../../styles";
import { Text } from "react-native";
export default function RegularText({
  children,
  style = {},
  accessibilityLabel = "",
}) {
  return (
    <Text
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      style={{ ...styles.baseText, ...styles.regularText, ...style }}
    >
      {children}
    </Text>
  );
}
