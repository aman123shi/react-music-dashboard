import Group from "@mui/icons-material/Group";
import MusicNote from "@mui/icons-material/MusicNote";
import Album from "@mui/icons-material/Album";
import Genre from "@mui/icons-material/LibraryMusic";
import { Box, Paper, Typography } from "@mui/material";
import { GenreBarChart } from "../../components/GenreBarChart";
import ArtistsTable from "../../components/ArtistsTable";
import AlbumsTable from "../../components/AlbumTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxStore/index";
import {
  getAlbumsSongCount,
  getArtistsStat,
  getOverallStat,
  getGenresSongCount,
} from "../../reduxStore/features/dashboardSlice";
import { useEffect } from "react";
import { homeStyles } from "./home.styles";
export function Home() {
  const dispatch = useDispatch();
  const overallStat = useSelector(
    (state: RootState) => state.dashboard.overallStat
  );
  const albumSongCount = useSelector(
    (state: RootState) => state.dashboard.albumsSongCount
  );
  const artistsStat = useSelector(
    (state: RootState) => state.dashboard.artistsStat
  );
  const genreSongCount = useSelector(
    (state: RootState) => state.dashboard.genresSongCount
  );

  useEffect(() => {
    dispatch(getAlbumsSongCount());
    dispatch(getArtistsStat());
    dispatch(getOverallStat());
    dispatch(getGenresSongCount());
  }, []);

  return (
    <div>
      <Box sx={homeStyles.boxContainer}>
        <Paper elevation={3} sx={{ p: 1 }}>
          <Typography variant="h4">Total Songs</Typography>
          <Box sx={homeStyles.cardContainer}>
            <MusicNote sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
            <Typography variant="h4">{overallStat?.totalSongs}</Typography>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ p: 1 }}>
          <Typography variant="h4">Total Artists</Typography>
          <Box sx={homeStyles.cardContainer}>
            <Group sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
            <Typography variant="h4">{overallStat?.totalArtists}</Typography>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ p: 1 }}>
          <Typography variant="h4">Total Albums</Typography>
          <Box sx={homeStyles.cardContainer}>
            <Album sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
            <Typography variant="h4">{overallStat?.totalAlbums}</Typography>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ p: 1 }}>
          <Typography variant="h4">Total Genres</Typography>
          <Box sx={homeStyles.cardContainer}>
            <Genre sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
            <Typography variant="h4">{overallStat?.totalGenres}</Typography>
          </Box>
        </Paper>
      </Box>
      <div style={{ marginTop: "4rem" }}>
        <Box sx={homeStyles.chartContainer}>
          <Paper elevation={1} sx={{ p: 1 }}>
            <Typography variant="h6"> Genres Info</Typography>
            <GenreBarChart data={genreSongCount} />
          </Paper>
          <Paper elevation={0} sx={{ p: 1 }}>
            <Typography variant="h6"> Artists Info</Typography>
            <ArtistsTable artistsStat={artistsStat} />
          </Paper>
        </Box>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <Box sx={homeStyles.albumTableContainer}>
          <Paper elevation={0} sx={{ p: 1 }}>
            <Typography variant="h6"> Albums Info</Typography>
            <AlbumsTable albumStat={albumSongCount} />
          </Paper>
        </Box>
      </div>
    </div>
  );
}
