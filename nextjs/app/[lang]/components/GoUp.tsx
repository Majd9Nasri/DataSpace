"use client";

import { GoUpDiv } from "./GoUp.style";

export function GoUp() {
  function goUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <GoUpDiv onClick={goUp}>
      <img src="/arrow-up.svg" alt="Go up" />
    </GoUpDiv>
  );
}
