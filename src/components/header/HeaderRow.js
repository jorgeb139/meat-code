import React, { useState, useEffect } from 'react'
import { AppBar, makeStyles, Toolbar, IconButton, Icon } from '@material-ui/core/'
import { loadCSS } from 'fg-loadcss'

import { SocialNetworksItems } from '../../assets/dummyData/SocialNetworksItems'
import logo from '../../assets/meatcode-prueba-frontend/logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20
  },
  containerLogo: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      marginLeft: -20
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0
    }
  },
  logo: {
    maxWidth: '160px',
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.7)'
    },
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.85)'
    }
  },
  initialNavBar: {
    marginTop:20,
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
      marginTop:-5
    },
    [theme.breakpoints.down('sm')]: {
      marginTop:10
    }
  },
  activeNavBar: {
    marginTop:20,
    background: 'rgba(255, 255, 255, 0.8)',
    [theme.breakpoints.down('sm')]: {
      marginTop:-5
    },
    [theme.breakpoints.down('md')]: {
      marginTop:10
    }
  },
  socialNetworksContainer:{
    width: '150px',
    padding:'20px',
    margin:'20px',
  },
  iconButton: {
    margin: 15,
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.6)',
      margin: -5
    },
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.8)',
      margin: 5
    }
  }
}))

const HeaderRow = () => {
  const classes = useStyles()
  const [navBar, setNavBar] = useState(false)

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )

    return () => {
      node.parentNode.removeChild(node)
    }
  }, [])

  const changeBackground = () => {
    if (window.scrollY >= 260) {
      setNavBar(false)
    } else {
      setNavBar(true)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (  
    <div>
      <AppBar className={navBar ? classes.initialNavBar : classes.activeNavBar} elevation={0}>
        <Toolbar>
          <div className={classes.containerLogo}>
            <img src={logo} alt="logo" className={classes.logo}/>
          </div>
          <div>
            {SocialNetworksItems.map((item) => {
              const { pageURL, itemIcon, color, id } = item
              return (
                <IconButton
                  key={id}
                  style={{ color: color, border: `3px solid ${color}`}}
                  href={pageURL}
                  target='_blank'
                  className={classes.iconButton}
                >
                  <Icon
                    className={`${itemIcon}`}
                  />
                </IconButton>
              )
            })}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderRow
