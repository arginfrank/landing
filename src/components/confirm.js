import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, ThemeProvider, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BG from '../assets/image/back.png'
import Blur from 'react-blur'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import ReactDOM from "react-dom";
import { Component } from 'react'; 
import ReactCodeInput from 'react-verification-code-input';
import PropTypes from 'prop-types';



const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
  palette: {
    primary: {
      light: '#14ffec',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#14ffec',
      main: '#000000',
      dark: '#ffb',
      contrastText: '#000000',
    },
    contrastThreshold: 3,    
    tonalOffset: 0.2,
  },

 
});

const useStyles = makeStyles(theme => ({
  paper: {
    height: '80%',
    width: '100%',
    left:0,
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    position: 'absolute',

  },
  bg: {
    height: '100vh',
    margin:0,
    padding:0,
    position: 'relative',
  },
  

  button: {
    borderRadius: 50,
    paddingLeft: '26%',
    paddingRight: '26%',
    paddingTop: 3.5,
    paddingBottom: 5,
    fontSize: '180%',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#2c2c2c',
    color: 'white',
    marginTop: "20%",
    marginRight: '12%',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
  },
  
  form: {
    height: 100,
    width: 300,
    direction: "rtl",
    position: 'absolute',
    alignContent: 'center',
    transform: "translate(-50%, -50%)",
    top: '70%',
    left: '50%',
    margin: 0,
    padding: 0,
    },
  
 
  num: {
    width: 300,
    position: "absolute",
    borderRadius: 50,
    left: '50%', 
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 6,
    paddingLeft: 0,
    transform: "translate(-50%, -50%)",
  },
  input: {
    color: 'white',
    backgroundColor: 'red',

  },

  
  
}));









export default function Confirm() {
  
  
  const classes = useStyles();

  return (

    <Blur img={BG} blurRadius={0} enableStyles className={classes.bg}>
      <Container component="main" maxWidth="xs" >
      <ThemeProvider theme={theme}>
        <div className={classes.paper} dir="rtl">       
          <Grid container spacing={0} maxWidth="xs">
            <form className={classes.form} noValidate>
              <Grid item xs={12} className={classes.num}>
                  <Grid item xs={12} sm={12} alignItems="center" style={{padding:0, margin: 0,}}>                  
                  
                  <div style={{padding: 0, margin:0, direction: "ltr", textAlign: "center",}}  >
                    
                  <InputBase
                     type="number"
                     autoFocus="true"
                     style={{ width: 32, color: '#ffffff',  fontSize: "185%", verticalAlign: 'middle', paddingLeft:7, borderBottom: 'solid #2b2b2b 0.4rem', textAlign: 'center', margin: 3.5}}
                     
                  />
                  <InputBase
                  type="number"
                  autoFocus="true"
                  style={{ width: 32, color: '#ffffff',  fontSize: "185%", verticalAlign: 'middle', paddingLeft:7, borderBottom: 'solid #2b2b2b 0.4rem', textAlign: 'center', margin: 3.5,}}
                  
               />
                  </div>
                  </Grid>
              </Grid>
              <Grid item xs={12}>

                      <Button
                        variant="contained"
                        className={classes.button}
                        href="/confirm">تایید کد</Button>
                  
              </Grid>
            </form>
            <div style={{ position: 'absolute', background: 'rgba(0,0,0,0.2)', color: '#fff', width: '100%', height: '9%',  transform: "translate(-50%, -50%)", left: '50%', bottom: '-29.5%', textAlign: "center", margin: 0,}}>
                <p style={{lineHeight: '185%', fontSize: '90%',}}>Rose Mark © 2020</p>
            </div> 
          </Grid>
          
          
        </div>
        
     </ThemeProvider>     
    </Container>
    </Blur>

    
  );
}
