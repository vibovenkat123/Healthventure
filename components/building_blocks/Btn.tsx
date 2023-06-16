import { Pressable } from "react-native";
import styles from "../../styles";

export default function Btn({
  children,
  style = {},
  onPress = () => {},
  accessibilityLabel = "",
  accessibilityHint = "",
}: {
  children: any;
  style?: any;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}) {
  if (accessibilityHint === "") {
    accessibilityHint = accessibilityLabel;
  }
  return (
    <Pressable
      style={{ ...styles.ctaBtn, ...style }}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      accessibilityHint={accessibilityHint}
    >
      {children}
    </Pressable>
  );
}
