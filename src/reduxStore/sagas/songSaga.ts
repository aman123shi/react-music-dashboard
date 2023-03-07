import { takeLatest, put, call, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { SongDto } from "../../types/songTypes";
import {
  createNewSongToServer,
  deleteSongToServer,
  fetchAllSongsFromServer,
  updateSongToServer,
} from "../../http-services/song.services";
import {
  getSongs,
  getSongsSuccess,
  setError,
  addNewSong,
  addNewSongSuccess,
  deleteSong,
  deleteSongSuccess,
  updateSong,
  updateSongSuccess,
} from "../features/songSlice";
import { showErrorToast, showSuccessToast } from "../../utils/toastHelpers";

function* getSongsAsync() {
  try {
    const songs: SongDto[] = yield call(fetchAllSongsFromServer);
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(setError("Error Fetching Songs"));
    showErrorToast();
  }
}

function* watchFetchSongs() {
  yield takeLatest(getSongs.type, getSongsAsync);
}

function* createSongAsync({ payload }: PayloadAction<SongDto>) {
  try {
    const songPayload = payload;
    const song: SongDto = yield call(createNewSongToServer, songPayload);
    yield put(addNewSongSuccess(song));
    showSuccessToast("Song Added Success");
  } catch (error) {
    yield put(setError("Error Create Songs"));
    showErrorToast();
  }
}

function* watchCreateSong() {
  yield takeLatest(addNewSong.type, createSongAsync);
}

function* updateSongAsync({ payload }: PayloadAction<Partial<SongDto>>) {
  try {
    const songPayload = payload;
    const song: SongDto = yield call(updateSongToServer, songPayload);
    yield put(updateSongSuccess(song));
    showSuccessToast("Song Update Success");
  } catch (error) {
    yield put(setError("Error Update Song"));
    showErrorToast();
  }
}

function* watchUpdateSong() {
  yield takeLatest(updateSong.type, updateSongAsync);
}

function* deleteSongAsync({ payload }: PayloadAction<string>) {
  try {
    const songId = payload;
    const song: SongDto = yield call(deleteSongToServer, songId);
    yield put(deleteSongSuccess(song));
    showSuccessToast("Song Delete Success");
  } catch (error) {
    yield put(setError("Error Update Song"));
    showErrorToast();
  }
}

function* watchDeleteSong() {
  yield takeLatest(deleteSong.type, deleteSongAsync);
}

export const songSagas = [
  fork(watchFetchSongs),
  fork(watchCreateSong),
  fork(watchUpdateSong),
  fork(watchDeleteSong),
];
