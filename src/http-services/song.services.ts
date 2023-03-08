import { SongDto } from "../types/songTypes";
import axiosClient from "./axiosClient";

type partialOfSong = Partial<SongDto>;

export const fetchAllSongsFromServer = (): Promise<SongDto[]> => {
  const result = axiosClient.get("/songs") as Promise<SongDto[]>;
  return result;
};

export const createNewSongToServer = (song: SongDto): Promise<SongDto> => {
  if (song._id) delete song._id;
  const result = axiosClient.post("/songs", song) as Promise<SongDto>;
  return result;
};

export const updateSongToServer = (song: partialOfSong): Promise<SongDto> => {
  if (!song._id) return Promise.reject("song Id must be Provided");

  const result = axiosClient.put(
    `/songs/${song._id}`,
    song
  ) as Promise<SongDto>;
  return result;
};

export const deleteSongToServer = (id: string): Promise<SongDto> => {
  const result = axiosClient.delete(`/songs/${id}`) as Promise<SongDto>;
  return result;
};
