const color_palette = {
  purple: "#5B21B6",
  purple_light: "#aa82e8",
  green: "#047857",
  green_light: "#44f9c5",
  white: "#ffffff",
  black: "#000000",
  lightPurple: "#aa82e8",
  lightGreen: "#44f9c5",
  darkGray: "#212121",
  lightGray: "#d0d0d0",
  transparent: "transparent",
};

type themeType = {
  background: string;
  //------------------------------------------------ Fonts
  font_poppins: string;
  font_roboto: string;
  font_saira: string;

  //------------------------------------------------ Header & Menu
  headerText: string;
  headerBack: string;
  headerIconSize: number;
  headerIcon: string;
  headerShadow: string;
  menuBorder: string;
  menuModalBack: string;
  //------------------------------------------------ Section Solid
  sectionHeaderSolid: string;
  sectionHeaderBorderSolid: string;
  sectionBackgroundSolid: string;
  sectionBorderSolid: string;
  sectionPoppinsBoldTextSolid: string;
  sectionPoppinsRegularTextSolid: string;
  ///------------------------------------------------ Section Transparent
  sectionHeaderTransparent: string;
  sectionHeaderBorderTransparent: string;
  sectionBackgroundTransparent: string;
  sectionBorderTransparent: string;
  sectionPoppinsBoldTextTransparent: string;
  sectionPoppinsRegularTextTransparent: string;
  //------------------------------------------------ Intro
  introImgOverlay: string;
  introTitle: string;
  introSubtitle: string;
  introDesc: string;
  introButtonSize: number;
  introButton: string;
  //------------------------------------------------ About
  aboutText: string;
  //------------------------------------------------ Services
  serviceCard: string;
  serviceCardText: string;
  //------------------------------------------------ Projects
  projectCard: string;
  projectCardImageContainer: string;
};

const theme: { dark: themeType; light: themeType } = {
  dark: {
    background: color_palette.darkGray,
    //------------------------------------------------ Fonts
    font_poppins: "'Poppins', sans-serif",
    font_roboto: "'Roboto', sans-serif",
    font_saira: "'Saira Stencil', sans-serif",

    //------------------------------------------------ Section Solid
    sectionHeaderSolid: color_palette.purple,
    sectionHeaderBorderSolid: color_palette.purple,
    sectionBackgroundSolid: color_palette.lightGray,
    sectionBorderSolid: `2px solid ${color_palette.white}`,
    sectionPoppinsBoldTextSolid: color_palette.black,
    sectionPoppinsRegularTextSolid: color_palette.black,
    //------------------------------------------------ Section Transparent
    sectionHeaderTransparent: color_palette.white,
    sectionHeaderBorderTransparent: color_palette.white,
    sectionBackgroundTransparent: color_palette.transparent,
    sectionBorderTransparent: `2px solid ${color_palette.black}`,
    sectionPoppinsBoldTextTransparent: color_palette.white,
    sectionPoppinsRegularTextTransparent: color_palette.white,
    //------------------------------------------------ Header & Menu
    headerText: color_palette.white,
    headerBack: color_palette.purple,
    headerIconSize: 40,
    headerIcon: color_palette.white,
    headerShadow: `0 2px 4px ${color_palette.black}80`,
    menuBorder: color_palette.purple_light,
    menuModalBack: `${color_palette.black}80`,
    //------------------------------------------------ Intro
    introImgOverlay: `linear-gradient(to top, ${color_palette.purple}, transparent)`,
    introTitle: color_palette.white,
    introSubtitle: color_palette.white,
    introDesc: color_palette.lightGray,
    introButtonSize: 40,
    introButton: color_palette.white,
    //------------------------------------------------ About
    aboutText: color_palette.black,
    //------------------------------------------------ Services
    serviceCard: color_palette.darkGray,
    serviceCardText: color_palette.white,
    //------------------------------------------------ Projects
    projectCard: color_palette.white,
    projectCardImageContainer: color_palette.white + "80",
  },
  light: {
    background: color_palette.lightGray,
    //------------------------------------------------ Fonts
    font_poppins: "'Poppins', sans-serif",
    font_roboto: "'Roboto', sans-serif",
    font_saira: "'Saira Stencil', sans-serif",

    //------------------------------------------------ Section Solid
    sectionHeaderSolid: color_palette.green,
    sectionHeaderBorderSolid: color_palette.green,
    sectionBackgroundSolid: color_palette.black,
    sectionBorderSolid: `2px solid ${color_palette.black}`,
    sectionPoppinsBoldTextSolid: color_palette.white,
    sectionPoppinsRegularTextSolid: color_palette.white,
    //------------------------------------------------ Section Transparent
    sectionHeaderTransparent: color_palette.black,
    sectionHeaderBorderTransparent: color_palette.black,
    sectionBackgroundTransparent: color_palette.transparent,
    sectionBorderTransparent: `2px solid ${color_palette.white}`,
    sectionPoppinsBoldTextTransparent: color_palette.black,
    sectionPoppinsRegularTextTransparent: color_palette.black,
    //------------------------------------------------ Header & Menu
    headerText: color_palette.white,
    headerBack: color_palette.green,
    headerIconSize: 40,
    headerIcon: color_palette.white,
    headerShadow: `0 2px 4px ${color_palette.black}80`,
    menuBorder: color_palette.green_light,
    menuModalBack: `${color_palette.black}80`,
    //------------------------------------------------ Intro
    introImgOverlay: `linear-gradient(to top, ${color_palette.green}, transparent)`,
    introTitle: color_palette.black,
    introSubtitle: color_palette.black,
    introDesc: color_palette.darkGray,
    introButtonSize: 40,
    introButton: color_palette.black,
    //------------------------------------------------ About
    aboutText: color_palette.white,
    //------------------------------------------------ Services
    serviceCard: color_palette.lightGray,
    serviceCardText: color_palette.black,
    //------------------------------------------------ Projects
    projectCard: color_palette.black,
    projectCardImageContainer: color_palette.white + "80",
  },
};

export default theme;
