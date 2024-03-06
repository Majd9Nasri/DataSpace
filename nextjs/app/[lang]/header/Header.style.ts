"use client";

import styled from "styled-components";
import { metrics, metricsRem } from "../../../ui/metrics";
import { ZIndex } from "../../../ui/zIndex";
import { NavbarDesktopLink } from "./NavbarDesktop.style";
import { NavbarMobileBurgerMenu, NavbarMobileLink } from "./NavbarMobile.style";

export const HeaderScrollerPercentage = styled.div.attrs<{ width: number }>(
  (props) => ({
    style: { width: `${props.width}%` },
  })
)`
  position: fixed;
  z-index: ${ZIndex.HeaderNavBar};
  top: 0;
  left: 0;

  height: 4px;

  background-color: #901721;

  transition: width 0.3s;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  max-width: ${metricsRem.maxPageContentWidth};
  margin: 0 auto;
`;

export const HeaderLogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const HeaderLogoSpan = styled.span`
  margin-left: 0.625rem;

  font-weight: ${metrics.headerFontWeight};
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  transition: 0.5s;
`;

export const HeaderHeader = styled.header<{ enableBackground: boolean }>`
  position: fixed;
  z-index: ${ZIndex.HeaderNavBar};

  width: calc(100% - ${metrics.pagePadding * 2}rem);
  padding: ${metricsRem.pagePadding};

  background-color: ${(p) => (p.enableBackground ? "#fff" : "transparent")};
  box-shadow: 0 0 8px
    rgba(255, 255, 255, ${(p) => (p.enableBackground ? 1 : 0)});

  transition: 0.5s;

  ${HeaderLogoSpan} {
    color: ${(p) => (p.enableBackground ? "#000" : undefined)};
  }

  ${NavbarDesktopLink} {
    color: ${(p) => (p.enableBackground ? "#000" : undefined)};
  }

  ${NavbarMobileLink} {
    background-color: ${(p) => (p.enableBackground ? "#fff" : undefined)};
    box-shadow: ${(p) => (p.enableBackground ? "0 0 1px 1px #000" : undefined)};
  }

  ${NavbarMobileBurgerMenu} {
    &::before {
      background-color: ${(p) => (p.enableBackground ? "#000" : undefined)};
    }
  }
`;
