"use client";
import styled from "styled-components";
import { ZIndex } from "../../ui/zIndex";

export const StartPageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.625rem #000;
`;

export const StartPageBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  width: 100%;
  min-width: 100%;
  max-width: 100%;

  object-fit: cover;

  filter: brightness(30%);
  z-index: ${ZIndex.StartPageBackgroundImage};
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
