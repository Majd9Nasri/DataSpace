"use client";
import styled from "styled-components";

export const TeamImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

export const TeamImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamImage = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 50%;
  object-fit: cover;
`;
