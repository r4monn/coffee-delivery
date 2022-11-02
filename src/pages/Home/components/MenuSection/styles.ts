import styled from "styled-components";

export const MenuSectionContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const MenuSectionContent = styled.div`
  h2 {
    color: ${props => props.theme.colors["base-title"]};
    font-weight: 700;
    font-family: ${props => props.theme.fonts.title};
    font-size: ${props => props.theme.textSizes["title-title-l"]};
  }
`;

export const CoffeesMenu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;