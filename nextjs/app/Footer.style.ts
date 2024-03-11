"use client";

import styled from "styled-components";
import { metricsRem } from "../ui/metrics";

export const FooterFooter = styled.footer`
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
  padding: 0 ${metricsRem.pagePadding};

  font-size: 15px;
  color: rgb(
    ${(p) => p.theme.color.textRGB} ${(p) => p.theme.color.textRGB}
      ${(p) => p.theme.color.textRGB} / 70%
  );
`;

export const FooterParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
