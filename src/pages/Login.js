import { SubmitButton } from 'components/ContactForm/ContactForm.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authSlice/operations';

function Login() {
  const dispatch = useDispatch();
  const handleFormSubmit = ({ email, password }) => {
    // console.log(email, password);
    dispatch(logIn({ email, password }));
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        handleFormSubmit({ ...values });
        actions.resetForm();
      }}
      //   validationSchema={ContactsSchema}
    >
      <Form>
        <ErrorMessage name="name" component="span" />
        <label htmlFor="email">email</label>
        <Field
          type="email"
          id={nanoid()}
          name="email"
          placeholder="my@email.com"
          title="type valid email"
        />
        <ErrorMessage name="email" component="span" />
        <label htmlFor="password">password</label>
        <Field
          type="password"
          id={nanoid()}
          name="password"
          placeholder="**************"
          title="type your password"
        />
        <ErrorMessage name="email" component="span" />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
    </Formik>
  );
}

export default Login;
