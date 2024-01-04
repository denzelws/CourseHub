import styled, { css } from "styled-components"

export const Title = styled.h2`
${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
`}
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
`;