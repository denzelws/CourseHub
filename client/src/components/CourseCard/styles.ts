import styled, { css } from "styled-components";

export const CourseCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ImageBox = styled.a`
  min-height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 30rem;
    height: 20rem;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const CardDescription = styled.div`
${({ theme }) => css`
background: ${theme.colors.lightGray};
width: 30rem;
height: auto;
color: ${theme.colors.darkGray};
`}
`
export const InfoWrapper = styled.div`
${({ theme }) => css`
margin: ${theme.spacings.small};
`}
`

export const CardCategory = styled.h3`
`
export const CardTitle = styled.h2`
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 40px; /* Increase padding for larger modal */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%; /* Set a specific width */
  max-width: 600px; /* Maximum width */
  max-height: 80%; /* Maximum height */
  overflow-y: auto; /* Enable vertical scrolling if content exceeds height */
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: red;
  }
`;

export const TitleDelete = styled.h2`
${({ theme }) => css`
font-size: ${theme.font.sizes.xlarge};
color: ${theme.colors.darkGray};
margin-bottom: 5rem;
`}
`

export const DeleteButton = styled.button`
  background-color: #ff3333;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background-color: #ccc;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
${({ theme }) => css`
  color: #fff;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.4rem;
  margin-right: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  background: ${theme.colors.primary};
`}
`