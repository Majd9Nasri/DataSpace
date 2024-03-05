"use client";

import { useEffect } from "react";
import { ContentSection } from "../ui/general.style";
import { Footer } from "./Footer";
import { FooterFooter } from "./Footer.style";
import { Header } from "./header/Header";
import { NavbarRoutes } from "./header/navbarRoutes";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Services } from "./sections/Services";
import { ServiceWrapper } from "./sections/Services.style";
import { StartPage } from "./sections/StartPage";
import { Team } from "./sections/Team";

export const animateSlideInFromBottom5remTargetClassName =
  "animateSlideInFromBottom5remTargetClassName";

const targetClassNames = [
  ContentSection.styledComponentId,
  FooterFooter.styledComponentId,
  ServiceWrapper.styledComponentId,
  animateSlideInFromBottom5remTargetClassName,
];
const idBlacklist = [NavbarRoutes.Services];

export default function Page() {
  useEffect(() => {
    const targetElements: Array<Element> = [];
    for (const className of targetClassNames) {
      const collection = document.getElementsByClassName(className);
      //@ts-expect-error
      for (const element of collection) {
        const id = element.getAttribute("id");
        if (!id || !idBlacklist.includes(id)) {
          targetElements.push(element);
        }
      }
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

    for (const element of targetElements) {
      intersectionObserver.observe(element);
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
