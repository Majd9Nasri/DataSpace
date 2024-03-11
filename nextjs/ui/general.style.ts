"use client";

import styled from "styled-components";
import { metrics, metricsRem } from "./metrics";

export const ContentSection = styled.section`
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
  padding: 0 ${metricsRem.pagePadding};
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
