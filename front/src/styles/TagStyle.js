import styled from "styled-components";

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  min-height: 20pxs;
  width: 700px;
  padding: 0 10px;
  margin: 13px 10px;
  border: none;
  border-radius: 10px;
  &:focus-within {
    border-color: ${({ theme }) => theme.color.mainPurple};
  }
`;

export const TagItem = styled.div`
  align-items: center;
  margin: 2px;
  padding: 9px;
  background-color: #f3f0ff;
  opacity: 0.7;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.mainPurple};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: #ffffff;
  }
  span {
    font-size: 1rem;
  }
`;

export const TagInput = styled.input`
  min-width: 300px;
  font-size: 17px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;
