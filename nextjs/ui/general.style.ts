"use client";

import styled from "styled-components";
import { metrics, metricsRem } from "./metrics";

export const ContentSectionWrapper = styled.div`
  width: 100%;
`;

export const ContentSection = styled.section`
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
  padding: 0 ${metricsRem.pagePadding} 3rem ${metricsRem.pagePadding};
`;

export const ContentSectionHeading = styled.h1`
  margin-top: 0;
  font-size: 3rem; //ToDo set font size via Media query depending on screen size(width)

  @media (max-width: ${metricsRem.mobileMaxWidth}) {
    font-size: 2rem;
  }
`;

export const ContentSectionParagraph = styled.p`
  font-size: 1.5rem;
  @media (max-width: ${metricsRem.mobileMaxWidth}) {
    font-size: 1.25rem;
  }
`;

export const ResponsiveFlexGrid = styled.div<{ columns: number }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  min-width: ${(p) => metrics.maxPageContentWidth / p.columns}rem;
  max-width: ${(p) => metricsRem.maxPageContentWidth};

  > * {
    flex-basis: ${(p) => metrics.maxPageContentWidth / p.columns}rem;
  }
`;
