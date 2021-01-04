import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import c from '../assets/b1.jpg'
import Cardedit from './editableComponents/Cardedit'
import AppNavbar from '../components/AppNavbar'
import UserModel from '../components/UserModel'
import { CssBaseline } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:'100vh',
        backgroundImage:`url(${c})`,
        backgroundRepeat:"no-repeat",
              
    },
   
}))

function StartPage() {
const classes = useStyles();
    
  return (
      <>
     
    <div className={classes.root}>
        
      
  <Cardedit />
     
      <CssBaseline />
      
    </div>
    </>
  )
}

export default StartPage
