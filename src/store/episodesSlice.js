import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchEpisodes",
  async () => {
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    const episodes = await response.json();
    return episodes;
  }
);

export const fetchEpisodeById = createAsyncThunk(
  "episodes/fetchEpisodeById",
  async (id) => {
    console.log("id----------", id);
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    const episode = await response.json();
    return episode;
  }
);
export const fetchEpisodeByCharId = createAsyncThunk(
  "episodes/fetchEpisodeByCharId",
  async (charId) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${charId}`
    );
    const character = await response.json();
    return character;
  }
);

export const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    episodes: null,
    episode: null,
    character: null,
    episodesStatus: "idle",
    episodeStatus: "idle",
    characterStatus: "idle",
  },
  reducers: {
    resetEpisodesStatus: (state) => {
      state.episodesStatus = "idle";
    },
    resetEpisodeStatus: (state) => {
      state.episodeStatus = "idle";
    },
    resetCharacterStatus: (state) => {
      state.characterStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.episodesStatus = "loading";
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.episodesStatus = "succeeded";
        state.episodes = action.payload;
      })
      .addCase(fetchEpisodes.rejected, (state) => {
        state.episodesStatus = "failed";
      })
      //ok
      .addCase(fetchEpisodeById.pending, (state) => {
        state.episodeStatus = "loading";
      })
      .addCase(fetchEpisodeById.fulfilled, (state, action) => {
        state.episodeStatus = "succeeded";
        state.episode = action.payload;
      })
      .addCase(fetchEpisodeById.rejected, (state) => {
        state.episodeStatus = "failed";
      })
      .addCase(fetchEpisodeByCharId.pending, (state) => {
        state.characterStatus = "loading";
      })
      .addCase(fetchEpisodeByCharId.fulfilled, (state, action) => {
        state.characterStatus = "succeeded";
        state.character = action.payload;
      })
      .addCase(fetchEpisodeByCharId.rejected, (state) => {
        state.characterStatus = "failed";
      });
  },
});

export default episodesSlice.reducer;
export const { resetCharacterStatus, resetEpisodesStatus, resetEpisodeStatus } =
  episodesSlice.actions;
