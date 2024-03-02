"use client";

import styled from "styled-components";
import { metricsRem } from "../ui/metrics";

export const FooterFooter = styled.footer`
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
  font-size: 15px;

  color: rgba(0, 0, 0, 0.7);
`;

export const FooterParagraph = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
