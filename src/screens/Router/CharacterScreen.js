import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCharacterStatus,
  fetchEpisodeByCharId,
} from "../../store/episodesSlice";
import {
  addFavorite,
  loadFavorites,
  removeFavorite,
  saveFavorites,
} from "../../store/favoritesSlice";

export default function CharacterScreen({ route, navigation }) {
  const charId = route.params.charId;
  console.log("charId", charId);

  const dispatch = useDispatch();
  const character = useSelector((state) => state.episodes.character);
  const status = useSelector((state) => state.episodes.characterStatus);
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log("FAV", favorites);

  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEpisodeByCharId(charId));
    }
    return () => {
      dispatch(resetCharacterStatus());
    };
  }, [dispatch]);

  useEffect(() => {
    console.log(character);
  }, [character]);

  console.log("character+++++++", character);
  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  const handleFavoritePress = () => {
    if (favorites.some((fav) => fav.id === character.id)) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(addFavorite(character));
    }
    dispatch(saveFavorites(favorites));
  };
  return (
    <View>
      <Text>CharacterScreen</Text>
      <TouchableOpacity onPress={() => handleFavoritePress()}>
        <Text>Favori Ekle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FavCharacter")}>
        <Text>Favorilere GİT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
