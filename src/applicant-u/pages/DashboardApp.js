
// @mui
import * as Yup from 'yup';
import * as React from 'react';
import { useState } from 'react';
import { Router, useNavigate,Link } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography ,TextField , Button } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// components
import Page from '../components/Page';

import { FormProvider, RHFTextField } from '../components/hook-form';


// ----------------------------------------------------------------------

export default function TitleapplyForm() {
  const [tenure, setTenure] = React.useState('');

  const handleChange = (event) => {
    setTenure(event.target.value);
  }
  
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
          Apply for a land title
        </Typography>
        
        
        <Typography variant="body1" sx={{ mb: 5 }}>
          Download the land form for your land tenure system
        </Typography>
        <Link to="/files/land-form8-application-for-a-leasehold-from-dlb.pdf" target="_blank" download>LeaseHold</Link>
        <br/>
        <Link to="/files/land-form19-freehold-offer.pdf" target="_blank" download>Freehold</Link>
        
        <br/><br/>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          
          <InputLabel name="tenure">Select Land tenure system</InputLabel> <br/>
          <Select
            name="tenure" 
            label="Land tenure system"
            value={tenure}
            onChange={handleChange} >
            <MenuItem value={"Freehold"}>Freehold</MenuItem>
            <MenuItem value={"Leasehold"}>Leasehold</MenuItem>
          </Select>
          

          <br />
          <br />
          <TextField name="land" label="Land address" variant="outlined" required/>
          <br />
          <br />
          <TextField name="village" label="Village" variant="outlined" required/>
          <br />
          <br />
          <TextField name="district" label="District" variant="outlined" required/>
          <br />
          <br />
          
          <Typography variant="body1" sx={{ mb: 5 }}>
          Upload filled in land form
          </Typography>
          
          <Button
            containerElement='label' // <-- Just add me!
            label='My Label'>
            <input type="file" required/>
          </Button>

          <br/>
          <br/>
          <Typography variant="body1" sx={{ mb: 5 }}>
          Upload passport photo
          </Typography>
          
          <Button
            containerElement='label' // <-- Just add me!
            label='My Label'>
            <input type="file" required/>
          </Button>

          <br/>
          <br/>
          <Typography variant="body1" sx={{ mb: 5 }}>
          Upload stamp duty receipt
          </Typography>
          
          <Button
            containerElement='label' // <-- Just add me!
            label='My Label'>
            <input type="file" required/>
          </Button>

          <br />
          <br />

          <Button variant="contained"  type="submit">Submit</Button>


        </FormProvider>

        
      </Container>
    </Page>
  );
}
