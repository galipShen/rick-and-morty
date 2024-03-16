import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Counter } from "../../components/Counter";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>HomeScreen</Text>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Episode")}
      >
        <Text>BASSS</Text>
      </TouchableOpacity> */}
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "green",
  },
});
