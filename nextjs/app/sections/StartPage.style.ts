"use client";
import Image from "next/image";
import styled from "styled-components";

export const StartPageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.625rem #000;
`;

export const StartPageBackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url("kam.webp");
  background-size: cover;
  filter: brightness(30%);
  z-index: -1;
`;

export const StartPageHeading = styled.h1`
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  color: #fff;
  font-size: 3.75rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.625rem;
  animation: slideInFromBottom 2.5s;
`;

export const StartPageArrowLink = styled.a`
  position: absolute;
  bottom: 1rem;
`;

export const StartPageArrow = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  animation: scrollDown 2s infinite;
  animation-delay: 2500ms;
  @keyframes scrollDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
