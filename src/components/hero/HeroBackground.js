import React from 'react'
import { makeStyles } from '@material-ui/core'

import heroBackground from '../../assets/meatcode-prueba-frontend/hero-background.jpg'

const useStyles = makeStyles(() => ({
  bannerBackground: {
    zIndex: -1,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${heroBackground})`
  },
  bannerBottom: {
    position: 'absolute',
    top: '60vh',
    '@media (min-height:640px)': {
      top: '65vh'
    },
    height: '253px',
    width: '100%',
    background: 'linear-gradient(0deg, #FFFFFF 32.22%, rgba(255, 255, 255, 0.71) 61.99%, rgba(255, 255, 255, 0.0729167) 93.72%, rgba(255, 255, 255, 0) 93.72%)'
  }
}))

const BannerItem = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.bannerBackground} />
      <div className={classes.bannerBottom} />
    </>
  )
}

export default BannerItem
