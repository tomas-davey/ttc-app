// ForthPage.js
import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FloatyMan from './FloatyMan.png'; // Import the image
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        marginTop: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
          maxWidth: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
      },
      floatyMan: {
        maxWidth: '80%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
          // Adjustments for medium screens
          width: '100%', // Increase width
          display: 'none',
        },
      },
  formContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white, // Set font color to white
    maxWidth: '100%'
  },
  textField: {
    width: '80%',
    marginBottom: theme.spacing(2),
    '& .MuiInputLabel-root': {
      color: theme.palette.common.white, // Set label color to white
    },
    '& .MuiInputBase-input': {
      color: theme.palette.common.white, // Set input text color to white
    },
    '& .MuiInputBase-input::placeholder': {
      color: theme.palette.common.white, // Set placeholder text color to white
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.common.white, // Set border color to white
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.common.white,
    },
  },
  submitButton: {
    width: '80%',
    backgroundColor: 'blue',
    color: theme.palette.common.white, // Set text color to white
  },
  orEmailText: {
    marginTop: theme.spacing(2),
    color: theme.palette.common.white,
  },
  featureTitle: {
    fontSize: '8vw',
    fontWeight: 'bold',
    color: 'transparent',
    textAlign: 'left',
    '-webkit-text-stroke-width': '0.1vw',
    '-webkit-text-stroke-color': theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(-10),
    [theme.breakpoints.down('sm')]: {
      fontSize: '12vw',
      textAlign: 'center',
      marginTop: '0.5rem'
    },
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
}));

function ForthPage() {
  const classes = useStyles()
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    query: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  function sendEmail(e) {
    e.preventDefault(); 
    console.log(e.target)
    emailjs.sendForm('service_m2d9vap', 'template_0zdffdi', e.target, 'ilO9TO1mz6pZBd9Dc')
      .then((result) => {
        //   window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      sendEmail(event)

      setFormData({
        name: '',
        email: '',
        subject: '',
        query: '',
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Container sx={{ maxWidth:'100%'  }} maxWidth={false} className={`${classes.transparentBackground}`}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} className={classes.formContainer}>
            <img src={FloatyMan} alt="FloatyMan" className={classes.floatyMan} />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.formContainer}>
            <Paper elevation={0} className={`${classes.transparentBackground} ${classes.noBorder}`}>
            <Typography variant="h2" className={classes.featureTitle}>
            CONTACT US
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  className={classes.textField}
                  name="name"
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  className={classes.textField}
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                />
                 <TextField
                  label="Subject"
                  variant="outlined"
                  className={classes.textField}
                  name="subject"
                  value={formData.subject} 
                  onChange={handleInputChange} 
                />
                <TextField
                  label="Query"
                  variant="outlined"
                  multiline
                  minRows={4}
                  className={classes.textField}
                  name="query" 
                  value={formData.query}
                  onChange={handleInputChange} 
                />
                <Button type="submit" variant="contained" className={classes.submitButton}>
                  Submit
                </Button>
              </form>
              <Typography variant="body1" className={classes.orEmailText}>
                Or email us directly at tomstechconsultancy@gmail.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ForthPage;
