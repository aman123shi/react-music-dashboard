import React, { useEffect } from "react";
import SongsTable from "../../components/SongsTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxStore/index";
import { getSongs } from "../../reduxStore/features/songSlice";
import CircularProgress from "@mui/material/CircularProgress";

export function Songs() {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.song.songs);
  const loading = useSelector((state: RootState) => state.song.loading);
  useEffect(() => {
    dispatch(getSongs());
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : null}
      <SongsTable songs={songs} />
    </div>
  );
}
