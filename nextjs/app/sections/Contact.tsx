import { useContext } from "react";
import { ContentSection } from "../../ui/general.style";
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
    <ContentSection
      id={NavbarRoutes.Contact}
      className="animate-slide-in-from-bottom-5rem-target-class"
    >
      <ContactContentSplitter>
        <div>
          <SectionTitle
            title={dictionary.Navbar.Team}
            targetId={NavbarRouteLinks.Contact}
          />
          <h1>{dictionary.Contact.h1}</h1>
          <ContactEmail href="mailto:contact@dna-dataspace-solutions.com">
            contact@dna-dataspace-solutions.com
          </ContactEmail>
          <ContactNumber>+49 (0) 152 254 079 40</ContactNumber>
        </div>
        <ContactGoUpWrapper>
          <GoUp />
        </ContactGoUpWrapper>
      </ContactContentSplitter>
    </ContentSection>
  );
}
