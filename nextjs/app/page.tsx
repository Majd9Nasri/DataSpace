"use client";

import { useEffect } from "react";
import { ContentSection } from "../ui/general.style";
import { Footer } from "./Footer";
import { Header } from "./header/Header";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Services } from "./sections/Services";
import { StartPage } from "./sections/StartPage";
import { Team } from "./sections/Team";

export default function Page() {
  useEffect(() => {
    const sectionElements = document.getElementsByClassName(
      ContentSection.styledComponentId
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
    for (const sectionElement of sectionElements) {
      intersectionObserver.observe(sectionElement);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <StartPage />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
