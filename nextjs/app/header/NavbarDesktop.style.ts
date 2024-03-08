"use client";

import styled from "styled-components";
import { color } from "../../ui/color";
import { metrics } from "../../ui/metrics";

export const NavbarDesktopUnorderedList = styled.ul`
  display: flex;
  margin-left: auto;
  list-style-type: none;
`;

export const NavbarDesktopLink = styled.a`
  padding: 1rem;

  font-weight: ${metrics.headerFontWeight};
  color: #fff;
  text-decoration: none;

  transition: 0.5s;

  &:hover {
    color: ${color.accent} !important;
    background-color: #fff;
  }
`;
