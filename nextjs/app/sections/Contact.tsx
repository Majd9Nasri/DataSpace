import { ContentSection, SectionTitle } from "../../ui/general.style";
import { GoUp } from "../components/GoUp";
import {
  ContactContentSplitter,
  ContactEmail,
  ContactGoUpWrapper,
  ContactNumber,
} from "./Contact.style";

export function Contact() {
  return (
    <ContentSection>
      <ContactContentSplitter>
        <div>
          <SectionTitle>Contact</SectionTitle>
          <h1>
            Contact us and let us create projects together, we are happy to
            help.
          </h1>
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
