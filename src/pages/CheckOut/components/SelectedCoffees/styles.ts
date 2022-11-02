import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const TotalCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: ${props => props.theme.textSizes["text-regular-s"]};
  }

  h4 {
    font-size: ${props => props.theme.textSizes["text-bold-l"]};
    font-weight: 700;
  }
`;

export const ConfirmButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  font-weight: 700;
  line-height: 1.3rem;
  font-size: ${props => props.theme.textSizes["components-button-g"]};
  color: ${props => props.theme.colors["base-white"]};
  background: ${props => props.theme.colors["brand-yellow"]};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props => props.theme.colors["brand-yellow-dark"]};
  }
`;