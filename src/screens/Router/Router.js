import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import HomeScreen from "./HomeScreen";
import EpisodeScreen from "./EpisodeScreen";
import CharacterScreen from "./CharacterScreen";
import FavCharacterScreen from "./FavCharacterScreen";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
      <Stack.Screen name="Character" component={CharacterScreen} />
      <Stack.Screen name="FavCharacter" component={FavCharacterScreen} />
    </Stack.Navigator>
  );
}

/**
 * 
 * 
 *
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
 */
