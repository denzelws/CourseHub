import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `}
`
