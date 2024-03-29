// Theme Colors
// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
export const $themeColors = {};

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {};

// APP CONFIG
export const $themeConfig = {
    app: {
        appName: "Construction", // Will update name in navigation menu (Branding)
        // eslint-disable-next-line global-require
        appLogoImage: require("@/assets/images/logo.png"), // Will update logo in navigation menu (Branding)
        redlimooLogo: require("@/assets/images/redlimoo.png"),
        qmcLogo: require("@/assets/images/QMC.png"),
        alec1Logo: require("@/assets/images/1.png"),
        alec2Logo: require("@/assets/images/2.png"),
    },
    layout: {
        isRTL: false,
        skin: "semi-dark", // light, dark, bordered, semi-dark
        routerTransition: "slide-fade", // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
        type: "vertical", // vertical, horizontal
        contentWidth: "full", // full, boxed
        menu: {
            hidden: false,
            isCollapsed: true,
        },
        navbar: {
            // ? For horizontal menu, navbar type will work for navMenu type
            type: "floating", // static , sticky , floating, hidden
            backgroundColor: "", // BS color options [primary, success, etc]
        },
        footer: {
            type: "static", // static, sticky, hidden
        },
        customizer: false,
        enableScrollToTop: true,
    },
};
