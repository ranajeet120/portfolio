import { Typography, Divider, Box } from "@mui/material";

function SectionLabel({ label, primary }: { label: string; primary: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 5,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: primary,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          fontSize: "0.72rem",
        }}
      >
        {label}
      </Typography>

      <Divider
        sx={{
          flex: 1,
          borderColor: `${primary}28`,
        }}
      />
    </Box>
  );
}

export default SectionLabel;
