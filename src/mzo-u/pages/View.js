
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

export default function ViewUploadForm() {

    // Form for uploading reports
  
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
  

  // view the application
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Application ID: AW5432L
        </Typography>
        
        <Typography variant="h6" gutterBottom>
        Name:
        </Typography>
        <Typography variant="body1" gutterBottom>
         Racheal Olive
        </Typography>
        <br/>

        <Typography variant="h6" gutterBottom>
        NIN:
        </Typography>
        <Typography variant="body1" gutterBottom>
         CF999YHB126
        </Typography>
        <br/>

        <Typography variant="h6" gutterBottom>
        Land Address:
        </Typography>
        <Typography variant="body1" gutterBottom>
         Plot 21, Kireka
        </Typography>
        <br/>

        <Typography variant="h6" gutterBottom>
        Village:
        </Typography>
        <Typography variant="body1" gutterBottom>
         1 acre
        </Typography>
        <br/>

        <Typography variant="h6" gutterBottom>
        District:
        </Typography>
        <Typography variant="body1" gutterBottom>
         CF999YHB126
        </Typography>
        <br/>

        <Typography variant="h6" gutterBottom>
        Land tenure system:
        </Typography>
        <Typography variant="body1" gutterBottom>
         Freehold
        </Typography>
        <br/>


        <Link to="/files/land-form19-freehold-offer.pdf" target="_blank" download>Land Form</Link>
        <br/>

        <Link to="/files/land-form19-freehold-offer.pdf" target="_blank" download>Passport photo</Link>
        <br/>

        <Link to="/files/land-form19-freehold-offer.pdf" target="_blank" download>Stamp duty</Link>
        <br/>
        <br/>

        <br />

        <Button variant="contained" type="submit">Accept</Button>
        <Button variant="contained" type="submit">Reject</Button>


      </Container>
    </Page>

  );

  // Form for uploading reports
  
 

}
