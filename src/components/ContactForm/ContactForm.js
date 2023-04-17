import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice/operations';
import { selectContacts } from 'redux/contactSlice/selectors';
import { notifyError, notifySuccess } from 'services/notifications';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { StyledForm } from 'components/Wrapper/FormWrapper.styled';
import { ButtonWrapper, ContactsFormWrapper } from './ContactForm.styled';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  number: yup
    .string('Enter your number')
    .min(8, 'Number should be of minimum 8 characters length')
    .required('Number is required'),
});

export function ContactForm({ showModal }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = ({ name, number }) => {
    const doubleName = contacts.contactsArr.find(contact => {
      return contact.name === name;
    });

    const doubleNumber = contacts.contactsArr.find(contact => {
      return contact.number === number;
    });

    if (doubleName) {
      return notifyError('Contact with this name already exists');
    }

    if (doubleNumber) {
      return notifyError(
        `Contact with this number already exists, check ${doubleNumber.name} contact`
      );
    }
    if (!doubleName && !doubleNumber) {
      notifySuccess(
        `Contact ${name} was successfully added to yours contact book`
      );
      dispatch(addContact({ name, number }));
      showModal();
    }
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ name, number }) => {
      handleFormSubmit({ name, number });
    },
  });
  return (
    <ContactsFormWrapper>
      <Typography component="h2">Add contact</Typography>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.name)}
          helperText={formik.touched.email && formik.errors.name}
        />
        <TextField
          id="number"
          name="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <ButtonWrapper>
          <Button
            color="primary"
            variant="contained"
            type="button"
            onClick={showModal}
          >
            close
          </Button>
          <Button color="primary" variant="contained" type="submit">
            add contact
          </Button>
        </ButtonWrapper>
      </StyledForm>
    </ContactsFormWrapper>
  );
}

ContactForm.propTypes = {
  showModal: PropTypes.func,
};
