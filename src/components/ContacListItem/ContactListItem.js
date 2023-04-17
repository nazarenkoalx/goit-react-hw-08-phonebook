import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice/operations';
import PropTypes from 'prop-types';
import { notifyWarn } from 'services/notifications';
import {
  ContactName,
  ContactNumber,
  DeleteContactButton,
  StyledContactItem,
} from './ContactListItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDeleteContacts = () => {
    dispatch(deleteContact(id));
    notifyWarn(`You successfully deleted ${name} contact`);
  };
  const telLink = 'tel:' + number;

  return (
    <StyledContactItem>
      <ContactName>
        Name: <span>{name}</span>
      </ContactName>
      <ContactNumber>
        Number: <a href={telLink}>{number}</a>
      </ContactNumber>
      <DeleteContactButton type="button" onClick={handleDeleteContacts}>
        <DeleteIcon />
      </DeleteContactButton>
    </StyledContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
