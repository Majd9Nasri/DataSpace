"use client";

import { useEffect } from "react";
import { ContentSection } from "../ui/general.style";
import { Footer } from "./Footer";
import { FooterFooter } from "./Footer.style";
import { Header } from "./header/Header";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Services } from "./sections/Services";
import { StartPage } from "./sections/StartPage";
import { Team } from "./sections/Team";

const targetClassNames = [
  ContentSection.styledComponentId,
  FooterFooter.styledComponentId,
];

export default function Page() {
  useEffect(() => {
    const targetElementCollections: Array<HTMLCollectionOf<Element>> = [];
    for (const className of targetClassNames) {
      targetElementCollections.push(document.getElementsByClassName(className));
    }

    const intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-from-bottom-5rem");
          }
        }
      }
    });

    for (const collection of targetElementCollections) {
      //@ts-expect-error
      for (const sectionElement of collection) {
        intersectionObserver.observe(sectionElement);
      }
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
