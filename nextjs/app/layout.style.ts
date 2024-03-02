"use client";

import styled from "styled-components";
import { metrics } from "../ui/metrics";

export const HomePageHeader = styled.header`
  position: fixed;
  width: 100vw;
  padding: 10px 0;
`;

export const HomePageHeaderNavigation = styled.nav`
  display: flex;
  max-width: 73rem;
  margin: 0 auto;
`;

export const HomePageHeaderLogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const HomePageLogoSpan = styled.span`
  margin-left: 0.625rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: ${metrics.headerFontWeight};
  letter-spacing: 0.125rem;
`;

export const HomePageHeaderUnorderedList = styled.ul`
  margin-left: auto;
  list-style-type: none;
  display: flex;
`;

export const HomePageHeaderLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: ${metrics.headerFontWeight};

  padding: 1rem;
  transition: 0.5s;
  &:hover {
    color: #e24c4f;
    background-color: #fff;
  }
`;
