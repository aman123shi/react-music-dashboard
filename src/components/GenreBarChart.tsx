import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GenreSongCountDto } from "../types/songTypes";
type GenreBarChartProps = {
  data: GenreSongCountDto[];
};
export function GenreBarChart({ data }: GenreBarChartProps) {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart data={data} margin={{ right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="genre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"genre"} fill="#8884d8" />
          <Bar dataKey={"totalSongs"} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
