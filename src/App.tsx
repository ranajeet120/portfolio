import { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { THEMES, type ThemeNameType } from "./Theme";
import Certificate from "./components/Certificate";
import Qualification from "./components/Qualification";

export default function App() {
  const getInitialTheme = (): ThemeNameType => {
    const saved = localStorage.getItem("roni_portfolio_theme");
    return saved === "orange" ? "orange" : "cyan";
  };

  const [themeName, setTheme] = useState<ThemeNameType>(getInitialTheme);
  const theme = THEMES[themeName];
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  useEffect(() => {
    localStorage.setItem("roni_portfolio_theme", themeName);
  }, [themeName]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <Navbar
        themeName={themeName}
        setTheme={setTheme}
        scrollTo={(id: string) =>
          document
            .getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <About primary={primary} secondary={secondary} />
        <Skill
          primary={primary}
          secondary={secondary}
          title="02 — Skills"
          subTitle="My Toolkit"
        />
        <Projects
          primary={primary}
          secondary={secondary}
          title={"03 — Projects"}
          subTitle="Selected Work"
        />
        <Experience
          primary={primary}
          secondary={secondary}
          title={"04 — Experience"}
          subTitle={"Career Path"}
        />
        <Certificate
          primary={primary}
          secondary={secondary}
          title={"05 — Certificate"}
          subTitle={"Licence & Certificate"}
        />
        <Qualification
          primary={primary}
          secondary={secondary}
          title={"06 — Qualification"}
          subTitle={"Academic Background"}
        />
        <Contact
          primary={primary}
          secondary={secondary}
          title={"07 - Contact"}
          subTitle={""}
        />
      </Container>
    </ThemeProvider>
  );
}
