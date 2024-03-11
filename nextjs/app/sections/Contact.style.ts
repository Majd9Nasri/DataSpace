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

export const ContactGoUpWrapper = styled.div`
  margin: auto 0 0 auto;
  padding: 1rem;
`;
