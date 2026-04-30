import { Typography } from "@mui/material";

function SectionTitle({ label }) {
  return (
    <Typography
      variant="h2"
      sx={{ fontSize: { xs: "2.8rem", md: "4.2rem", marginBottom: "1.2rem" } }}
    >
      {label}
    </Typography>
  );
}

export default SectionTitle;
