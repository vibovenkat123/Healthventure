import styles from "../../styles";
import { StyleProp, Text, TextStyle } from "react-native";
export default function SubtitleText({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text style={[styles.baseText, styles.subTitleText, style]}>
      {children}
    </Text>
  );
}
