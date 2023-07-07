import styles from "../../styles";
import { StyleProp, Text, TextStyle } from "react-native";
export default function Title({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text style={[styles.baseText, styles.titleText, style]}>{children}</Text>
  );
}
