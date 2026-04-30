import useStyles from "../../styles";
import type { AboutType } from "../../typography";

type AboutComponentType = {
  data: AboutType;
  classes: ReturnType<typeof useStyles>;
};

export default function About({ classes, data }: AboutComponentType) {
  return (
    <div
      style={classes.sectionPoppinsRegularTextSolid}
      dangerouslySetInnerHTML={{ __html: data?.desc }}
    />
  );
}
