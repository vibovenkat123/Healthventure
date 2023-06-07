import styles from './styles';
import {Button, Pressable, Text, View} from 'react-native';
import Home from "./components/Home";
import Nutrition from "./components/Nutrition";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={"Home"} component={Home} />
              <Stack.Screen name={"Nutrition"} component={Nutrition} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
