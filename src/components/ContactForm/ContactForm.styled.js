import styled from '@emotion/styled';

export const ContactsFormWrapper = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  width: 380px;
`;

export const AddButtonWrapper = styled.li`
  display: flex;
  width: 230px;
  justify-content: flex-start;
  background-color: #f6f6f8;
  border-radius: 5px;
`;

export const AddContactButton = styled.button`
  display: flex;
  width: 260px;
  padding: 24px;

  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #d7d7d7;
  border-radius: 5px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  :hover,
  :focus {
    background-color: gray;
    color: #fff;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
