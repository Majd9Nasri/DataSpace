"use client";

import styled from "styled-components";
import { metrics, metricsRem } from "./metrics";

export const ContentSection = styled.section`
  max-width: ${metricsRem.maxPageContentWidth};
  padding: 0 ${metricsRem.pagePadding};
  margin: 0 auto;
`;

export const ResponsiveGrid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(p) => metrics.maxPageContentWidth / p.columns}rem, 1fr)
  );
`;
