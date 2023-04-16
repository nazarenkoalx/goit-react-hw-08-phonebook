import { useDispatch } from 'react-redux';
import { signUp } from 'redux/authSlice/operations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormWrapper, StyledForm } from 'components/Wrapper/FormWrapper.styled';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(2, 'Name should be minimum of 2 Chars')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

function SignUp() {
  const dispatch = useDispatch();
  const handleFormSubmit = ({ name, email, password }) => {
    dispatch(signUp({ name, email, password }));
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ name, email, password }) => {
      handleFormSubmit({ name, email, password });
    },
  });
  return (
    <FormWrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </StyledForm>
    </FormWrapper>
  );
}

export default SignUp;
