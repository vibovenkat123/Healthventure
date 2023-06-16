import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    backgroundColor: "#89CFF0",
  },
  subTitleText: {
    fontSize: 25,
    color: "#000000",
  },
  titleText: {
    fontSize: 40,
    color: "#000000",
  },
  ctaBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#D3C8E6",
    marginTop: 20,
  },
  baseText: {
    fontFamily: Platform.OS === "ios" ? "Futura" : "Roboto",
  },
  regularText: {
    fontSize: 17,
    color: "#333333",
  },
});

export default styles;
