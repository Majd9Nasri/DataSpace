const commonTheme = {
  color: {
    accent: "#156ab7",
    text: "#fff",
  },
};

export const whiteTheme = {
  ...commonTheme,
  color: {
    ...commonTheme.color,
    text: "#000",
    background: "#fff",
    textRGB: 0,
  },
  header: {
    background: "#fff",
    backgroundRGB: 255,
  },
};

export const darkTheme = {
  ...commonTheme,
  color: {
    ...commonTheme.color,
    text: "#fff",
    background: "#000",
    textRGB: 255,
  },
  header: {
    background: "#000",
    backgroundRGB: 0,
  },
};
