import {
  Typography,
  Divider,
  Box,
  type Theme,
  type SxProps,
} from "@mui/material";

function SectionLabel({
  label,
  primary,
  style,
  enableTab,
}: {
  label: string;
  primary: string;
  style?: SxProps<Theme> | undefined;
  enableTab?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 5,
        ...style,
      }}
    >
      {enableTab ? (
        <Divider
          sx={{
            width: 50,
            borderColor: `${primary}28`,
          }}
        />
      ) : null}
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
