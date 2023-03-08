export const homeStyles = {
  boxContainer: {
    display: { xs: "flex", md: "grid" },
    gridTemplateColumns: "repeat(4,1fr)",
    gridAutoRows: "minmax(100px, auto)",
    gap: 3,
    textAlign: "center",
    flexDirection: "column",
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  chartContainer: {
    display: { xs: "flex", md: "grid" },
    gridTemplateColumns: "repeat(2,1fr)",
    gridAutoRows: "minmax(100px, auto)",
    gap: 3,
    textAlign: "center",
    flexDirection: "column",
    marginTop: "10",
  },
  albumTableContainer: {
    display: { xs: "flex", md: "grid" },
    gridTemplateColumns: "repeat(6,1fr)",
    gridAutoRows: "minmax(100px, auto)",
    gap: 3,
    textAlign: "center",
    flexDirection: "column",
  },
};
