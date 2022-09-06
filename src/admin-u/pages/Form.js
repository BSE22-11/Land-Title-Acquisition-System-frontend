
// @mui
import * as Yup from 'yup';
import { useState } from 'react';
import { Router, useNavigate,Link } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography ,TextField , Button } from '@mui/material';
// components
import Page from '../components/Page';

import { FormProvider, RHFTextField } from '../components/hook-form';


// ----------------------------------------------------------------------

export default function AdduserForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Add a new user
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <TextField name="name" label="Name" variant="outlined" />
          <br />
          <br />

          <TextField name="nin" label="NIN" variant="outlined" />
          <br />
          <br />

          <TextField name="idn" label="ID number" variant="outlined" />
          <br />
          <br />

          <TextField name="district" label="District" variant="outlined" />
          <br />
          <br />

          <TextField name="role" label="Role" variant="outlined" />
          <br />
          <br />
          <TextField name="password" label="Password" variant="outlined" />
          <br />
          <br />

          <Button
            containerElement='label' // <-- Just add me!
            label='My Label'>
            <input type="file" />
          </Button>

          <br />
          <br />

          <Button variant="contained"  type="submit">Submit</Button>


        </FormProvider>

        
      </Container>
    </Page>
  );
}
