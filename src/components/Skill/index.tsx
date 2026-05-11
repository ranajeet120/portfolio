import useInView from "../../helpers/useInView";
import { Typography, Box, Grid, LinearProgress } from "@mui/material";
import { DETAILS, type skills_list_type } from "../../Typography";
import SectionLabel from "../helper/SectionLabel";
import SectionTitle from "../helper/SectionTitle";
import type { comptype } from "../../helpers/typescript";
// import React from "react";

function Skill({ primary, title, subTitle }: comptype) {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 10, md: 14 } }}>
      <SectionLabel label={title} primary={primary} />
      <SectionTitle label={subTitle} />
      {/* {DETAILS.skills.map((skillDetails, i) => (
        <React.Fragment key={i}>
          <SectionLabel
            label={skillDetails.label}
            primary={primary}
            style={{ mt: 8,mb:2 }}
            enableTab
          />
          <Grid container spacing={3.5}>
            {skillDetails.list.map((skill, j) => {
              return <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}> <SkillCard skill={skill} key={j} index={j} /> </Grid>;
            })}
          </Grid>
        </React.Fragment>
      ))} */}
      <Grid container>
        {DETAILS.skills.map((skillDetails, i) => (
          <Grid size={12} sx={{ mt: 2, mb: 2 }}>
            <SkillCard skill={skillDetails} key={i} index={i} />
          </Grid>
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
  skill: skills_list_type;
  index: number;
}) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
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
  );
}
