import styled, { css } from "styled-components";

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.input<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors["base-button"]};
  background: ${props => props.theme.colors["base-input"]};
  color: ${props => props.theme.colors["base-text"]};
  font-size: 0.75rem;
  transition: 0.4s;
  padding: 0 0.75rem;

  &:focus {
    border-color: ${props => props.theme.colors["brand-yellow-dark"]};
  }

  &::placeholder {
    color: ${props => props.theme.colors["base-label"]};
  }

  ${({ theme, hasError }) => hasError && css`
    border-color: ${theme.colors["base-error"]};
  `}
`;

export const InputError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${props => props.theme.colors["base-error"]}
  }
`;