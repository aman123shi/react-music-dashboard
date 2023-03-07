export type GenreBarChartDto = { genre: string; totalSongs: number };

export type SongDto = {
  _id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
};

export type OverallStatDto = {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
};

export type GenreSongCountDto = {
  genre: string;
  totalSongs: number;
};

export type ArtistStatDto = {
  artist: string;
  totalSongs: number;
  totalAlbums: number;
};

export type AlbumSongCountDto = {
  album: string;
  totalSongs: number;
};
