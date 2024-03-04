import styled from "styled-components";
import { metricsRem } from "../../ui/metrics";
import { NavbarDesktopLink } from "./NavbarDesktop.style";

export const NavbarMobileWrapper = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const NavbarMobileBurgerMenu = styled.span`
  padding: 1rem;
  cursor: pointer;
  &:before {
    content: url("/burger-menu.svg");
    mask: url("/burger-menu.svg") no-repeat center;
    background-color: #fff;
  }
`;

export const NavbarMobileUnorderedList = styled.ul`
  position: absolute;
  right: ${metricsRem.pagePadding};
  top: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
`;

export const NavbarMobileLink = styled(NavbarDesktopLink)`
  display: inline-block;
  width: calc(100% - 2rem);
`;
