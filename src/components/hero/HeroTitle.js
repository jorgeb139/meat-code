import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

import heroShape from '../../assets/meatcode-prueba-frontend/hero-shape.png'

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    zIndex: 0,
    marginTop: '-450px',
    maxWidth: '480px',
    marginLeft:'8%'
  },
  title: {
    '@media (max-width:880px)': {
      fontSize: '100px',
      lineHeight: '90px',
    },
    '@media (max-width:550px)': {
      fontSize: '80px',
      lineHeight: '70px',
      marginTop: '0vh'
    }
  },
  shape: {
    zIndex: -1,
    position: 'absolute',
    width:'100%',
    height: 134,
    marginLeft: '-50%',
    marginTop: '-56px',
    transform: 'rotate(2.4deg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${heroShape})`,
    '@media (max-width:880px)': {
      width:'150%',
      height:'120px',
      marginLeft: '-80%',
    },
    '@media (max-width:550px)': {
      width:'180%',
      height:'100px',
      marginLeft: '-110%',
    }
  }
}))

const HeroTitle = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={5} sm={6} className={classes.titleContainer}>
        <Typography variant='h1' className={classes.title}>
          El secreto de tu cocina
        </Typography>
        <div className={classes.shape}/>
      </Grid>
    </Grid>
  )
}

export default HeroTitle
