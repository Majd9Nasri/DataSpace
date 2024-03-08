"use client";

import styled from "styled-components";
import { color } from "../../ui/color";

export const SectionTitleHeading = styled.h3`
  color: ${color.accent};
  &::before {
    content: "/ ";
  }
`;
