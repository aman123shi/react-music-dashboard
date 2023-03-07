import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AlbumSongCountDto,
  ArtistStatDto,
  GenreSongCountDto,
  OverallStatDto,
} from "../../types/songTypes";

export interface DashboardState {
  overallStat: OverallStatDto | undefined;
  genresSongCount: GenreSongCountDto[];
  artistsStat: ArtistStatDto[];
  albumsSongCount: AlbumSongCountDto[];
  loading: boolean;
  error: string;
}

const initialState: DashboardState = {
  overallStat: undefined,
  genresSongCount: [],
  artistsStat: [],
  albumsSongCount: [],
  loading: false,
  error: "",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getOverallStat: (state) => {
      state.loading = true;
    },
    getGenresSongCount: (state) => {
      state.loading = true;
    },
    getArtistsStat: (state) => {
      state.loading = true;
    },
    getAlbumsSongCount: (state) => {
      state.loading = true;
    },
    getOverallStatSuccess: (state, action: PayloadAction<OverallStatDto>) => {
      state.loading = false;
      state.overallStat = action.payload;
    },
    getGenresSongCountSuccess: (
      state,
      action: PayloadAction<GenreSongCountDto[]>
    ) => {
      state.loading = false;
      state.genresSongCount = action.payload;
    },
    getArtistsStatSuccess: (state, action: PayloadAction<ArtistStatDto[]>) => {
      state.loading = false;
      state.artistsStat = action.payload;
    },
    getAlbumsSongCountSuccess: (
      state,
      action: PayloadAction<AlbumSongCountDto[]>
    ) => {
      state.loading = false;
      state.albumsSongCount = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getAlbumsSongCount,
  getAlbumsSongCountSuccess,
  getArtistsStat,
  getArtistsStatSuccess,
  getGenresSongCount,
  getGenresSongCountSuccess,
  getOverallStat,
  getOverallStatSuccess,
  setError,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
