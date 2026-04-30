import { IconButton } from "@mui/material";
import type useStyles from "../../styles";
import type { IntroductionType } from "../../typography";

type IntroductionComponentType = {
  isSmallScreen: boolean;
  data: IntroductionType;
  classes: ReturnType<typeof useStyles>;
};

const Introduction = ({
  classes,
  isSmallScreen,
  data,
}: IntroductionComponentType) => {
  return (
    <div
      style={{
        ...classes.introMainContainer,
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      <div
        style={{
          ...classes.introLeftContainer,
          width: isSmallScreen ? "100%" : "50%",
        }}
      >
        <div style={classes.introImgOverlay} />
        <img src={data?.image} style={classes.introImg} />
      </div>
      <div
        style={{
          ...classes.introRightContainer,
          width: isSmallScreen ? "100%" : "50%",
          paddingLeft: isSmallScreen ? 0 : "5%",
          marginTop: isSmallScreen ? 20 : 0,
        }}
      >
        <div style={classes.introSubtitle}>{data?.firstLine || ""}</div>
        <div style={classes.introTitle}>{data?.secondLine || ""}</div>
        <div style={classes.introDesc}>{data?.thirdLine || ""}</div>
        <div style={classes.introActionContainer}>
          {data?.actionButton?.map((item, idx) => {
            const Icon = item.icon;
            return (
              <IconButton
                key={idx}
                onClick={item?.onClick}
                style={classes.introActionButton}
              >
                <Icon style={classes.introActionIcon} />
              </IconButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
