import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, ThemeProvider, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BG from './assets/image/back.png'
import Blur from 'react-blur'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import confirm from './confirm.js';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
  palette: {
    primary: {
      light: '#14ffec',
      main: '#000000',
      dark: '#ffb',
      contrastText: '#000000',
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
    height: '100%',
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
    paddingTop: 1,
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
    top: '55%',
    left: '50%',
    margin: 0,
    padding: 0,
    },
  
 
  num: {
    width: 380,
    position: "absolute",
    borderRadius: 50,
    left: '50%', 
    textAlign: 'center',
    background: 'rgba(255,255,255,0.2)',
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

export default function SignUp() {
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
                  
                  <div style={{padding: 0, margin:0,}} >
                    <CheckCircleOutlinedIcon color="secondary" style={{ fontSize: '250%', paddingTop: 0, paddingRight: 0, color: '#2c2c2c', float: 'right', verticalAlign: 'middle',}}/>
                    <InputBase
                        type="number"
                        placeholder="شماره موبایل خود را وارد کنید"
                        autoFocus="true"
                        style={{ color: '#fff', paddingTop: 2, fontSize: "130%", float: 'right', verticalAlign: 'middle', paddingRight: 15,}}
                        color="secondary"
                        inputProps={{'aria-label': 'naked'}}
                     />
                  </div>
                  </Grid>
              </Grid>
              <Grid item xs={12}>
                <Router>

                   <Link to="/confirm" style={{textDecoration: 'none',}}>
                      <Button
                        variant="contained"
                        className={classes.button}
                        href="/confirm"
                            
                        >ورود
                      </Button>
                    </Link>
                    <Route path="/confirm">
                      <confirm />
                    </Route>
                            
                </Router>
                  
              </Grid>
            </form>
            <div style={{ position: 'absolute', background: 'rgba(0,0,0,0.2)', color: '#fff', width: '100%', height: '9%',  transform: "translate(-50%, -50%)", left: '50%', bottom: '-5%', textAlign: "center", margin: 0,}}>
                <p style={{lineHeight: '8vw', fontSize: '4vw'}}>Rose Mark © 2020</p>
            </div> 
          </Grid>
          
          
        </div>
        
     </ThemeProvider>     
    </Container>
    </Blur>

    
  );
}