import type useStyles from "../styles";
import type {
  AboutType,
  IntroductionType,
  MenuType,
  QualificationType,
} from "../typography";
import About from "./About";
import Introduction from "./Introduction";
import Qualification from "./Qualification";

type MainComponentType = {
  isSmallScreen: boolean;
  type: MenuType;
  data: unknown;
  classes: ReturnType<typeof useStyles>;
};

const MainComponent = ({
  classes,
  isSmallScreen,
  type,
  data,
}: MainComponentType) => {
  switch (type) {
    case "introduction":
      return (
        <Introduction
          classes={classes}
          isSmallScreen={isSmallScreen}
          data={data as IntroductionType}
        />
      );
    case "about": {
      return <About classes={classes} data={data as AboutType} />;
    }
    case "qualification": {
      return (
        <Qualification classes={classes} data={data as QualificationType[]} />
      );
    }

    default:
      break;
  }
};

export default MainComponent;
