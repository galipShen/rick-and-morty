import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/screens/Router/Router";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <StatusBar translucent={true} />
      </NavigationContainer>
    </Provider>
  );
}
/**
 * 
 * 
 * import { Provider } from 'react-redux';
import { store } from './src/store/store';
export default function App() {
  return (
    <Provider store={store}>
      <Text>Hello World!</Text>
    </Provider>
  );
}
 */
