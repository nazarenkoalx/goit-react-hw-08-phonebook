// import { useEffect } from 'react';
// import { ContactList } from './ContactList/ContactList';
// import 'react-toastify/dist/ReactToastify.css';
// import { selectContacts, selectVisibleContacts } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contactSlice/operationsContacts';
// import { ToastContainer } from 'react-toastify';
// import { Filter } from './Filter/Filter';
// import { Container } from './Container/Container.styled';
// import { ContactForm } from './ContactForm/ContactForm';
//

import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from './Loading/Loading';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Landing = lazy(() => import('../pages/Landing'));
const Login = lazy(() => import('../pages/Login'));
const SignUp = lazy(() => import('../pages/SignUp'));

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Landing />} />
          {/* <Route path="contacts/:id" element={<MovieDetails />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

// export function App() {
//   const dispatch = useDispatch();
//   const { isLoading, error } = useSelector(selectContacts);
//   const visibleContacts = useSelector(selectVisibleContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <>
//       <Container>
//         {isLoading && <Loading />}
//         <ContactForm />
//         <Filter />
//         {visibleContacts.length > 0 ? (
//           <ContactList />
//         ) : (
//           <div>your cont list is empty</div>
//         )}
//         {error && <div>smth went wrong</div>}
//       </Container>
//       <ToastContainer />
//     </>
//   );
// }
