"use client";

import { useContext } from "react";
import { GoUpDiv } from "./GoUp.style";
import LanguageContext from "./LanguageContext";

export function GoUp() {
  const { dictionary } = useContext(LanguageContext);

  function goUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <GoUpDiv text={dictionary.Components.GoUp} onClick={goUp}>
      <img src="/arrow-up.svg" alt="Go up" />
    </GoUpDiv>
  );
}
