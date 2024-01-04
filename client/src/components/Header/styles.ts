import styled, { css } from "styled-components"
import { darken } from 'polished'

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Logo = styled.h2`
${({ theme }) => css`
margin: ${theme.spacings.xxsmall} ${theme.spacings.small};
 span {
    color: ${theme.colors.primary};
 }
`}
`

export const SpanWrapper = styled.div`
${({ theme }) => css`
display: flex;
align-items: center;
gap: 2rem;

span {
    color: ${theme.colors.darkGray};
    cursor: pointer;

    &:hover{
        color: ${darken(0.2, theme.colors.lightGray)};
        transition: 0.2s ease-in;
    }
}
`}
`

export const UserNotificationWrapper = styled.div`
${({ theme }) => css`
margin: ${theme.spacings.xxsmall} ${theme.spacings.small};
svg {
    width: 3.5rem;
    cursor: pointer;
}
`}
`