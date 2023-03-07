import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { SongDto } from "../types/songTypes";
import { useDispatch } from "react-redux";
import { addNewSong } from "../reduxStore/features/songSlice";
import { style } from "./createSongModal.styles";

export default function CreateSongModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [song, setSong] = useState<SongDto>({
    album: "",
    artist: "",
    genre: "",
    title: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (prop: string) => (e: any) => {
    setSong({ ...song, [prop]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addNewSong(song));
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New Song
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6"> Add New Song</Typography>
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Title"
                variant="outlined"
                required
                onChange={handleChange("title")}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Artist"
                variant="outlined"
                required
                onChange={handleChange("artist")}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Album"
                variant="outlined"
                required
                onChange={handleChange("album")}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Genre"
                variant="outlined"
                required
                onChange={handleChange("genre")}
              />
            </div>
            <div
              style={{
                marginBottom: "2rem",
                marginTop: "1rem",
                alignItems: "center",
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
