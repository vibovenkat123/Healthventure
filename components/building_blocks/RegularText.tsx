import styles from "../../styles";
import { StyleProp, Text, TextStyle } from "react-native";
export default function RegularText({
  children,
  style = {},
  accessibilityLabel = "",
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}) {
  return (
    <Text
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      style={[styles.baseText, styles.regularText, style]}
    >
      {children}
    </Text>
  );
}
