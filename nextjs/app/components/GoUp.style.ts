"use client";

import styled from "styled-components";

export const GoUpDiv = styled.div`
  position: relative;
  cursor: pointer;

  &:before {
    content: "go up";
    transform: rotate(-90deg);
    position: absolute;
    color: rgba(0, 0, 0, 0.85);
    width: 4rem;
    left: -27px;
    top: -50px;
  }
`;
