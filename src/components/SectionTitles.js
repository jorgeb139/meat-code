import React from 'react'
import {
  Typography, 
  makeStyles,
  Grid
} from '@material-ui/core'

import headingShape from '../assets/meatcode-prueba-frontend/heading-shape.png'

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${headingShape})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: 145,
    opacity: 0.2,
    zIndex: -1
    
  },
  title: {
    marginTop: '-145px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 70
    }
  }
}))

const SectionTitles = ({textTitle}) => {
  const classes = useStyles()

  return (
    <Grid container style={{justifyContent:'center'}}>
      <Grid item xs={12} className={classes.background}/>
      <Typography variant='h2' className={classes.title}>
        {textTitle}
      </Typography>
    </Grid>
  )
}

export default SectionTitles
