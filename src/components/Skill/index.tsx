import useInView from "../../helpers/useInView";
import { Typography, Box, Grid, LinearProgress } from "@mui/material";
import { DETAILS } from "../../Typography";
import SectionLabel from "../helper/SectionLabel";
import SectionTitle from "../helper/SectionTitle";
import type { comptype } from "../../helpers/typescript";

function Skill({ primary, title, subTitle }: comptype) {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 10, md: 14 } }}>
      <SectionLabel label={title} primary={primary} />
      <SectionTitle label={subTitle} />
      <Grid container spacing={3.5}>
        {DETAILS.skills.map((s, i) => (
          <SkillCard skill={s} key={i} index={i} />
        ))}
      </Grid>
    </Box>
  );
}

export default Skill;

function SkillCard({
  skill,
  index,
}: {
  skill: { name: string; level: number; cat: string };
  index: number;
}) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
      <Box
        ref={ref}
        sx={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(14px)",
          transition: `all .5s ease ${index * 55}ms`,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.8,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {skill.name}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
            }}
          >
            {skill.cat}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={visible ? skill.level : 0}
          sx={{
            "& .MuiLinearProgress-bar": {
              transition: `width 1s ease ${index * 55 + 200}ms`,
            },
          }}
        />
      </Box>
    </Grid>
  );
}
