import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { SongDto } from "../types/songTypes";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxStore/index";
import { updateSong } from "../reduxStore/features/songSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
type EditSongProp = {
  song: SongDto;
};
export default function EditSongModal({ song }: EditSongProp) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [editableSong, setEditableSong] = useState<SongDto>(song);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (prop: string) => (e: any) => {
    setEditableSong({ ...editableSong, [prop]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(updateSong(editableSong));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6"> Edit Song</Typography>
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Title"
                variant="outlined"
                required
                value={editableSong.title}
                onChange={handleChange("title")}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Artist"
                variant="outlined"
                required
                value={editableSong.artist}
                onChange={handleChange("artist")}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Album"
                variant="outlined"
                required
                value={editableSong.album}
                onChange={handleChange("album")}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                label="Genre"
                variant="outlined"
                required
                value={editableSong.genre}
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
                Update
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
