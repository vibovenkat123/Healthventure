import Home from "./components/Home";
import Nutrition from "./components/Nutrition";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Outbreak from "./components/Outbreak";
import Hygiene from "./components/Hygiene";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen name={"Nutrition"} component={Nutrition} />
          <Stack.Screen name={"Outbreak"} component={Outbreak} />
          <Stack.Screen name={"Hygiene"} component={Hygiene} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
