import styled from "styled-components";
import MainSectionBackground from '../../../../assets/MainSectionBackground.png'

export const MainSectionContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${MainSectionBackground}) no-repeat center`};
  background-size: cover;

  margin-top: 5rem;
`;

export const MainSectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  section {
    h1 {
      color: ${props => props.theme.colors["base-title"]};
      font-weight: 700;
      font-family: ${props => props.theme.fonts.title};
      font-size: ${props => props.theme.textSizes["title-title-xl"]};
      line-height: 3.5rem;
    }

    p:nth-last-child(2) {
      margin-top: 1rem;
      line-height: 2rem;
      color: ${props => props.theme.colors["base-subtitle"]};
      font-size: ${props => props.theme.textSizes["text-regular-l"]};
    }
  }
`;

export const ProsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;