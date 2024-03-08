"use client";

import styled from "styled-components";
import { metrics } from "../../ui/metrics";

export const NavbarDesktopUnorderedList = styled.ul`
  display: flex;
  margin-left: auto;
  list-style-type: none;
`;

export const NavbarDesktopLink = styled.a<{ useFlagmojiFont?: boolean }>`
  padding: 1rem;

  font-family: ${(p) => (p.useFlagmojiFont ? "FlagmojiFont" : undefined)};
  font-weight: ${metrics.headerFontWeight};
  color: #fff;
  text-decoration: none;

  transition: 0.5s;

  &:hover {
    color: ${(p) => p.theme.color.accent} !important;
    background-color: #fff;
  }
`;
