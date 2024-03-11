import styled from "styled-components";

export const AppWrapper = styled.div`
  color: ${(p) => p.theme.color.text};
  background-color: ${(p) => p.theme.color.background};
  width: 100%;

  section:nth-of-type(odd) {
    background-color: rgba(
      ${(p) => p.theme.color.backgroundInverseRGB},
      ${(p) => p.theme.color.backgroundInverseRGB},
      ${(p) => p.theme.color.backgroundInverseRGB},
      ${(p) => p.theme.backgroundInverseAlpha}
    );
  }
`;
