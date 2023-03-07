import { takeLatest, put, call, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getAlbumsSongCount,
  getAlbumsSongCountSuccess,
  getArtistsStat,
  getArtistsStatSuccess,
  getGenresSongCount,
  getGenresSongCountSuccess,
  getOverallStat,
  getOverallStatSuccess,
  setError,
} from "../features/dashboardSlice";
import {
  AlbumSongCountDto,
  ArtistStatDto,
  GenreSongCountDto,
  OverallStatDto,
} from "../../types/songTypes";
import {
  fetchAlbumsStatFromServer,
  fetchArtistsStatFromServer,
  fetchGenreSongCountFromServer,
  fetchOverallStatFromServer,
} from "../../http-services/songStat.service";

function* fetchOverallStatAsync() {
  try {
    const overallStat: OverallStatDto = yield call(fetchOverallStatFromServer);
    yield put(getOverallStatSuccess(overallStat));
  } catch (error) {
    yield put(setError("Error Fetching Songs"));
  }
}

function* watchFetchOverallStat() {
  yield takeLatest(getOverallStat.type, fetchOverallStatAsync);
}
//
function* fetchGenresSongCountAsync() {
  try {
    const genresSongCount: GenreSongCountDto[] = yield call(
      fetchGenreSongCountFromServer
    );
    yield put(getGenresSongCountSuccess(genresSongCount));
  } catch (error) {
    yield put(setError("Error Fetching Songs"));
  }
}

function* watchGenresSongCount() {
  yield takeLatest(getGenresSongCount.type, fetchGenresSongCountAsync);
}
//
function* fetchArtistsStatAsync() {
  try {
    const artistsStat: ArtistStatDto[] = yield call(fetchArtistsStatFromServer);
    yield put(getArtistsStatSuccess(artistsStat));
  } catch (error) {
    yield put(setError("Error Fetching Songs"));
  }
}

function* watchArtistsStat() {
  yield takeLatest(getArtistsStat.type, fetchArtistsStatAsync);
}
//
function* fetchAlbumSongCountAsync() {
  try {
    const albumsSongCount: AlbumSongCountDto[] = yield call(
      fetchAlbumsStatFromServer
    );
    yield put(getAlbumsSongCountSuccess(albumsSongCount));
  } catch (error) {
    yield put(setError("Error Fetching Songs"));
  }
}

function* watchAlbumSongCount() {
  yield takeLatest(getAlbumsSongCount.type, fetchAlbumSongCountAsync);
}
export const dashboardSagas = [
  fork(watchFetchOverallStat),
  fork(watchGenresSongCount),
  fork(watchArtistsStat),
  fork(watchAlbumSongCount),
];
