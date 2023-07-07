import { Pressable, StyleProp, ViewStyle } from "react-native";
import styles from "../../styles";

export default function Btn({
  children,
  style = {},
  onPress = () => {},
  accessibilityLabel = "",
  accessibilityHint = "",
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}) {
  if (accessibilityHint === "") {
    accessibilityHint = accessibilityLabel;
  }
  return (
    <Pressable
      style={[styles.ctaBtn, style]}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      accessibilityHint={accessibilityHint}
    >
      {children}
    </Pressable>
  );
}
