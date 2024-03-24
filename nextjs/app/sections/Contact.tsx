import { useContext } from "react";
import {
  ContentSection,
  ContentSectionHeading,
  ContentSectionWrapper,
} from "../../ui/general.style";
import { GoUp } from "../components/GoUp";
import LanguageContext from "../components/LanguageContext";
import { NavbarRouteLinks, NavbarRoutes } from "../header/navbarRoutes";
import {
  ContactContentSplitter,
  ContactEmail,
  ContactFormInput,
  ContactFormInputGrid,
  ContactFormTextarea,
  ContactGoUpWrapper,
  ContactNumber,
} from "./Contact.style";
import { SectionTitle } from "./SectionTitle";
import { SectionTitleHeadingBase } from "./SectionTitle.style";

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
            <ContentSectionHeading>
              {dictionary.Contact.h1}
            </ContentSectionHeading>
            <ContactEmail href="mailto:contact@4next.tech">
              contact@4next.tech
            </ContactEmail>
            <ContactNumber>+49 (0) 152 254 079 40</ContactNumber>
          </div>
          <div style={{ width: "100%" }}>
            <SectionTitleHeadingBase>&nbsp;</SectionTitleHeadingBase>
            <form>
              <ContactFormInputGrid>
                <ContactFormInput placeholder="Name" />
                <ContactFormInput placeholder="E-Mail" />
                <ContactFormInput placeholder="Phone Number" />
                <ContactFormInput placeholder="Subject" />
              </ContactFormInputGrid>
              <ContactFormTextarea cols={60} rows={6} placeholder="Message" />
            </form>
          </div>
          <ContactGoUpWrapper>
            <GoUp />
          </ContactGoUpWrapper>
        </ContactContentSplitter>
      </ContentSection>
    </ContentSectionWrapper>
  );
}
