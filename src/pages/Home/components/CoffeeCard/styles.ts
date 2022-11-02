import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  //background: ${props => props.theme.colors["base-card"]};
  background: ${props => props.theme.colors["brand-yellow"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.5rem;
  }

  h4 {
    font-family: ${props => props.theme.fonts.title};
    font-size: ${props => props.theme.textSizes["title-title-s"]};
    color: ${props => props.theme.colors["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2rem;
    color: ${props => props.theme.colors["base-text"]};
    font-size: 0.875rem;
  }
`;

export const CoffeeTag = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${props => props.theme.colors["brand-yellow-light"]};
    color: ${props => props.theme.colors["brand-yellow-dark"]};
    
    font-size: ${props => props.theme.textSizes["components-tag"]};
    font-weight: bold;
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border-radius: 999px;
  }
`;

export const CardFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    span {
      color: ${props => props.theme.colors["base-text"]};
      font-size: ${props => props.theme.textSizes["text-regular-s"]};
    }

    h3 {
      font-family: ${props => props.theme.fonts.title};
      font-size: ${props => props.theme.textSizes["title-title-m"]};
      font-weight: 800;
      color: ${props => props.theme.colors["base-subtitle"]};
    }

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 3px;
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors["brand-purple-dark"]};
    color: ${props => props.theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: .4s;

    &:hover {
      background: ${props => props.theme.colors["brand-purple"]};
    }
  }
`;