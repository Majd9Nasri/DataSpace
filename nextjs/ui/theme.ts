const commonTheme = {
  color: {
    accent: "#156ab7",
    text: "#fff",
  },
};

export const whiteTheme = {
  ...commonTheme,
  color: { ...commonTheme.color, text: "#000", textInverse: "#fff" },
  header: {
    background: "#fff",
    backgroundRGB: 255,
  },
};

export const darkTheme = {
  ...commonTheme,
  color: { ...commonTheme.color, text: "#fff", textInverse: "#000" },
  header: {
    background: "#000",
    backgroundRGB: 0,
  },
};
