import { SubmitButton } from 'components/ContactForm/ContactForm.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/authSlice/operations';

function SignUp() {
  const dispatch = useDispatch();
  const handleFormSubmit = ({ name, email, password }) => {
    dispatch(signUp({ name, email, password }));
  };
  return (
    <Formik
      initialValues={{
        name: '',
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
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          id={nanoid()}
          name="name"
          placeholder="Joe Biden"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
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

export default SignUp;
