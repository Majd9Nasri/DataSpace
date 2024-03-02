"use client";

import styled from "styled-components";
import { metrics } from "./metrics";

export const ContentSection = styled.section`
  max-width: ${metrics.maxPageContentWidth};
  margin: 0 auto;
`;

export const SectionTitle = styled.h3`
  &:before {
    content: "/ ";
  }
`;
