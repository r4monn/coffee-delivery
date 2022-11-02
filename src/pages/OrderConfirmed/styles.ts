import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h2 {
    color: ${props => props.theme.colors["brand-yellow-dark"]};
    font-weight: 700;
    font-family: ${props => props.theme.fonts.title};
    font-size: ${props => props.theme.textSizes["title-title-l"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${props => props.theme.colors["base-background"]};
  min-width: 32rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }
`;