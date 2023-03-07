import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongDto } from "../../types/songTypes";

export interface SongState {
  loading: boolean;
  openAddSongModal: boolean;
  openEditSongModal: boolean;
  songs: SongDto[];
  error: string;
}

const initialState: SongState = {
  loading: false,
  openAddSongModal: false,
  openEditSongModal: false,
  songs: [],
  error: "",
};

export const notificationSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addNewSong: (state, action: PayloadAction<SongDto>) => {
      state.loading = true;
    },
    updateSong: (state, action: PayloadAction<Partial<SongDto>>) => {
      state.loading = true;
    },
    getSongs: (state) => {
      state.loading = true;
    },

    deleteSong: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    addNewSongSuccess: (state, action: PayloadAction<SongDto>) => {
      state.loading = false;
      state.songs.push(action.payload);
    },
    getSongsSuccess: (state, action: PayloadAction<SongDto[]>) => {
      state.loading = false;
      state.songs = action.payload;
    },
    updateSongSuccess: (state, action: PayloadAction<SongDto>) => {
      state.loading = false;
      const songIndex = state.songs.findIndex(
        (song) => song._id == action.payload._id
      );
      state.songs.splice(songIndex, 1, action.payload);
    },
    deleteSongSuccess: (state, action: PayloadAction<SongDto>) => {
      state.loading = false;
      const songIndex = state.songs.findIndex(
        (song) => song._id == action.payload._id
      );
      state.songs.splice(songIndex);
    },
    toggleCreateSongModal: (state) => {
      state.openAddSongModal = !state.openAddSongModal;
    },
    toggleEditSongModal: (state) => {
      state.openAddSongModal = !state.openAddSongModal;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});
export const {
  addNewSong,
  addNewSongSuccess,
  deleteSong,
  deleteSongSuccess,
  getSongs,
  getSongsSuccess,
  toggleCreateSongModal,
  toggleEditSongModal,
  updateSong,
  updateSongSuccess,
  setError,
} = notificationSlice.actions;
export default notificationSlice.reducer;
