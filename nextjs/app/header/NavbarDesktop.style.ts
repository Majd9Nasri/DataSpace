"use client";

import styled from "styled-components";
import { notoColorEmoji } from "../../ui/font";
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
    color: ${(p) => p.theme.color.accent} !important;
    background-color: #fff;
  }
`;

export const NavbarDesktopEmojiWrapper = styled(NavbarDesktopLink)`
  ${NavbarDesktopLink} {
    display: contents;
    font-family: ${notoColorEmoji.style.fontFamily};
  }
`;
