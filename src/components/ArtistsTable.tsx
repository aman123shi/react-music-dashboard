import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ArtistStatDto } from "../types/songTypes";

type ArtistTableProp = {
  artistsStat: ArtistStatDto[];
};
export default function ArtistsTable({ artistsStat }: ArtistTableProp) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Artist</TableCell>
            <TableCell align="right">TotalSongs</TableCell>
            <TableCell align="right">TotalAlbums</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artistsStat.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.artist}
              </TableCell>
              <TableCell align="right">{row.totalSongs}</TableCell>
              <TableCell align="right">{row.totalAlbums}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
