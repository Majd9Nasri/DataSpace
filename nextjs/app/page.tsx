"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, whiteTheme } from "../ui/theme";
import { Footer } from "./Footer";
import DarkModeContext from "./components/DarkModeContext";
import LanguageContext from "./components/LanguageContext";
import de from "./dictionaries/de.json";
import en from "./dictionaries/en.json";
import { Header } from "./header/Header";
import { AppWrapper } from "./page.style";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Services } from "./sections/Services";
import { StartPage } from "./sections/StartPage";
import { Team } from "./sections/Team";

export default function Page() {
  const [useDarkMode, setUseDarkMode] = useState(false);
  const [language, setLanguage] = useState("de");
  const [dictionary, setDictionary] = useState(de);

  useEffect(() => {
    switch (language) {
      case "de":
        setDictionary(de);
        break;
      default:
        setDictionary(en);
        break;
    }
  }, [language]);

  useEffect(() => {
    setUseDarkMode(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    setLanguage(navigator.language);

    const slideElementsCollection = document.getElementsByClassName(
      "animate-slide-in-from-bottom-5rem-target-class"
    );

    const intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-from-bottom-5rem");
          }
        }
      }
    });

    //@ts-expect-error
    for (const element of slideElementsCollection) {
      intersectionObserver.observe(element);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ dictionary, language, setLanguage }}>
      <DarkModeContext.Provider value={{ useDarkMode, setUseDarkMode }}>
        <ThemeProvider theme={useDarkMode ? darkTheme : whiteTheme}>
          <AppWrapper>
            <Header />
            <StartPage />
            <About />
            <Services />
            <Team />
            <Contact />
            <Footer />
          </AppWrapper>
        </ThemeProvider>
      </DarkModeContext.Provider>
    </LanguageContext.Provider>
  );
}
