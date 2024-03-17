import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { removeFavorite } from "../../store/favoritesSlice";

export default function FavCharacterScreen() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log("FAV-IN SCREEN", favorites);

  const handleFavoritePress = (char) => {
    const isFavorite = favorites.some((fav) => fav.id === char.id);
    if (isFavorite) {
      Alert.alert("FAVORI SIL", "EMIN MISINIZ", [
        { text: "IPTAL", style: "cancel" },
        { text: "EVET", onPress: () => dispatch(removeFavorite(char.id)) },
      ]);
    }
  };
  return (
    <View>
      <Text>FavCharacterScreen</Text>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => handleFavoritePress(item)}>
              <Text>SIL</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
