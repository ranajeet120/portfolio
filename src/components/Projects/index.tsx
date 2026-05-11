import useInView from "../../helpers/useInView";
import { Typography, Box, Card, CardContent, Chip, Grid } from "@mui/material";
import { DETAILS, type projects_type } from "../../Typography";
import SectionLabel from "../helper/SectionLabel";
import SectionTitle from "../helper/SectionTitle";
import type { comptype } from "../../helpers/typescript";

function Projects({ primary, secondary, subTitle, title }: comptype) {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 10, md: 14 } }}>
      <SectionLabel label={title} primary={primary} />
      <SectionTitle label={subTitle} />
      <Grid container spacing={2.5}>
        {DETAILS.projects
          .sort((a, b) => Number(b.p_year.start) - Number(a.p_year.start))
          .map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              primary={primary}
              index={i}
              secondary={secondary}
            />
          ))}
      </Grid>
    </Box>
  );
}

export default Projects;

function ProjectCard({
  project,
  primary,
  index,
}: {
  project: projects_type;
  primary: string;
  index: number;
  secondary: string;
}) {
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
      <Card
        ref={ref}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: `all .6s ease ${index * 90}ms`,
          "&:hover": {
            borderColor: `${primary}55`,
            boxShadow: `0 0 32px ${primary}1A`,
            transform: "translateY(-3px)",
          },
        }}
      >
        <CardContent
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography
            variant="caption"
            component="p"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
              fontFamily: "'JetBrains Mono', monospace",
              color: primary,
              fontSize: "0.78rem",
            }}
          >
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: primary,
                display: "inline-block",
                boxShadow: `0 0 8px ${primary}`,
                animation: "pls 1.6s ease-in-out infinite",
              }}
            />
            {project.p_type_of_work}
          </Typography>

          <Typography sx={{ fontSize: "1.6rem", color: primary }}>
            {project.p_name}
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography
              sx={{
                color: primary,
                mb: 1.5,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
              }}
            >
              {project.p_client} ( {project.p_organization} )
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.75,
              mb: 3,
              fontSize: "0.875rem",
            }}
          >
            {project.p_description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {project.p_technologies.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  bgcolor: `${primary}14`,
                  color: primary,
                  border: `1px solid ${primary}30`,
                  height: 24,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
