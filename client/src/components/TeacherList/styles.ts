import styled, { css } from "styled-components"

export const TeacherListContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`

export const TeacherBox = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const IconsWrapper = styled.div`
${({ theme }) => css`
  display: flex;
  gap: 1.5rem;
  margin-top: 8px;

  > svg {
    cursor: pointer;
    color: ${theme.colors.primary};
  }
 `}
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;