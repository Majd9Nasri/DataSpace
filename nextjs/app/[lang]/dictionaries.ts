import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (locale in dictionaries) {
    return dictionaries[locale]();
  }
  return dictionaries["en"]();
};
