"use client";
import styled from "styled-components";
import { ResponsiveFlexGrid } from "../../ui/general.style";

export const TeamImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.25rem;
  margin-bottom: 1rem;
`;

export const TeamImage = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const TeamResponsiveFlexGrid = styled(ResponsiveFlexGrid)`
  ${TeamImageWrapper}:last-child {
    margin-bottom: 0;
  }
`;
