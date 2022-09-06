import { Link as RouterLink, Link } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';


// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default function landTitles() {
  return (
    
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Application: ANT7297W
            </Typography>
            <Typography variant="body1" color="text.secondary">
              25 Jun 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PLot 36, Lweza, Kampala.
            </Typography>
          </CardContent>
          <CardActions>
          <Link to="/files/land-form19-freehold-offer.pdf" target="_blank" download><Button size="small">Download land title</Button></Link>
          </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Application: ANT7297W
            </Typography>
            <Typography variant="body1" color="text.secondary">
              25 Jun 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PLot 36, Lweza, Kampala.
            </Typography>
          </CardContent>
          <CardActions>
          <Link to="/files/land-form19-freehold-offer.pdf" target="_blank" download><Button size="small">Download land title</Button></Link>
          </CardActions>
          </Card>
  </Grid>
  </Container>
  </Page>


  
  );
}
