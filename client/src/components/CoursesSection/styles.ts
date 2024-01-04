import styled, { css } from "styled-components"

export const Wrapper = styled.div`
${({ theme }) => css`
padding: 10rem;
position: relative;

svg {
  width: 10rem;
  color: ${theme.colors.primary};
  cursor: pointer;
}

`}
`
export const Section = styled.div`
height: 30rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


border: 1px solid transparent; 
background-image: linear-gradient(to right, ${({ theme }) => theme.colors.darkGray}, ${({ theme }) => theme.colors.lightGray} 100%, transparent);
background-size: 100% 1px; 
background-repeat: no-repeat;
background-position: 0 100%;

svg {
    width: 3rem;
    cursor: pointer;
}
`
export const Title = styled.h2`
${({ theme }) => css`
font-size: ${theme.font.sizes.huge};
color: ${theme.colors.black};
margin-bottom: ${theme.spacings.small};
`}
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  padding-top: 1rem;
  svg {
    width: 3rem;
  }
`;

export const CoursesWrapper = styled.div`
${({ theme }) => css`
margin-top: ${theme.spacings.small};
display: flex;
flex-wrap: wrap;
justify-content: center; 
gap: 2rem; 
`}
`