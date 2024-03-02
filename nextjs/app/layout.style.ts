"use client";

import styled from "styled-components";
import { metrics } from "../ui/metrics";

export const LayoutHeader = styled.header`
  position: fixed;
  width: 100vw;
  padding: 10px 0;
`;

export const LayoutHeaderNavigation = styled.nav`
  display: flex;
  max-width: ${metrics.maxPageContentWidth};
  margin: 0 auto;
`;

export const LayoutHeaderLogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const LayoutLogoSpan = styled.span`
  margin-left: 0.625rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: ${metrics.headerFontWeight};
  letter-spacing: 0.125rem;
`;

export const LayoutHeaderUnorderedList = styled.ul`
  margin-left: auto;
  list-style-type: none;
  display: flex;
`;

export const LayoutHeaderLink = styled.a`
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
