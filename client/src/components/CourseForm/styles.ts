import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20rem;
    width: 50%;
    border-radius: 0.8rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  `

  export const SuccessButton = styled.button`
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease;

      background-color: #219EBC;
      color: white;
  
      &:hover {
        background-color: darken('#219EBC', '0.1');     
      }
  `;
  export const CancelButton = styled.button`
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease;

      background-color: red;
      color: white;
  
      &:hover {
        background-color: darken(red, '0.1');     
      }
  `;
  
  export const SelectWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    /* This will style the select arrow */
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: ${theme.spacings.xxsmall};
      transform: translateY(-50%);
      border: solid ${theme.colors.black};
      border-width: 0 1px 1px 0;
      padding: 3px;
      pointer-events: none;
      transition: transform 0.2s ease-in-out;
      transform-origin: 50% 50%;
    }

    select {
      appearance: none;
      width: calc(100% - ${theme.spacings.large});
      border: none;
      outline: none;
      background: transparent;
      color: ${theme.colors.black};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.xxsmall};
      margin: 0;
    }

    select:focus + &::after {
      transform: translateY(-50%) rotate(-135deg);
    }
  `}
`;