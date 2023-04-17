import { ContactListItem } from 'components/ContacListItem/ContactListItem';
import { AddContactButton } from 'components/ContactForm/ContactForm.styled';
import { Section } from 'components/Section/Section.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contactSlice/selectors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { StyledContactList, StyledTitle } from './ContactList.styled';
import { AddButtonWrapper } from 'components/ContactForm/ContactForm.styled';

export const ContactList = () => {
  const visibleContatcs = useSelector(selectVisibleContacts);
  const [showModal, setShowModal] = useState(false);

  const showModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <Section>
      <StyledTitle>Contact list</StyledTitle>
      <StyledContactList>
        <AddButtonWrapper>
          <AddContactButton type="button" onClick={showModalToggle}>
            <AddCircleIcon sx={{ marginRight: '5px' }} /> add contact
          </AddContactButton>
        </AddButtonWrapper>
        {visibleContatcs.length > 0 ? (
          visibleContatcs.map(contact => {
            return <ContactListItem contact={contact} key={contact.id} />;
          })
        ) : (
          <li>
            Your contact list is empty, click Add contact button to create yours
            first contact!
          </li>
        )}
      </StyledContactList>
      {showModal && (
        <Modal onModalShow={showModalToggle}>
          <ContactForm showModal={showModalToggle} />
        </Modal>
      )}
    </Section>
  );
};
