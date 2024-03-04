"use client";
import styled from "styled-components";
import { ZIndex } from "../../ui/zIndex";

export const StartPageWrapper = styled.section`
  position: relative;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.625rem #000;

  background-image: url("/kam.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  z-index: ${ZIndex.Default};

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.7;

    z-index: ${ZIndex.StartPageBackgroundImage};
  }
`;

export const StartPageHeading = styled.h1`
  color: #fff;
  font-size: 3.75rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.625rem;
  animation: slideInFromBottom 2.5s;
`;

export const StartPageArrowLink = styled.a`
  position: absolute;
  bottom: 0rem;
  padding: 1rem;
`;

export const StartPageArrow = styled.img`
  pointer-events: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  animation: scrollDown 2s infinite;
  animation-delay: 2500ms;
`;
