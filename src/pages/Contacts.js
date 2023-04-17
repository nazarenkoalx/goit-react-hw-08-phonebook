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
import { Loader } from '../components/Loading/Loading';
import { Filter } from 'components/Filter/Filter';

function Contacts() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const visibleContatcs = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {visibleContatcs.length > 0 && <Filter />}
      {/* <AddContactButton type="button" onClick={showModalToggle}>
        <AddCircleIcon sx={{ marginRight: '5px' }} /> add contact
      </AddContactButton> */}

      {/* {visibleContacts.length > 0 ? ( */}
      <ContactList />
      {/* ) : (
        <div>
          Your contact list is empty, click Add contact button to create yours
          first contact!
        </div>
      )} */}
      {isLoading && <Loader />}
      {error && <div>smth went wrong</div>}
    </Container>
  );
}

export default Contacts;
