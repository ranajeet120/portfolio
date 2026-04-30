// import Header from "./component/Header";
// import "./App.css";
// import { useState } from "react";
// import useStyles from "./styles";
// import useResponsive from "./hooks/useResponsive";
// import back_dark from "./assets/back_dark.png";
// import back_light from "./assets/back_light.png";
// import MenuModal from "./component/MenuModal";
// import MainComponent from "./component/MainComponent";
// import typography_list from "./typography";
import Test from "./Test";

// export default function App() {
//   const [isDarkMode, setIsDarkMode] = useState<"light" | "dark">("dark");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isSmallScreen = useResponsive();
//   const classes = useStyles({
//     themeName: isDarkMode,
//     isSmallScreen: isSmallScreen,
//   });

//   return (
//     <div key={isDarkMode} style={classes.mainContainer}>
//       <img
//         src={isDarkMode === "dark" ? back_dark : back_light}
//         style={classes.backgroundImg}
//       />
//       <div style={classes.mainInnerContainer}>
//         <Header
//           setIsDarkMode={() =>
//             setIsDarkMode(isDarkMode === "light" ? "dark" : "light")
//           }
//           isDarkMode={isDarkMode}
//           setIsMenuOpen={setIsMenuOpen}
//           classes={classes}
//         />
//         <div style={classes.mainInnerBodyContainer}>
//           {typography_list?.profileInfo?.map((value, index) => {
//             return (
//               <div
//                 key={index}
//                 style={
//                   index % 2 === 0
//                     ? classes.sectionContainerTransparent
//                     : classes.sectionContainerSolid
//                 }
//               >
//                 {index === 0 ? null : (
//                   <div
//                     style={
//                       index % 2 === 0
//                         ? classes.sectionTitleTransparent
//                         : classes.sectionTitleSolid
//                     }
//                   >
//                     {value.type}
//                   </div>
//                 )}
//                 <MainComponent
//                   classes={classes}
//                   isSmallScreen={isSmallScreen}
//                   type={value.type}
//                   data={value.data}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <MenuModal
//           isOpen={isMenuOpen}
//           onClose={() => setIsMenuOpen(false)}
//           classes={classes}
//           onAction={() => {}}
//         />
//       </div>
//     </div>
//   );
// }

export default function App() {
  return <Test />;
}
