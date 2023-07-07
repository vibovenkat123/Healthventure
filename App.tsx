import Home from "./components/Home";
import Nutrition from "./components/Nutrition";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hygiene from "./components/Hygiene";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import About from "./components/About";
import Adventure from "./components/Adventure";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen name={"Nutrition"} component={Nutrition} />
          <Stack.Screen name={"Hygiene"} component={Hygiene} />
          <Stack.Screen name={"About"} component={About} />
          <Stack.Screen name={"Help Bob"} component={Adventure} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
