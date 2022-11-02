import styled from "styled-components";

export const CheckOutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  h5 {
    color: ${props => props.theme.colors["base-subtitle"]};
    font-family: ${props => props.theme.fonts.title};
    font-size: ${props => props.theme.textSizes["title-title-xs"]};
  }

  h6 {
    color: ${props => props.theme.colors["base-subtitle"]};
    font-size: ${props => props.theme.textSizes["text-regular-m"]};
    font-weight: 300;
  }

  p {
    color: ${props => props.theme.colors["base-text"]};
    font-size: ${props => props.theme.textSizes["text-regular-s"]};
    margin-top: 0.35rem;
  }
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${props => props.theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;