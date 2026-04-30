import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Tooltip,
} from "@mui/material";

import { THEMES, THEME_META, type ThemeNameType } from "../../Theme";
import { NAV } from "../../Typography";

/** Props */
type NavbarProps = {
  themeName: ThemeNameType;
  setTheme: (theme: ThemeNameType) => void;
  scrollTo: (section: string) => void;
};

function Navbar({ themeName, setTheme, scrollTo }: NavbarProps) {
  const [open, setOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  const accent = THEMES[themeName].palette.primary.main;
  const meta = THEME_META[themeName];

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
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

            <Toggle meta={meta} setTheme={setTheme} accent={accent} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Toggle meta={meta} setTheme={setTheme} accent={accent} />

            <IconButton
              size="small"
              onClick={() => setOpen(true)}
              sx={{ color: accent }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
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
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ width: 220, bgcolor: "background.default", pt: 5, px: 2 }}
      >
        <List>
          {NAV.map((n) => (
            <ListItem key={n} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollTo(n);
                  setOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  "&:hover": { color: accent },
                }}
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

type ToggleProps = {
  accent: string;
  meta: (typeof THEME_META)[ThemeNameType];
  setTheme: (theme: ThemeNameType) => void;
};

const Toggle = ({ accent, meta, setTheme }: ToggleProps) => (
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
        "&:hover": {
          borderColor: accent,
          background: `${accent}1A`,
        },
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

export default Navbar;
