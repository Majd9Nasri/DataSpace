"use client";

import styled from "styled-components";

export const SectionTitleHeading = styled.h3`
  display: inline-block;
  color: ${(p) => p.theme.color.accent};

  &::before {
    content: "/ ";
  }
`;
