import type useStyles from "../../styles";
import type { QualificationType } from "../../typography";

type QualificationComponentType = {
  classes: ReturnType<typeof useStyles>;
  data: QualificationType[];
};

export default function Qualification({
  classes,
  data,
}: QualificationComponentType) {
  return data.length > 0 ? (
    data.map((item, idx) => {
      return <div key={idx}>{item.q_degree}</div>;
    })
  ) : (
    <></>
  );
  // return (
  //   <>

  //     <div style={classes.sectionBodyTransparent}>
  //       <div style={classes.sectionPoppinsBoldTextTransparent}>
  //         Masters of Computer Application
  //       </div>
  //       <div style={classes.sectionPoppinsRegularTextTransparent}>
  //         From Bangalore University, 2019-21, with 7.29 CGPA
  //       </div>
  //       <div style={classes.sectionPoppinsBoldTextTransparent}>
  //         Bachelors of Computer Application
  //       </div>
  //       <div style={classes.sectionPoppinsRegularTextTransparent}>
  //         From West Bengal University of Technology, 2019-21, with 7.83 CGPA
  //       </div>
  //     </div>
  //     <div style={{ ...classes.sectionTitleTransparent, marginTop: "2.5%" }}>
  //       Certification
  //     </div>
  //     <div style={classes.sectionBodyTransparent}>
  //       <div style={classes.sectionPoppinsBoldTextTransparent}>
  //         Masters of Computer Application
  //       </div>
  //       <div style={classes.sectionPoppinsRegularTextTransparent}>
  //         From Bangalore University, 2019-21, with 7.29 CGPA
  //       </div>
  //       <div style={classes.sectionPoppinsBoldTextTransparent}>
  //         Bachelors of Computer Application
  //       </div>
  //       <div style={classes.sectionPoppinsRegularTextTransparent}>
  //         From West Bengal University of Technology, 2019-21, with 7.83 CGPA
  //       </div>
  //     </div>
  //   </>
  // );
}
