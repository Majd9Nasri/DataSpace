"use client";

import styled from "styled-components";

export const SectionTitleHeadingBase = styled.h3`
  font-size: 1.5rem;
  display: inline-block;
  color: ${(p) => p.theme.color.accent};
`;

export const SectionTitleHeading = styled(SectionTitleHeadingBase)`
  &::before {
    content: "/ ";
  }
`;
