"use client";

import styled from "styled-components";
import { metrics, metricsRem } from "../../ui/metrics";
import { ZIndex } from "../../ui/zIndex";
import { NavbarDesktopLink } from "./NavbarDesktop.style";
import { NavbarMobileBurgerMenu } from "./NavbarMobile.style";

export const HeaderScrollerPercentage = styled.div<{ width: number }>`
  width: ${(p) => p.width}%;
  background-color: #901721;
  height: 4px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${ZIndex.HeaderNavBar};
  transition: width 0.3s;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
`;

export const HeaderLogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const HeaderLogoSpan = styled.span`
  margin-left: 0.625rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: ${metrics.headerFontWeight};
  letter-spacing: 0.125rem;
  transition: 0.5s;
`;

export const HeaderHeader = styled.header<{ enableBackground: boolean }>`
  position: fixed;
  width: calc(100% - ${metrics.pagePadding * 2}rem);
  padding: ${metricsRem.pagePadding};
  background-color: ${(p) => (p.enableBackground ? "#fff" : "transparent")};
  box-shadow: 0 0 8px
    rgba(255, 255, 255, ${(p) => (p.enableBackground ? 1 : 0)});
  transition: 0.5s;
  z-index: ${ZIndex.HeaderNavBar};

  ${HeaderLogoSpan} {
    color: ${(p) => (p.enableBackground ? "#000" : undefined)};
  }

  ${NavbarDesktopLink} {
    color: ${(p) => (p.enableBackground ? "#000" : undefined)};
  }

  ${NavbarMobileBurgerMenu} {
    &:before {
      background-color: ${(p) => (p.enableBackground ? "#000" : undefined)};
    }
  }
`;
