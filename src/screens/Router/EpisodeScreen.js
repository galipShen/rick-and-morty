import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEpisodeById,
  resetEpisodeStatus,
} from "../../store/episodesSlice";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function EpisodeScreen({ route, navigation }) {
  const episodeId = route.params.episodeId;
  console.log("episodeId", episodeId);

  const dispatch = useDispatch();
  const episode = useSelector((state) => state.episodes.episode);
  const status = useSelector((state) => state.episodes.episodeStatus);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("status---------", status);
    if (status === "idle") {
      dispatch(fetchEpisodeById(episodeId));
    }
    return () => {
      dispatch(resetEpisodeStatus());
    };
  }, [dispatch]);

  useEffect(() => {
    console.log(episode);
  }, [episode]);

  const handleCharId = (charLink) => {
    const newArrStr = charLink.split("/");
    return newArrStr[newArrStr.length - 1];
  };

  return (
    <View>
      <Text>EpisodeScreen</Text>
      <FlatList
        data={episode && episode.characters}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Character", {
                charId: handleCharId(item),
              })
            }
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
