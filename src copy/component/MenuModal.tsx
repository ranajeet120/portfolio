/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Close as CloseIcon, ArrowRight } from "@mui/icons-material";
import type useStyles from "../styles";

type MenuModalType = {
  isOpen: boolean;
  onClose: () => void;
  onAction: () => void;
  classes: ReturnType<typeof useStyles>;
};

function MenuModal({ isOpen, onClose, onAction, classes }: MenuModalType) {
  const [visible, setVisible] = useState(isOpen);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const menuItems = ["Menu", "Home", "About", "Profile", "Project", "Contact"];

  useEffect(() => {
    let t1, t2;

    if (isOpen) {
      setVisible(true);

      t1 = setTimeout(() => setShowOverlay(true), 50);
      t2 = setTimeout(() => setShowPanel(true), 300);
    } else {
      setShowPanel(false);

      t1 = setTimeout(() => setShowOverlay(false), 300);
      t2 = setTimeout(() => setVisible(false), 500);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      style={{
        ...classes.modalMainContainer,
        transform: showOverlay ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <div style={{ flex: 1 }} onClick={onClose} />
      <div
        style={{
          ...classes.menuContainer,
          transform: showPanel ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        {menuItems.map((item, idx) => {
          return (
            <div key={item} style={classes.menuElement}>
              <span>{item}</span>
              <IconButton
                sx={{
                  ...classes.headerMenuIconContainer,
                  alignSelf: "flex-end",
                }}
                onClick={() => {
                  if (idx !== 0) onAction();
                  onClose();
                }}
              >
                {idx === 0 ? (
                  <CloseIcon sx={classes.headerMenuIcon} />
                ) : (
                  <ArrowRight sx={classes.headerMenuIcon} />
                )}
              </IconButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuModal;
