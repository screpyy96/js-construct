import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

import { ContactWrapper, SendBtn, StyledBox } from './contact.styled';
import { Form, Formik } from 'formik';
import { Typography } from '@material-ui/core';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
  };

  const [str, setStr] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        'service_ys07ooc',
        'template_y6qkepf',
        form.current,
        'user_Zdj4p9NrBtz9chD2ILe0c',
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('sent');
          setStr(e.from_email);
          setStr('');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  console.log(str);
  const contactSchema = Yup.object().shape({
    from_name: Yup.string().required('required').min(2),
    from_email: Yup.string().email('Invalid email').required('required'),
    message: Yup.string().required('required').min(2),
    telephone: Yup.number().required('required').min(10),
  });

  const initialFormValues = {
    from_name: '',
    from_email: '',
    message: '',
    telephone: '',
  };

  return (
    <ContactWrapper>
      <Typography variant='h4' align='center'>
        Contact Us
      </Typography>
      <Formik
        initialValues={initialFormValues}
        validationSchema={contactSchema}
        onSubmit={sendEmail}
        enableReinitialize
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form ref={form}>
            <StyledBox>
              <TextField
                // helperText='Please enter your name'
                label='Name'
                type='text'
                name='from_name'
                id='from_name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.from_name}
              />
              {errors.from_name && touched.from_name && (
                <div className='error'>{errors.from_name}</div>
              )}
            </StyledBox>
            <StyledBox>
              <TextField
                // helperText='Please enter your email'
                label='Email'
                type='email'
                name='from_email'
                id='from_email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.from_email}
              />
              {errors.from_email && touched.from_email && (
                <div className='error'>{errors.from_email}</div>
              )}
            </StyledBox>
            <StyledBox>
              <TextField
                // helperText='Please enter your phone number'
                label='Telephone'
                type='text'
                name='telephone'
                id='telephone'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telephone}
              />
              {errors.telephone && touched.telephone && (
                <div className='error'>{errors.telephone}</div>
              )}
            </StyledBox>
            <StyledBox>
              <TextField
                // helperText='Please enter your message'
                label='Message'
                name='message'
                id='message'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                size='big'
              />
              {errors.message && touched.message && (
                <div className='error'>{errors.message}</div>
              )}
            </StyledBox>
            <SendBtn>
              <LoadingButton
                type='submit'
                onClick={handleClick}
                loading={isLoading}
                endIcon={<SendIcon />}
                loadingPosition='end'
                variant='contained'
              >
                Send
              </LoadingButton>
            </SendBtn>
          </Form>
        )}
      </Formik>
    </ContactWrapper>
  );
};

export default Contact;
