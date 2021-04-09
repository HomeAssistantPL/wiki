import { tailwind } from "@theme-ui/presets"
import { darken } from "@theme-ui/color"
import nightOwl from "./night-owl.json"

const styles = {
  styles: {
    ...tailwind.styles,
    a: {
      // display: "flex",
      ...tailwind.styles.a,
      color: "secondary",
      fontWeight: "bold",
      "&:hover": {
        textDecoration: "none",
        color: darken("link", 0.25),
      },
    },
    h1: {
      ...tailwind.styles.h1,
      color: "secondary",
      fontSize: 4,
    },
    h2: {
      ...tailwind.styles.h2,
      color: "secondary",
      fontSize: 3,
    },
    pre: {
      p: 3,
    },
    code: {
      ...nightOwl,
    },
  },
}

const mytheme = {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.gray[9],
    background: "#ffffff",
    secondary: tailwind.colors.blue[7],
    menuBg: tailwind.colors.blue[2],
    activeLink: tailwind.colors.gray[4],
    activeLinkBg: tailwind.colors.blue[1],
    topLine: tailwind.colors.blue[4],
    link: tailwind.colors.gray[7],
    borderLeft: tailwind.colors.gray[4],
    linkHover: darken("link", 0.25),
    modes: {
      dark: {
        text: "#ffffff",
        primary: tailwind.colors.gray[2],
        secondary: tailwind.colors.blue[4],
        background: tailwind.colors.gray[9],
        menuBg: tailwind.colors.blue[7],
        activeLinkBg: "rgba(48, 140, 122, 0.3)",
        link: tailwind.colors.gray[2],
        linkHover: darken("link", 0.25),
      },
    },
  },
  ...styles,
  links: {
    sitelink: {
      ...styles.styles.a,
      display: "flex",
      color: "link",
    },
    social: {
      ...styles.styles.a,
      display: "flex",
      placeContent: "center",
      alignItems: "center",
      color: "link",
      "&:hover": {
        textDecoration: "none",
        color: "linkHover",
      },
    },
    toc: {
      color: "link",
      textDecoration: "none",
      "&:hover": {
        color: "linkHover",
      },
    },
    mdx: {
      display: "inline-flex",
      color: "link",
      "&:hover": {
        textDecoration: "none",
        color: darken("link", 0.25),
      },
    },
    nav: {
      px: 3,
      py: 2,
      fontSize: 0,
      fontWeight: "500",
      color: "link",
      width: "100%",
      textDecoration: "none",
      borderLeftColor: "borderLeft",
      borderLeftWidth: 2,
      borderLeftRadius: 0,
      borderLeftStyle: "solid",
      transition: "all 0.2s",
      "&:hover": {
        // textDecoration: "underline",
        color: "linkHover",
      },
    },
  },
  buttons: {
    primary: {
      color: "link",
      fontWeight: "600",
      backgroundColor: "transparent",
      px: 0,
      "&:hover:enabled": {
        textDecoration: "underline",
        cursor: "pointer",
      },
      // "&:disabled": {
      //   color: "secondary",
      // },
    },
    // border: string;
    // color: string;
    // fontWeight: string;
    // borderRadius: string;
    // '&:hover': {
    //     backgroundColor: string;
    // };
    // py: number;
    // px: number;
    // cursor: string;
    // fontSize: string;
    // lineHeight: string;
    // icon: {
    //   "&:focus": {
    //     outline: "none",
    //   },
  },
  // },
  nav: {
    position: ["fixed", "fixed", "sticky"],
    overscrollBehavior: "contain",
    overflowX: "auto",
    top: ["5rem", "5rem", "5.5rem"],
    width: ["100%", "100%", "280px"],
    height: ["100%", "100%", "calc(((100vh - 4rem) - 64px) - 42px);"],
    pr: 4,
    pb: ["192px", "192px", 48],
    pl: 2,
    pt: 4,
    zIndex: 5,
    flexShrink: 0,
    flexBasis: ["100%", "auto"],
  },
  headerbutton: {
    appearance: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "link",
    userSelect: "none",
    backgroundColor: "transparent",
    border: "none",
    ml: [0, 3],
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      color: darken("link", 0.25),
      cursor: "pointer",
    },
  },
  header: {
    transition: "box-shadow 0.2s",
    width: "full",
    position: "fixed",
    shadow: "sm",
    borderBottom: "1px solid",
    borderBottomColor: "primary",
    borderTop: "6px solid",
    borderTopColor: "topLine",
    zIndex: 3,
    backgroundColor: "background",
  },
}

export default mytheme
