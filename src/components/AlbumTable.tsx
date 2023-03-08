import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AlbumSongCountDto } from "../types/songTypes";

type AlbumsTableProp = {
  albumStat: AlbumSongCountDto[];
};
export default function AlbumsTable({ albumStat }: AlbumsTableProp) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Album</TableCell>
            <TableCell align="right">TotalSongs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albumStat &&
            albumStat.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.album}
                </TableCell>
                <TableCell align="right">{row.totalSongs}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
