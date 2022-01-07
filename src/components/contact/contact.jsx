import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

import { ContactWrapper } from './contact.styled';
import { Field, Form, Formik } from 'formik';

const Contact = () => {
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
    <ContactWrapper enableReinitialize>
      <Formik
        initialValues={initialFormValues}
        validationSchema={contactSchema}
        onSubmit={sendEmail}
        enableReinitialize
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form ref={form}>
            <div>
              <label htmlFor='from_name'>Name</label>
              <Field
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
            </div>
            <div>
              <label htmlFor='from_email'>Email</label>
              <Field
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
            </div>
            <div>
              <label htmlFor='telephone'>Telephone</label>
              <Field
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
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && (
                <div className='error'>{errors.message}</div>
              )}
            </div>
            <button type='submit' variant='contained'>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </ContactWrapper>
  );
};

export default Contact;
