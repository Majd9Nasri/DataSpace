export function getCountryFlag(language: string) {
  switch (language) {
    case "de":
      return "🇩🇪";
    default:
      return "🇺🇸";
  }
}

export function getNextLanguage(language: string) {
  switch (language) {
    case "de":
      return "en";
    default:
      return "de";
  }
}
