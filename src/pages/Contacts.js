import { useEffect } from 'react';
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

function Contacts() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Container>
        {isLoading && <Loader />}
        <ContactForm />
        {visibleContacts.length > 0 ? (
          <ContactList />
        ) : (
          <div>your cont list is empty</div>
        )}
        {error && <div>smth went wrong</div>}
      </Container>
    </>
  );
}

export default Contacts;
