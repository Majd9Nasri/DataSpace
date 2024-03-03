"use client";

import styled from "styled-components";
import { metrics, metricsRem } from "../ui/metrics";
import { ZIndex } from "../ui/zIndex";

export const HeaderNavBarScrollerPercentage = styled.div<{ width: number }>`
  width: ${(p) => p.width}%;
  background-color: #901721;
  height: 4px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${ZIndex.HeaderNavBar};
  transition: width 0.3s;
`;

export const HeaderNavBarNavigation = styled.nav`
  display: flex;
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
`;

export const HeaderNavBarLogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const HeaderNavBarLogoSpan = styled.span`
  margin-left: 0.625rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: ${metrics.headerFontWeight};
  letter-spacing: 0.125rem;
  transition: 0.5s;
`;

export const HeaderNavBarUnorderedList = styled.ul`
  margin-left: auto;
  list-style-type: none;
  display: flex;
`;

export const HeaderNavBarLink = styled.a`
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

export const HeaderNavBarHeader = styled.header<{ enableBackground: boolean }>`
  position: fixed;
  width: 100%;
  padding: 10px 0;
  background-color: ${(p) => (p.enableBackground ? "#fff" : "transparent")};
  box-shadow: 0 0 8px
    rgba(255, 255, 255, ${(p) => (p.enableBackground ? 1 : 0)});
  transition: 0.5s;
  z-index: ${ZIndex.HeaderNavBar};

  ${HeaderNavBarLogoSpan} {
    color: ${(p) => (p.enableBackground ? "#000" : "#fff")};
  }

  ${HeaderNavBarLink} {
    color: ${(p) => (p.enableBackground ? "#000" : "#fff")};
  }
`;
