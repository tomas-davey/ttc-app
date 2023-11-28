// ForthPage.js
import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import FloatyMan from './FloatyMan.png'; // Import the image
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    container: {
        // paddingLeft: '5%',
        // paddingRight: '5%',
        marginLeft: 'auto',
        marginRight: 'auto', // Center the container horizontally
        maxWidth: '1400px',
      },
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
        height: 'auto',    // Allow the height to be determined by the container
        width: '100%',     // Fill the entire width of the container
        minWidth: '200px',
        maxWidth: '1000px',
        objectFit: 'cover',  // Set a minimum width (adjust as needed)
        [theme.breakpoints.down('sm')]: {
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
      fontSize: '1.3rem'
    },
    '& .MuiInputBase-input': {
      color: theme.palette.common.white, // Set input text color to white
      fontSize: '1.3rem'
    },
    '& .MuiInputBase-input::placeholder': {
      color: theme.palette.common.white, // Set placeholder text color to white
      fontSize: '1.3rem'
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
    fontSize: '1.3rem',
    marginTop: theme.spacing(2),
    color: theme.palette.common.white,
  },
  featureTitle: {
    textAlign: 'center',
    fontSize: '6rem',
    fontWeight: 'bold',
    color: 'transparent',
    '-webkit-text-stroke-width': '0.1vw',
    '-webkit-text-stroke-color': theme.palette.common.white,
    // marginBottom: theme.spacing(4),
    // marginTop: theme.spacing(-10),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '13vw',
    },
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underlineInput: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderWidth: '0 0 2px 0', // Only bottom border
      },
      '&:hover fieldset': {
        borderColor: theme.palette.common.white, // Change color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main, // Change color when focused
      },
    },
  },
  stepsContainer: {
    textAlign: 'center',
    color: theme.palette.common.white, // Set text color to white
  },
  stepTitle: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  stepItem: {
    marginBottom: theme.spacing(2),
    fontSize: '1.2rem',
  },
}));

const Steps = () => {
  const classes = useStyles();

  return (
    <div className={classes.stepsContainer}>
    <Typography variant="h5" className={classes.stepTitle}>Follow These Steps:</Typography>
    <Typography variant="h6" className={classes.stepItem}>- Book a free 1 on 1 initial consulting session by emailing us a time that works for you.</Typography>
    <Typography variant="h6" className={classes.stepItem}>- We learn, understand and create the technology you need.</Typography>
    <Typography variant="h6" className={classes.stepItem}>- The technology improves your business</Typography>
  </div>
  );
};

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
      <Container sx={{ maxWidth:'100%'  }} maxWidth={false} className={`${classes.transparentBackground} ${classes.container}`}>
            <Typography variant="h2" className={classes.featureTitle}>
            CONTACT US
            </Typography>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={5} className={classes.imageContainer}>
            {/* <img src={FloatyMan} alt="FloatyMan" className={classes.floatyMan} /> */}
            <Steps />

          </Grid>
          <Grid item xs={12} sm={7} className={classes.formContainer}>
            <Paper elevation={0} className={`${classes.transparentBackground} ${classes.noBorder}`}>
            <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  className={`${classes.textField} ${classes.underlineInput}`} 
                  name="name"
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  className={`${classes.textField} ${classes.underlineInput}`} 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                />
                 <TextField
                  label="Subject"
                  variant="outlined"
                  className={`${classes.textField} ${classes.underlineInput}`} 
                  name="subject"
                  value={formData.subject} 
                  onChange={handleInputChange} 
                />
                <TextField
                  label="Query"
                  variant="outlined"
                  multiline
                  minRows={4}
                  className={`${classes.textField} ${classes.underlineInput}`} 
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
