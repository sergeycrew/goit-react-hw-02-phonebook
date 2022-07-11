import styled from 'styled-components';

export const PhonebookList = styled.ul`
  margin-top: 30px;
  margin-left: 5px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    transform: scale(1.3);
`;
