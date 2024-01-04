import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  ${({ theme }) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    width: 100%;
    cursor: pointer;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;

    &:hover {
      background: ${darken(0.2, theme.colors.primary)};
      transition: 0.2s ease-in-out;
    }
  `}
`
