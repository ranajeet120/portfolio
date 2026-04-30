import { IconButton } from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";

export default function Header({
  setIsDarkMode,
  isDarkMode,
  setIsMenuOpen,
  classes,
}) {
  return (
    <>
      <div style={classes.headerMainContainer}>
        <div style={classes.headerTitle}>Roni Biswas</div>

        <div style={classes.headerIconContainer}>
          <IconButton
            onClick={setIsDarkMode}
            style={classes.headerMenuIconContainer}
          >
            {isDarkMode === "dark" ? (
              <Brightness7 style={classes.headerMenuIcon} />
            ) : (
              <Brightness4 style={classes.headerMenuIcon} />
            )}
          </IconButton>

          <IconButton
            onClick={() => setIsMenuOpen(true)}
            style={classes.headerMenuIconContainer}
          >
            <MenuIcon style={classes.headerMenuIcon} />
          </IconButton>
        </div>
      </div>
    </>
  );
}
