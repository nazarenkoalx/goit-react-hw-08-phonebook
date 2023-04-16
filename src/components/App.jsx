import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from './Loading/Loading';
import Contacts from 'pages/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/authSlice/operations';
import { selectIsFetchingCurrentUser } from 'redux/authSlice/selectors';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Landing = lazy(() => import('../pages/Landing'));
const Login = lazy(() => import('../pages/Login'));
const SignUp = lazy(() => import('../pages/SignUp'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          {/* <Route path="contacts/:id" element={<MovieDetails />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
