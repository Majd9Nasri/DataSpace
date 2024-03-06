import { FooterFooter, FooterParagraph } from "./Footer.style";

export function Footer() {
  return (
    <FooterFooter className="animate-slide-in-from-bottom-5rem-target-class">
      <FooterParagraph>
        <span>Copyright ©2024 All rights reserved</span>
        <a>Imprint</a>
      </FooterParagraph>
    </FooterFooter>
  );
}
