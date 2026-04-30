import { Typography, IconButton, Box, Card } from "@mui/material";
import SectionLabel from "../helper/SectionLabel";
import type { comptype } from "../../helpers/typescript";
import { DETAILS } from "../../Typography";

function Contact({ primary, secondary, title }: comptype) {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 14 } }}>
      <Card
        sx={{
          p: { xs: 4, md: 8 },
          position: "relative",
          overflow: "hidden",
          borderColor: `${primary}30`,
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
            background: `radial-gradient(circle, ${primary}18, transparent 70%)`,
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
        <SectionLabel label={title} primary={primary} />
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
          {DETAILS.about.contact_title}
          <Box
            component="span"
            sx={{ color: primary, textShadow: `0 0 40px ${primary}55` }}
          >
            {DETAILS.about.contact_sub_title}
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
          {DETAILS.about.contact_desc}
        </Typography>

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
      </Card>
    </Box>
  );
}

export default Contact;
