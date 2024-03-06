"use client";

import styled from "styled-components";

export const GoUpDiv = styled.div`
  cursor: pointer;
  position: relative;

  &::before {
    content: "go up";

    position: absolute;
    top: -50px;
    left: -27px;
    transform: rotate(-90deg);

    width: 4rem;

    color: rgb(0 0 0 / 85%);
  }
`;
