import styled from '@emotion/styled';

export const StyledContactItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 230px;
  max-height: 52px;
  justify-content: flex-start;
  padding: 10px;
  background-color: #f6f6f8;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const DeleteContactButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ContactName = styled.p`
  margin-bottom: 10px;
`;

export const ContactNumber = styled.p``;
