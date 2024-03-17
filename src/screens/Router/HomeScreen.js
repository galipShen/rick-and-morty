import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Counter } from "../../components/Counter";
import { fetchEpisodes } from "../../store/episodesSlice";
import Pagination from "../../components/Pagination";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes.episodes);
  const status = useSelector((state) => state.episodes.episodesStatus);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEpisodes = episodes?.results.filter((episode) =>
    episode.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEpisodes());
    }
  }, [status, dispatch]);

  useEffect(() => {
    console.log(episodes);
  }, [episodes]);

  const handlePagination = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const elementsNumsInPage = 6;
  const lastItemIndex = currentPage * elementsNumsInPage;
  const firstItemIndex = lastItemIndex - elementsNumsInPage;
  const currentItems =
    episodes?.results.slice(firstItemIndex, lastItemIndex) ?? [];

  return (
    <View style={styles.container}>
      {/* <Text>HomeScreen</Text>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Episode")}
      >
        <Text>BASSS</Text>
      </TouchableOpacity> */}
      {/* <Counter /> */}
      <TextInput
        backgroundColor="blue"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />

      <FlatList
        data={searchTerm != "" ? filteredEpisodes : currentItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Episode", { episodeId: item.id })
            }
          >
            <Text>
              {item.episode}
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        style={{ backgroundColor: "yellow" }}
      />
      <Pagination
        itemsPerPage={elementsNumsInPage}
        items={episodes?.results.length ?? []}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
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
