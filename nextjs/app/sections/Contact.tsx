import { useContext } from "react";
import { ContentSection, ContentSectionWrapper } from "../../ui/general.style";
import { GoUp } from "../components/GoUp";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import {
  ContactContentSplitter,
  ContactEmail,
  ContactGoUpWrapper,
  ContactNumber,
} from "./Contact.style";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <ContentSectionWrapper className="animate-slide-in-from-bottom-5rem-target-class">
      <ContentSection id={NavbarRoutes.Contact}>
        <ContactContentSplitter>
          <div>
            <SectionTitle
              title={dictionary.Navbar.Contact}
              targetId={NavbarRouteLinks.Contact}
            />
            <h1>{dictionary.Contact.h1}</h1>
            <ContactEmail href="mailto:contact@4next.tech">
              contact@4next.tech
            </ContactEmail>
            <ContactNumber>+49 (0) 152 254 079 40</ContactNumber>
          </div>
          <ContactGoUpWrapper>
            <GoUp />
          </ContactGoUpWrapper>
        </ContactContentSplitter>
      </ContentSection>
    </ContentSectionWrapper>
  );
}
