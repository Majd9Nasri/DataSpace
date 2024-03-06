"use client";

import styled from "styled-components";
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
    color: #e24c4f !important;
    background-color: #fff;
  }
`;
