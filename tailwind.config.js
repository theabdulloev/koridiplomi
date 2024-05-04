const { nextui } = require("@nextui-org/react");

module.exports = {
    content: [
        // ...
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        background: "#FFFFFF", // or DEFAULT
                        foreground: "#11181C", // or 50 to 900 DEFAULT
                        primary: {
                            //... 50 to 900
                            foreground: "#FFFFFF",
                            DEFAULT: "teal",
                        },
                        // ... rest of the colors
                    },
                },
                dark: {
                    colors: {
                        background: "#000000", // or DEFAULT
                        foreground: "#ECEDEE", // or 50 to 900 DEFAULT
                        primary: {
                            //... 50 to 900
                            foreground: "#FFFFFF",
                            DEFAULT: "teal",
                        },
                    },
                    // ... rest of the colors
                },
                mytheme: {
                    // custom theme
                    extend: "dark",
                    colors: {
                        primary: {
                            DEFAULT: "#BEF264",
                            foreground: "#000000",
                        },
                        focus: "#BEF264",
                    },
                },
            },
        }),
    ],
};
