"use client";
import styled from "styled-components";
import { ZIndex } from "../../ui/zIndex";

export const StartPageWrapper = styled.section`
  position: relative;
  z-index: ${ZIndex.Default};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-image: url("/kam.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 0.625rem #000;

  &::before {
    content: "";

    position: absolute;
    z-index: ${ZIndex.StartPageBackgroundImage};
    inset: 0;

    opacity: 0.7;
    background-color: #000;
  }
`;

export const StartPageHeading = styled.h1`
  font-size: 3.75rem;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.625rem;

  animation: slide-in-from-bottom-100-percent 2.5s forwards;
`;

export const StartPageArrowLink = styled.a`
  position: absolute;
  bottom: 3rem;
  padding: 1rem;
`;

export const StartPageArrow = styled.img`
  pointer-events: none;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;

  animation: scroll-down 2s infinite;
  animation-delay: 2500ms;
`;
