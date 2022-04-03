import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));



const Backdropspin = () => {
    
    const classes = useStyles();
      
    return (
        <div>
      <Backdrop className={classes.backdrop}
      open > 
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    );
};

export default Backdropspin;