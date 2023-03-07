import {
  AlbumSongCountDto,
  ArtistStatDto,
  GenreSongCountDto,
  OverallStatDto,
} from "../types/songTypes";
import axiosClient from "./axiosClient";

export const fetchOverallStatFromServer = (): Promise<OverallStatDto> => {
  const result = axiosClient.get(
    "/songs-stats/overall"
  ) as Promise<OverallStatDto>;
  return result;
};

export const fetchGenreSongCountFromServer = (): Promise<
  GenreSongCountDto[]
> => {
  const result = axiosClient.get("/songs-stats/genre-songs") as Promise<
    GenreSongCountDto[]
  >;
  return result;
};

export const fetchArtistsStatFromServer = (): Promise<ArtistStatDto[]> => {
  const result = axiosClient.get("/songs-stats/artist-songs-albums") as Promise<
    ArtistStatDto[]
  >;
  return result;
};

export const fetchAlbumsStatFromServer = (): Promise<AlbumSongCountDto[]> => {
  const result = axiosClient.get("/songs-stats/album-songs") as Promise<
    AlbumSongCountDto[]
  >;
  return result;
};
