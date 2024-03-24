"use client";

import styled from "styled-components";

export const ContactContentSplitter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactEmail = styled.a`
  font-size: 1.5rem;
`;

export const ContactNumber = styled.p`
  color: rgb(
    ${(p) => p.theme.color.textRGB} ${(p) => p.theme.color.textRGB}
      ${(p) => p.theme.color.textRGB} / 70%
  );
`;

export const ContactFormInputGrid = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%/1, max(10rem, 100%/2)), 1fr)
  );
`;

export const ContactFormInput = styled.input`
  all: unset;
  width: 100%;
`;

export const ContactFormTextarea = styled.textarea`
  all: unset;
  width: 100%;
  resize: none;
`;

export const ContactGoUpWrapper = styled.div`
  margin: auto 0 0 auto;
  padding: 1rem;
`;
