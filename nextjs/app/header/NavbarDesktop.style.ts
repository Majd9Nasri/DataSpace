"use client";

import styled from "styled-components";
import { metrics } from "../../ui/metrics";

export const NavbarDesktopUnorderedList = styled.ul`
  margin-left: auto;
  list-style-type: none;
  display: flex;
`;

export const NavbarDesktopLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: ${metrics.headerFontWeight};

  padding: 1rem;
  transition: 0.5s;
  &:hover {
    color: #e24c4f !important;
    background-color: #fff;
  }
`;
