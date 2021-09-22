module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#2b2b2e;",
      secondary: "#c6c6c6",
      lightGray: "#bdbdbd",
      danger: "#e3342f",
      error: "#f53e37",
      link: "#1bbbeb",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      base: "#edf2f7", // body background color
      primary: "#061324", // dark
      secondary: "#f2f2f2", // white
      danger: "#e3342f",
    }),
    fontFamily: {
      body: [
        "'M PLUS Rounded 1c'",
        "'Noto Sans JP'",
        "Avenir",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "Hiragino Sans",
        "ヒラギノ角ゴシック",
        "メイリオ",
        "Meiryo",
        "YuGothic",
        "Yu Gothic",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ],
      title: ["montserrat", "'M PLUS Rounded 1c'", "'Noto Sans JP'", "sans-serif"],
    },
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        sp: "320px",
        tab: "672px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
