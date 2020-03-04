import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Blur from 'react-blur'
import Group from '../assets/image/Group.svg'
import Group2 from '../assets/image/Group2.svg'
import AppleIcon from '@material-ui/icons/Apple';
import Vislogo from '../assets/image/logo.svg';
import Rose from '../assets/image/ROSE.svg';
import Mark from '../assets/image/MARK.svg';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

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
    marginTop: '5vw',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    direction: 'ltr',
    position: 'absolute',

  },
  bg: {
    height: '100vh',
    margin:0,
    padding:0,
    position: 'relative',
    backgroundColor: '#070705',
  },
  savetime: {
    width:'100%',
    margin: '8.5vh auto',

  },
  savepic: {
    width: '66vw',
    maxHeight: '81.5vh', 
    margin: '0 auto',
    paddingLeft: '12.5vw',
  },
  aboutus: {
    width:'100%',
    paddingTop: '2.2vh',
    paddingBottom: '0.001%',
    margin: '-8.9vh auto',
    backgroundColor: '#151515',
    border: '0.08vw solid #d4c8b2'

  },
  aboutuspic: {
    width: '66vw',
    maxHeight: '80vh', 
    margin: '0 auto 0',
    paddingLeft: '12.5vw',
  }, 
  rose: {
    width:'50%',
    height: '50.5vh',
    marginTop: '8.9vh',
    marginLeft:0,
    marginRight:0,
    marginBottom:0,
    padding:0,
    backgroundColor: '#151515',
    float: 'left',

  },
  rosepic: {
    height: '40vh',
    width: '25vw',
    margin: '0',
    paddingTop: '5vh',
    paddingLeft: '12.5vw',
  },
  mark: {
    width:'50%',
    height: '50.5vh',
    marginTop: '8.9vh',
    marginLeft:0,
    marginRight:0,
    marginBottom:0,
    padding: 0,
    backgroundColor: '#000000',
    float:"right",

  },
  markpic: {
    height: '40vh',
    width: '25vw',
    margin: '0',
    paddingTop: '5vh',
    paddingLeft: '12.5vw',
  },

  button: {
    minWidth: 10,
    borderRadius: '1vh',    
    paddingTop: '1.1vh',
    paddingBottom: '0.8vh',
    paddingLeft: '0.1vw',
    paddingRight: '0.8vw',
    fontSize: 'calc(11px + .5vw)',
    letterSpacing: 0,
    verticalAlign: 'middle',
    backgroundColor: '#e5c4a3',
    marginTop: "11.5vh",
    fontWeight: 600,
    color: 'black',
    marginRight: '20%',
    textAlign:'center',
  },
  buttondiv: {
    textAlign: 'center',
    marginRight: '20vw',
    position: 'absolute',
    top: '0vh',
    left: '65%',
    transform: "translate(-50%, -50%)",
    float:'right',
    direction:'rtl'

  },
 logodiv: {
   textAlign: 'left',
   position: 'absolute',
   transform: "translate(-50%, -50%)",
   top: '5.2vh',
   left: '50vw',
   float:'left',
  },
  logo: {
    maxWidth: '25vw',
    maxHeight: '10vw'
    height: '10vh',
    marginLeft: '5vw',
  },

 
  button2: {
    position: 'absolute',
    transform: "translate(-50%, -50%)",
    left: '35%',
    top: '65%',
    borderRadius: '1.5vw',    
    paddingTop: '0.9%',
    paddingBottom: '0.6%',
    paddingLeft: '2%',
    paddingRight: '2%',
    fontSize: 'calc(100px + 4.5vw)',
    letterSpacing: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#e5c4a3',
    marginRight: '10vw',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    color: 'black',
  },
 
  button2div: {
    textAlign: 'right',
    marginLeft: '20vw',
    backgroundColor: 'red',

  },
  
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <Blur blurRadius={0} enableStyles className={classes.bg}>
      <Container component="main">
      <ThemeProvider theme={theme}>
        <div className={classes.paper} dir="ltr">       
          <Grid container spacing={0} >
            <Grid container className={classes.logodiv}>
              <img src={Vislogo} style={{fontSize:'calc(22px + .5vw)', paddingTop:0, paddingLeft:0, marginTop:'-10%', marginRight: '15%', marginLeft: '0%'}} alt="logo" className={classes.logo}></img>
            </Grid>
            <Grid container className={classes.buttondiv}>
            <Button
              endIcon={<AppleIcon style={{fontSize:'calc(22px + .5vw)', paddingTop:0, paddingLeft:0, marginTop:'-10%', marginRight: '15%', marginLeft: '0%', color:'black',}}/>}
              variant="contained"
              className={classes.button}
              href ="http://app.rosemark.co/"
            >
              PWA DEMO
            </Button>
            </Grid>
            <Grid container className={classes.savetime}>
                  <img src={Group} alt="Save Your Time" className={classes.savepic}></img>
            </Grid>
            <a href="https://www.google.com/" style={{width: '100%',}}>
              <Grid container className={classes.aboutus}>
                    <img src={Group2} alt="More about us?" className={classes.aboutuspic}></img>                 
              </Grid>            
            </a>
            <Grid item className={classes.rose}>
                  <img src={Rose} alt="Rose" className={classes.rosepic}></img>
            </Grid>
            <Grid item className={classes.mark}>
                  <img src={Mark} alt="Mark" className={classes.markpic}></img>
            </Grid>            
          </Grid>
          
          
        </div>
        
     </ThemeProvider>     
    </Container>
    </Blur>

    
  );
}