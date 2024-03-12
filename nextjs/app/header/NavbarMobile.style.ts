import styled from "styled-components";
import { notoColorEmoji } from "../../ui/font";
import { metricsRem } from "../../ui/metrics";
import { NavbarDesktopLink } from "./NavbarDesktop.style";

export const NavbarMobileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavbarMobileBurgerMenu = styled.span`
  cursor: pointer;
  padding: 1rem;

  &::before {
    content: "";

    display: inline-block;

    width: 1rem;
    height: 1rem;

    background-color: #fff;

    mask: url("/burger-menu.svg") no-repeat center;

    mask-size: cover;
  }
`;

export const NavbarMobileUnorderedList = styled.ul`
  position: absolute;
  top: 100%;
  right: ${metricsRem.pagePadding};
  transform: translateX(100%);

  display: flex;
  flex-direction: column;

  margin: 0;

  list-style-type: none;
`;

export const NavbarMobileLink = styled(NavbarDesktopLink)`
  display: inline-block;
  width: calc(100% - 2rem);
  white-space: nowrap;
`;

export const NavbarMobileEmojiWrapper = styled(NavbarMobileLink)`
  ${NavbarMobileLink} {
    display: contents;
    font-family: ${notoColorEmoji.style.fontFamily};
  }
`;
