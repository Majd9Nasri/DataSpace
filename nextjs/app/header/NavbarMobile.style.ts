import styled from "styled-components";

export const NavbarMobileWrapper = styled.div`
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
