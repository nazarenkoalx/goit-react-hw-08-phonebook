import { useEffect, useState } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contactSlice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactSlice/operations';
import { Container } from '../components/Container/Container.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Loader } from '../components/Loading/Loading';
import { Filter } from 'components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { AddContactButton } from 'components/ContactForm/ContactForm.styled';

function Contacts() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const showModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <Container>
      <Filter />
      <AddContactButton type="button" onClick={showModalToggle}>
        <AddCircleIcon sx={{ marginRight: '5px' }} /> add contact
      </AddContactButton>
      {showModal && (
        <Modal onModalShow={showModalToggle}>
          <ContactForm showModal={showModalToggle} />
        </Modal>
      )}

      {visibleContacts.length > 0 ? (
        <ContactList />
      ) : (
        <div>
          Your contact list is empty, click Add contact button to create yours
          first contact!
        </div>
      )}
      {isLoading && <Loader />}
      {error && <div>smth went wrong</div>}
    </Container>
  );
}

export default Contacts;
