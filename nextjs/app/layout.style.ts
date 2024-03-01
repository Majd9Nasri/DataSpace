"use client";

import styled from "styled-components";

export const HomePageHeader = styled.header`
  position: fixed;
  width: 100vw;
`;

export const HomePageHeaderNavigation = styled.nav`
  display: flex;
  max-width: 73rem;
  margin: 0 auto;
`;

export const HomePageHeaderUnorderedList = styled.ul`
  margin-left: auto;
  list-style-type: none;
  display: flex;
`;

export const HomePageHeaderLink = styled.a`
  color: #fff;
  text-decoration: none;

  padding: 1rem;
  transition: 0.5s;
  &:hover {
    color: #e24c4f;
    background-color: #fff;
  }
`;
