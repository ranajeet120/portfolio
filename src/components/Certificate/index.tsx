import { Typography, Box, Card, CardContent, Badge } from "@mui/material";
import { DETAILS, type certificate_type } from "../../Typography";
import SectionLabel from "../helper/SectionLabel";
import SectionTitle from "../helper/SectionTitle";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import type { comptype } from "../../helpers/typescript";
import useInView from "../../helpers/useInView";

function Certificate({ primary, secondary, subTitle, title }: comptype) {
  return (
    <Box component="section" id="certificate" sx={{ py: { xs: 10, md: 14 } }}>
      <SectionLabel label={title} primary={primary} />
      <SectionTitle label={subTitle} />
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          gap: 2,
          px: 0.5,
          height: 260,
          alignItems: "center",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {DETAILS.certificate
          .sort((a, b) => Number(b.c_year) - Number(a.c_year))
          .map((c, i) => (
            <CertificateCard
              key={i}
              certificate={c}
              primary={primary}
              index={i}
              secondary={secondary}
            />
          ))}
      </Box>
    </Box>
  );
}

export default Certificate;

function CertificateCard({
  certificate,
  primary,
  index,
}: {
  certificate: certificate_type;
  primary: string;
  index: number;
  secondary: string;
}) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <Card
      ref={ref}
      sx={{
        width: 400,
        height: 250,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `all .6s ease ${index * 90}ms`,
        "&:hover": {
          borderColor: `${primary}55`,
          boxShadow: `0 0 32px ${primary}1A`,
          transform: "scale(101%)",
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Badge
              color="primary"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <WorkspacePremiumIcon
                sx={{
                  fontSize: 20,
                  color: primary,
                }}
              />
            </Badge>
            <Typography
              variant="caption"
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
              {certificate.c_id}
            </Typography>
          </Box>
          <Typography
            variant="caption"
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
            {certificate.c_year}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.3rem",
            letterSpacing: "0.04em",
            lineHeight: 1.2,
            color: primary,
          }}
        >
          {certificate.c_name}
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
            {certificate.c_organization}
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
          {certificate.c_topic}
        </Typography>
      </CardContent>
    </Card>
  );
}
