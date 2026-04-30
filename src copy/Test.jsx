import { useState, useEffect, useRef } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Divider,
  Stack,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Tooltip,
} from "@mui/material";

/* ── Google Fonts ────────────────────────────────────────────── */
const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

/* ── Theme Definitions ───────────────────────────────────────── */
const makeTheme = (
  mode,
  primary,
  secondary,
  bgDefault,
  bgPaper,
  textPrimary,
  textSecondary,
  gridColor,
) =>
  createTheme({
    palette: {
      mode,
      primary: { main: primary },
      secondary: { main: secondary },
      background: { default: bgDefault, paper: bgPaper },
      text: { primary: textPrimary, secondary: textSecondary },
    },
    typography: {
      fontFamily: "'Outfit', sans-serif",
      h1: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" },
      h2: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" },
      h3: { fontFamily: "'Outfit', sans-serif" },
    },
    shape: { borderRadius: 14 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: `radial-gradient(ellipse 80% 60% at 50% -10%, ${primary}20, transparent), linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
            backgroundSize: "100%, 64px 64px, 64px 64px",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background:
              mode === "dark" ? "rgba(4,6,12,0.75)" : "rgba(255,253,250,0.82)",
            backdropFilter: "blur(18px)",
            borderBottom: `1px solid ${primary}22`,
            boxShadow: "none",
            color: textPrimary,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { border: `1px solid ${primary}20`, boxShadow: "none" },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none", fontWeight: 600, borderRadius: 10 },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: { height: 5, borderRadius: 5, background: `${primary}18` },
          bar: {
            background: `linear-gradient(90deg, ${primary}, ${secondary})`,
            boxShadow: `0 0 10px ${primary}70`,
          },
        },
      },
    },
  });

const THEMES = {
  cyan: makeTheme(
    "dark",
    "#00E5FF",
    "#FF00E5",
    "#04060C",
    "#080F18",
    "#E8FEFF",
    "#6BBFCC",
    "#00E5FF08",
  ),
  orange: makeTheme(
    "light",
    "#FF4500",
    "#7C00FF",
    "#FFFAF7",
    "#FFFFFF",
    "#180800",
    "#7A3520",
    "#FF450007",
  ),
};

const THEME_META = {
  cyan: {
    label: "Dark",
    emoji: "🔵",
    next: "orange",
    nextLabel: "Switch to Orange Flame",
  },
  orange: {
    label: "Light",
    emoji: "🟠",
    next: "cyan",
    nextLabel: "Switch to Electric Cyan",
  },
};

/* ── Data ────────────────────────────────────────────────────── */
const SKILLS = [
  { name: "React / Next.js", level: 93, cat: "Framework" },
  { name: "TypeScript", level: 88, cat: "Language" },
  { name: "Tailwind / MUI", level: 91, cat: "Styling" },
  { name: "JavaScript ES2024", level: 95, cat: "Language" },
  { name: "Node.js / Express", level: 74, cat: "Backend" },
  { name: "GraphQL", level: 72, cat: "API" },
  { name: "Figma / Design", level: 80, cat: "Design" },
  { name: "Git / CI-CD", level: 89, cat: "Tooling" },
];

const PROJECTS = [
  {
    title: "Luminary UI",
    desc: "Headless React component library — 40+ accessible components, dark mode, 98 Lighthouse.",
    tags: ["React", "TypeScript", "Storybook"],
    year: "2024",
  },
  {
    title: "PixelFlow",
    desc: "Real-time collaborative whiteboard with WebSocket sync and AI-powered shape recognition.",
    tags: ["Next.js", "WebSockets", "Canvas API"],
    year: "2024",
  },
  {
    title: "Chrono Dash",
    desc: "Analytics SaaS with 20+ chart types, drag-and-drop widgets, and CSV/PDF export.",
    tags: ["React", "D3.js", "Recharts"],
    year: "2023",
  },
  {
    title: "VoiceCart",
    desc: "Voice-controlled PWA — offline support, speech-to-text search, sub-1 s load time.",
    tags: ["Next.js", "PWA", "Web Speech API"],
    year: "2023",
  },
];

const EXPERIENCE = [
  {
    role: "Senior Frontend Developer",
    company: "Nebula Systems",
    period: "2023 — Present",
    desc: "Led a team of 5 building a design system used across 12 product lines. Cut bundle size by 40% and boosted Core Web Vitals to top-10%.",
  },
  {
    role: "Frontend Developer",
    company: "Apexis Labs",
    period: "2021 — 2023",
    desc: "Built the flagship SaaS dashboard from scratch, shipped 6 major releases, and mentored 3 junior developers.",
  },
  {
    role: "Junior Web Developer",
    company: "Craftworks",
    period: "2019 — 2021",
    desc: "Delivered 30+ client sites, lifting average Lighthouse score from 62 to 91.",
  },
];

const NAV = ["About", "Skills", "Projects", "Experience", "Contact"];

/* ── Helpers ─────────────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const scrollTo = (id) =>
  document
    .getElementById(id.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth" });

/* ── Navbar ──────────────────────────────────────────────────── */
function Navbar({ themeName, setTheme }) {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const accent = THEMES[themeName].palette.primary.main;
  const meta = THEME_META[themeName];

  const Toggle = () => (
    <Tooltip title={meta.nextLabel}>
      <Button
        onClick={() => setTheme(meta.next)}
        size="small"
        variant="outlined"
        sx={{
          borderRadius: "999px",
          px: 2,
          py: 0.5,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          borderColor: `${accent}50`,
          color: accent,
          background: `${accent}0D`,
          gap: 0.8,
          "&:hover": { borderColor: accent, background: `${accent}1A` },
          transition: "all .3s",
        }}
      >
        <Box component="span" sx={{ fontSize: "0.85rem" }}>
          {meta.emoji}
        </Box>
        {meta.label}
      </Button>
    </Tooltip>
  );

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar
        sx={{
          maxWidth: 1200,
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 4 },
          justifyContent: "space-between",
          minHeight: { xs: 60, md: 68 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.45rem",
            letterSpacing: "0.1em",
            color: accent,
            lineHeight: 1,
          }}
        >
          Roni Biswas
        </Typography>

        {!isMobile ? (
          <Stack direction="row" spacing={0.5} alignItems="center">
            {NAV.map((n) => (
              <Button
                key={n}
                onClick={() => scrollTo(n)}
                size="small"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.82rem",
                  px: 1.5,
                  "&:hover": { color: accent, bgcolor: `${accent}12` },
                }}
              >
                {n}
              </Button>
            ))}
            <Box
              sx={{ width: "1px", height: 22, bgcolor: `${accent}30`, mx: 1 }}
            />
            <Toggle />
          </Stack>
        ) : (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Toggle />
            <IconButton
              size="small"
              onClick={() => setOpen(true)}
              sx={{ color: accent }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                {[0, 1, 2].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 20,
                      height: 2,
                      bgcolor: "currentColor",
                      borderRadius: 1,
                    }}
                  />
                ))}
              </Box>
            </IconButton>
          </Stack>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 220, bgcolor: "background.default", pt: 5, px: 2 },
        }}
      >
        <List>
          {NAV.map((n) => (
            <ListItem key={n} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollTo(n);
                  setOpen(false);
                }}
                sx={{ borderRadius: 2, mb: 0.5, "&:hover": { color: accent } }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    letterSpacing: "0.05em",
                    color: "inherit",
                  }}
                >
                  {n}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

/* ── SectionLabel ────────────────────────────────────────────── */
function SLabel({ text, accent }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2} mb={5}>
      <Typography
        variant="caption"
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          color: accent,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          fontSize: "0.72rem",
        }}
      >
        {text}
      </Typography>
      <Divider sx={{ flex: 1, borderColor: `${accent}28` }} />
    </Stack>
  );
}

/* ── Hero ────────────────────────────────────────────────────── */
function Hero({ accent, secondary }) {
  const [typed, setTyped] = useState("");
  const full = "Frontend Developer.";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, ++i));
      if (i >= full.length) clearInterval(t);
    }, 75);
    return () => clearInterval(t);
  }, []);

  return (
    <Box
      component="section"
      id="about"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", pt: 10 }}
    >
      <Box sx={{ maxWidth: 740 }}>
        <Typography
          variant="caption"
          component="p"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            fontFamily: "'JetBrains Mono', monospace",
            color: accent,
            fontSize: "0.78rem",
          }}
        >
          <Box
            component="span"
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: accent,
              display: "inline-block",
              boxShadow: `0 0 8px ${accent}`,
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
          Hi, I'm
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3.6rem", sm: "5.5rem", md: "7.5rem" },
            lineHeight: 0.92,
            mb: 2.5,
          }}
        >
          <Box
            component="span"
            sx={{ color: accent, textShadow: `0 0 50px ${accent}55` }}
          >
            Roni Biswas
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1.3rem", md: "1.9rem" },
            color: "text.secondary",
            fontWeight: 300,
            mb: 3,
            minHeight: 40,
          }}
        >
          {typed}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: 2,
              height: "0.9em",
              bgcolor: accent,
              ml: 0.5,
              verticalAlign: "middle",
              animation: "blnk 1s step-end infinite",
            }}
          />
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: 520,
            mb: 5.5,
          }}
        >
          Crafting performant, pixel-perfect web interfaces with obsessive
          attention to developer experience and user delight — 5+ years turning
          complexity into elegance.
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollTo("Projects")}
            sx={{
              bgcolor: accent,
              color: "#000",
              fontWeight: 700,
              px: 3.5,
              fontSize: "0.9rem",
              boxShadow: `0 0 28px ${accent}44`,
              "&:hover": {
                bgcolor: accent,
                boxShadow: `0 0 40px ${accent}70`,
                transform: "translateY(-1px)",
              },
              transition: "all .2s",
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => scrollTo("Contact")}
            sx={{
              borderColor: `${accent}40`,
              color: accent,
              px: 3.5,
              fontSize: "0.9rem",
              "&:hover": { borderColor: accent, bgcolor: `${accent}10` },
              transition: "all .2s",
            }}
          >
            Get in touch →
          </Button>
        </Stack>

        <Stack direction="row" spacing={5} mt={7} flexWrap="wrap" useFlexGap>
          {[
            ["5+", "Years exp."],
            ["30+", "Projects"],
            ["12", "OSS repos"],
          ].map(([n, l]) => (
            <Box key={l}>
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.4rem",
                  color: accent,
                  lineHeight: 1,
                  letterSpacing: "0.05em",
                }}
              >
                {n}
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
                {l}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <style>{`
        @keyframes pls { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
        @keyframes blnk { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </Box>
  );
}

/* ── Skills ──────────────────────────────────────────────────── */
function Skills({ accent }) {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 10, md: 14 } }}>
      <SLabel text="02 — Skills" accent={accent} />
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2.8rem", md: "4.2rem" }, mb: 7 }}
      >
        My Toolkit
      </Typography>
      <Grid container spacing={3.5}>
        {SKILLS.map((s, i) => {
          const [ref, visible] = useInView();
          return (
            <Grid item xs={12} sm={6} key={s.name}>
              <Box
                ref={ref}
                sx={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(14px)",
                  transition: `all .5s ease ${i * 55}ms`,
                }}
              >
                <Stack direction="row" justifyContent="space-between" mb={0.8}>
                  <Typography variant="body2" fontWeight={500}>
                    {s.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: accent,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.68rem",
                    }}
                  >
                    {s.cat}
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={visible ? s.level : 0}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      transition: `width 1s ease ${i * 55 + 200}ms`,
                    },
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

/* ── Projects ────────────────────────────────────────────────── */
function Projects({ accent, secondary }) {
  const colors = [accent, secondary, accent, secondary];
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 10, md: 14 } }}>
      <SLabel text="03 — Projects" accent={accent} />
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2.8rem", md: "4.2rem" }, mb: 7 }}
      >
        Selected Work
      </Typography>
      <Grid container spacing={2.5}>
        {PROJECTS.map((p, i) => {
          const [ref, visible] = useInView();
          const c = colors[i];
          return (
            <Grid item xs={12} sm={6} key={p.title}>
              <Card
                ref={ref}
                sx={{
                  height: "100%",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(24px)",
                  transition: `all .6s ease ${i * 90}ms`,
                  "&:hover": {
                    borderColor: `${c}55`,
                    boxShadow: `0 0 32px ${c}1A`,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2.5}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "text.secondary",
                        fontSize: "0.7rem",
                      }}
                    >
                      {p.year}
                    </Typography>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: c,
                        boxShadow: `0 0 12px ${c}`,
                      }}
                    />
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.6rem",
                      letterSpacing: "0.04em",
                      color: c,
                      mb: 1.5,
                      lineHeight: 1,
                    }}
                  >
                    {p.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.75,
                      mb: 3,
                      fontSize: "0.875rem",
                    }}
                  >
                    {p.desc}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {p.tags.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          bgcolor: `${c}14`,
                          color: c,
                          border: `1px solid ${c}30`,
                          height: 24,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

/* ── Experience ──────────────────────────────────────────────── */
function Experience({ accent }) {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 10, md: 14 } }}>
      <SLabel text="04 — Experience" accent={accent} />
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2.8rem", md: "4.2rem" }, mb: 7 }}
      >
        Career Path
      </Typography>
      <Box sx={{ position: "relative", pl: 4 }}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: `linear-gradient(to bottom, ${accent}, transparent)`,
            borderRadius: 1,
          }}
        />
        <Stack spacing={5.5}>
          {EXPERIENCE.map((e, i) => {
            const [ref, visible] = useInView();
            return (
              <Box
                key={i}
                ref={ref}
                sx={{
                  position: "relative",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateX(-18px)",
                  transition: `all .6s ease ${i * 140}ms`,
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
                    border: `2.5px solid ${accent}`,
                    boxShadow: `0 0 10px ${accent}60`,
                  }}
                />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  alignItems={{ sm: "center" }}
                  mb={0.5}
                  flexWrap="wrap"
                  useFlexGap
                >
                  <Typography
                    sx={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.3rem",
                      letterSpacing: "0.04em",
                      lineHeight: 1.2,
                    }}
                  >
                    {e.role}
                  </Typography>
                  <Chip
                    label={e.company}
                    size="small"
                    sx={{
                      bgcolor: `${accent}15`,
                      color: accent,
                      border: `1px solid ${accent}30`,
                      height: 22,
                      width: "fit-content",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.68rem",
                    }}
                  />
                </Stack>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "text.secondary",
                    display: "block",
                    mb: 1.2,
                  }}
                >
                  {e.period}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  {e.desc}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

/* ── Contact ─────────────────────────────────────────────────── */
function Contact({ accent, secondary }) {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 14 } }}>
      <Card
        sx={{
          p: { xs: 4, md: 8 },
          position: "relative",
          overflow: "hidden",
          borderColor: `${accent}30`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}18, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${secondary}14, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <SLabel text="05 — Contact" accent={accent} />
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.4rem", md: "4.5rem" },
            mb: 2.5,
            lineHeight: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          Let's build something{" "}
          <Box
            component="span"
            sx={{ color: accent, textShadow: `0 0 40px ${accent}55` }}
          >
            remarkable.
          </Box>
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            mb: 5.5,
            maxWidth: 440,
            position: "relative",
            zIndex: 1,
          }}
        >
          Open to freelance projects, full-time roles, and interesting
          collaborations. Let's connect.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          flexWrap="wrap"
          useFlexGap
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Button
            variant="contained"
            href="mailto:alex@example.com"
            size="large"
            sx={{
              bgcolor: accent,
              color: "#000",
              fontWeight: 700,
              px: 3.5,
              boxShadow: `0 0 24px ${accent}44`,
              "&:hover": { bgcolor: accent, boxShadow: `0 0 36px ${accent}70` },
            }}
          >
            alex@example.com ↗
          </Button>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {["GitHub", "LinkedIn", "Twitter"].map((s) => (
              <Button
                key={s}
                variant="outlined"
                size="large"
                sx={{
                  borderColor: `${accent}35`,
                  color: "text.secondary",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.73rem",
                  "&:hover": { borderColor: accent, color: accent },
                }}
              >
                {s}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

/* ── App ─────────────────────────────────────────────────────── */
export default function Test() {
  const [themeName, setTheme] = useState("cyan");
  const theme = THEMES[themeName];
  const accent = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FontLink />
      <Navbar themeName={themeName} setTheme={setTheme} />
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Hero accent={accent} secondary={secondary} />
        <Skills accent={accent} />
        <Projects accent={accent} secondary={secondary} />
        <Experience accent={accent} />
        <Contact accent={accent} secondary={secondary} />
        <Box
          component="footer"
          sx={{
            py: 4,
            borderTop: `1px solid ${accent}18`,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontFamily: "'JetBrains Mono', monospace", color: accent }}
          >
            &lt;Alex.dev /&gt;
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Built with React + MUI
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
