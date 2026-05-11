import { Typography, Box, IconButton } from "@mui/material";
import { DETAILS } from "../../Typography";

function About({ primary }: { primary: string; secondary: string }) {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" }, // 🔥 responsive
        gap: { xs: 6, md: 10 },
        pt: 10,
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        sx={{
          maxWidth: 740,
          width: { xs: "100%", sm: "100", md: "100%", lg: "50%" },
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
          Available for new projects
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3.6rem", sm: "5.5rem", md: "7.5rem" },
            lineHeight: 0.92,
            mb: 2.5,
          }}
        >
          {DETAILS.about.name}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: 520,
          }}
        >
          {DETAILS.about.desc}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5, // replaces spacing={5}
            mt: 3,
          }}
        >
          {DETAILS.about.highlight.map((info, idx) => (
            <Box key={idx}>
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.4rem",
                  color: primary,
                  lineHeight: 1,
                  letterSpacing: "0.05em",
                }}
              >
                {info.value}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {info.label}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 3,
          }}
        >
          {DETAILS.about.contacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <IconButton
                key={i}
                onClick={() => item.onClick()}
                size={"large"}
                sx={{
                  color: "text.secondary",
                  p: 1.2,
                  border: "1px solid",
                  borderColor: "text.secondary",
                  "&:hover": {
                    color: primary,
                    borderColor: primary,
                    bgcolor: `${primary}12`,
                  },
                }}
              >
                <Icon />
              </IconButton>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100", md: "100%", lg: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={DETAILS.about.image}
          alt="Roni Biswas Image"
          sx={{
            width: { xs: "80%", sm: "80%", md: "100%" },
            maxWidth: 420,
            borderRadius: 3,
            objectFit: "cover",
            boxShadow: `0 20px 60px ${primary}33`,
          }}
        />
      </Box>
    </Box>
  );
}

export default About;
