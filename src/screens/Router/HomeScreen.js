import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Episode")}>
        <Text>BASSS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
