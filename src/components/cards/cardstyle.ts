import React from 'react';
import styled from 'styled-components';
import { theme } from "../../styles/theme";
import dividerDesktop from "../../assets/pattern-divider-desktop.svg";
import dividerMobile from "../../assets/pattern-divider-mobile.svg";
export const AdviceWrapper = styled.div``;

export const AdviceContainer = styled.div`
  background-color: ${theme.colors["Dark-Grayish-Blue"]};
  padding: 1.25rem 1.25rem 3rem;
  position: relative;
  border-radius: 10px;

  @media (min-width: ${theme.Breakpoint.Desktop}) {
    border-radius: 15px;
    width: 100%;
  }
`;
export const AdviceId = styled.p`
  color: ${theme.colors["Neon-Green"]};
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  letter-spacing: 0.4rem;
`;
export const AdviceText = styled.p`
  color: ${theme.colors["Light-Cyan"]};
  font-size: ${theme.typography.xxxl};
  max-width: 27.75rem;
  line-height: 1.5;
`;

export const Divider = styled.div`
  position: relative;
  background: center no-repeat url(${dividerDesktop});
  width: 100%;
  height: 1rem;
  padding: 1rem 0;

  &::before {
    content: "Divider pattern for desktop";
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  @media (max-width: ${theme.Breakpoint.Mobile}) {
    background: center no-repeat url(${dividerMobile});

    &::before {
      content: "Divider pattern for mobile";
    }
  }
`;
export const AdviceButton = styled.button`
  background-color: ${theme.colors["Neon-Green"]};
  padding: 1.25rem;
  border: none;
  border-radius: 50%;
  position: relative;
  bottom: 2rem;
  cursor: pointer;
  & img {
    width: 24px;
    height: 24px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors["Neon-Green"]};
  }
  &:active {
    filter: drop-shadow(0px 0px 20px ${theme.colors["Neon-Green"]});
  }
`;

export const Loading = styled.div`
  color: ${theme.colors["Light-Cyan"]};
  font-size: ${theme.typography.xxxl};
  max-width: 27.75rem;
  line-height: 1.5;
  padding-bottom: 2rem;
`;