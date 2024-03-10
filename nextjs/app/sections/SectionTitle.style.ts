"use client";

import styled from "styled-components";

export const SectionTitleHeading = styled.h3`
  color: ${(p) => p.theme.color.accent};

  &::before {
    content: "/ ";
  }
`;
