import useInView from "../../helpers/useInView";
import { Typography, Box, Stack, Chip } from "@mui/material";
import { DETAILS, type experience_type } from "../../Typography";
import SectionLabel from "../helper/SectionLabel";
import SectionTitle from "../helper/SectionTitle";
import type { comptype } from "../../helpers/typescript";

function Experience({ primary, secondary, subTitle, title }: comptype) {
  return (
    <Box
      component="section"
      id="experience"
      sx={{ py: { xs: 10, md: 14 }, gap: 10 }}
    >
      <SectionLabel label={title} primary={primary} />
      <SectionTitle label={subTitle} />
      <Box sx={{ position: "relative", pl: 4 }}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: `linear-gradient(to bottom, ${primary}, transparent)`,
            borderRadius: 1,
          }}
        />
        <Stack spacing={5.5}>
          {DETAILS.experience.map((e, i) => (
            <ExperienceCard
              primary={primary}
              info={e}
              index={i}
              key={i}
              secondary={secondary}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Experience;

function ExperienceCard({
  info,
  index,
  primary,
  secondary,
}: {
  info: experience_type;
  index: number;
  secondary: string;
  primary: string;
}) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-18px)",
        transition: `all .6s ease ${index * 140}ms`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: -20,
          top: 7,
          width: 10,
          height: 10,
          borderRadius: "50%",
          bgcolor: "background.default",
          border: `2.5px solid ${primary}`,
          boxShadow: `0 0 10px ${primary}60`,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { sm: "center" },
          flexWrap: "wrap",
          gap: 1, // replaces spacing + useFlexGap
          mb: 0.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.3rem",
            letterSpacing: "0.04em",
            lineHeight: 1.2,
            color: secondary,
          }}
        >
          {info.role}
        </Typography>

        <Chip
          label={info.company}
          size="small"
          sx={{
            bgcolor: `${primary}15`,
            color: primary,
            border: `1px solid ${primary}30`,
            height: 22,
            width: "fit-content",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.68rem",
          }}
        />
      </Box>
      <Typography
        variant="caption"
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "text.secondary",
          display: "block",
          mb: 1.2,
        }}
      >
        {info.period}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", lineHeight: 1.8 }}
      >
        {info.desc}
      </Typography>
    </Box>
  );
}
