module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
        extend: {
            colors: {
                // personal
                custom: {
                   darkblue:"#244F98",
                   dimblue:"#5279BA",
                   lightblue:"#5184D7",
                   midblue:"#386BC0",
                   lightyellow:"#FCFAF4",
                  // 
                    blue1: "#6ba3d4",
                    blue2: "#337ab7",
                    blue3: "#23527c",
                    blue4: "#1f4e79",
                    blue5: "#203864",
                    primary: "#063561",
                    secondary1: "#0f4173",
                    secondary2: "#012952",
                    orange1: "orange",
                    orange2: "#ea851c",
                    orange3: "#cc3300",
                    orange4: "#df5c2e",
                    orangedull: "#FFE4B3",
                    light1: "#fcfaf4",
                    grey1: "#d2d6dc",
                    green1: "#619235",
                    bg1: "#f7f2e0",
                    darkcream: "#f7f2e0",
                    lightcream: "#fcfaf4",
                    hd1: "#bfd4ea",
                    thead1: "rgb(56,103,155)",
                    coral: "coral",
                    lightergreen: "#d7ead7",
                    lightgreen: "#8BC1AF",
                    seagreen:"#DFF0D8",
                    darkgreen: "#45907b"
                }
            },
            
            fontSize: {
                xxs: ".50rem",
                xxxs: ".40rem",
                pTitle: ["2.625rem", "2.88rem"],
                pSubTitle: ["1.5rem", "2.0625rem"]
            },
            minHeight: {
                // personal
                "1/2": "50%",
                "1/3": "33.33334%",
                "2/3": "66.66667%",
                "1/4": "25%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.66667%",
                "5/6": "83.33334%",
                "1/12": "8.33333%",
                "5/12": "41.66667%",
                "7/12": "58.33333%",
                screen: "100vh",
                min: "min-content",
                max: "max-content",
                // sajawal
                "500p": "31.25rem",
                "600p": "40rem",
                "250p": "250px"
            },
            maxHeight: {
                // personal
                "1/2": "50%",
                "1/3": "33.33334%",
                "2/3": "66.66667%",
                "1/4": "25%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.66667%",
                "5/6": "83.33334%",
                "1/12": "8.33333%",
                "5/12": "41.66667%",
                "7/12": "58.33333%",
                screen: "100vh",
                min: "min-content",
                max: "max-content",
                // sajawal
                "500p": "31.25rem",
                "600p": "40rem"
            },
            spacing: {
                // personal
                // sajawal
                "1100w": "71.25rem",
                "900w": "56.25rem",
                "800w": "55rem",
                "31p": "31.333%",
                "40p": "40%",
                "100vw": "100vw",
                "35rem":"35rem",

            },
            maxWidth: {
                // personal
                "1/2": "50%",
                "1/3": "33.33334%",
                "2/3": "66.66667%",
                "1/4": "25%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.66667%",
                "5/6": "83.33334%",
                "1/12": "8.33333%",
                "5/12": "41.66667%",
                "7/12": "58.33333%",
                screen: "100vw",
                min: "min-content",
                max: "max-content",
                // sajawal
                "250p": "15.7rem",
                "1140p": "71.25rem",
                "1300p": "81.75rem"
            },
            minWidth: {
                // personal
                "1/2": "50%",
                "1/3": "33.33334%",
                "2/3": "66.66667%",
                "1/4": "25%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.66667%",
                "5/6": "83.33334%",
                "1/12": "8.33333%",
                "5/12": "41.66667%",
                "7/12": "58.33333%",
                "12%": "12%",
                screen: "100vw",
                min: "min-content",
                max: "max-content",
                // sajawal
                "250p": "15.7rem",
                "1140p": "71.25rem",
                "1300p": "81.75rem"
            },
            rotate: {
                360: "360deg"
            },
            screens: {
                'print': {'raw': 'print'},
                // => @media print { ... }
            },
        },
        backgroundSize: {
            '50%' : '50%',
            '100%' : '100%'
        },
        fontFamily: {
            body: ["GothamCondensed", "arial", "sans-serif"],
            gothcon: ["GothamCondensed", "arial", "sans-serif"]
        }
    },
    variants: {
        opacity: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        display: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        width: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        minWidth: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        maxWidth: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        height: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        minHeight: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        fontFamily: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        fontSize: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        fontWeight: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        textColor: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        backgroundColor: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible",
            // "visited",
            // "checked",
            // "first",
            // "last",
            "odd",
            "even"
        ],
        borderWidth: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        borderRadius: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        borderColor: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        animation: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        padding: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ],
        cursor: [
            "responsive",
            "active",
            "hover",
            "focus",
            "disabled",
            "group-hover",
            "group-focus",
            "focus-within",
            "focus-visible"
            // "visited",
            // "checked",
            // "first",
            // "last",
            // "odd",
            // "even"
        ]
    },
  plugins: [],
}
