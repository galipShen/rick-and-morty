import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Pagination({
  itemsPerPage,
  items,
  currentPage,
  handlePagination,
}) {
  const pageNums = [];

  for (let i = 1; i <= items / itemsPerPage; i++) {
    pageNums.push(i);
  }
  console.log(pageNums);
  return (
    <View>
      <Text>Pagination</Text>
      <FlatList
        style={{ backgroundColor: "red" }}
        data={pageNums}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePagination(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
