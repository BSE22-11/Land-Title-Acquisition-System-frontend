
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Container, Typography } from '@mui/material';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
// components
import Page from '../components/Page';


// ----------------------------------------------------------------------

export default function ProgressApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Application ID: AW82992H
        </Typography>
        
        <Typography variant="body1" gutterBottom>
        Address: Plot 6, Lweza, Kampala.
        </Typography>
        <Typography variant="body2" gutterBottom>
         Date Submitted: 25 Jun 2022
        </Typography>
        <br/>

      <Stack sx={{ width: '80%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Application submitted</AlertTitle>
        <strong>Application successfully </strong>submitted 
      </Alert>
      
      <Alert severity="warning">
        <AlertTitle>In Progress</AlertTitle>
        Your application has reached <strong>the ALC</strong>
      </Alert>
      <Alert severity="error">
        <AlertTitle>Incomplete application</AlertTitle>
        The ALC has found <strong>incomplete documents</strong>. Start a new application
      </Alert>
      
      <Alert severity="error">
        <AlertTitle>REJECTED!</AlertTitle>
        The land registrar has rejected <strong>your application</strong> because it is fradulent
      </Alert>
      <Alert severity="info">
        <AlertTitle>Congratulations</AlertTitle>
        Your <strong>land title is out</strong>
      </Alert>
      
    </Stack>


      </Container>
    </Page>
  );
}