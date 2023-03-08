import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SongDto } from "../types/songTypes";
import Button from "@mui/material/Button";
import CreateSongModal from "./CreateSongModal";
import EditSongModal from "./EditSongModal";
import { useDispatch } from "react-redux";
import { deleteSong } from "../reduxStore/features/songSlice";

type SongsTableProps = {
  songs: SongDto[];
};
export default function SongsTable({ songs }: SongsTableProps) {
  const dispatch = useDispatch();
  const _deleteSong = (id: string) => {
    dispatch(deleteSong(id));
  };

  return (
    <TableContainer component={Paper}>
      <CreateSongModal />
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">No</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Artist</TableCell>
            <TableCell align="center">Album</TableCell>
            <TableCell align="center">Genre</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.artist}</TableCell>
              <TableCell align="center">{row.album}</TableCell>
              <TableCell align="center">{row.genre}</TableCell>
              <TableCell align="center">
                <EditSongModal song={row} key={index} />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => _deleteSong(row._id || "")}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
