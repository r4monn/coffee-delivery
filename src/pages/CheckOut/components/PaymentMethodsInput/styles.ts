import styled, { css } from "styled-components";

export const PaymentMethodsInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${props => css`
      background: ${props.theme.colors["brand-purple-light"]};
      border-color: ${props.theme.colors["brand-purple"]};

      &:hover {
        background: ${props.theme.colors["brand-purple-light"]};
      }
    `}
  }
`;

export const PaymentMethodsContent = styled.div`
  padding: 0 1rem;
  background: ${props => props.theme.colors["base-button"]};
  color: ${props => props.theme.colors["base-text"]};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${props => props.theme.colors["base-button"]};
  transition: 0.4s;

  svg {
    color: ${props => props.theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${props => props.theme.colors["base-hover"]};
    cursor: pointer;
  }

  user-select: none;
`