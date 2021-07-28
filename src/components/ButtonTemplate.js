import React from 'react'
import {
  Button, 
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px 25%',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 15%',
    }
  }, 
  button: {
    background: '#D8AD3D',
    height: 55,
    width: 170,
    borderRadius: 50,
    '&:hover': {
      background: '#009CD9',
      transition: 'all 0.5s ease 0s',
    },
    transition: 'all 0.5s ease 0s'
  }
}))

const ButtonTemplate = ({textButton}) => {
  const classes = useStyles()

  return (
    <Button type='submit' variant='contained' className={classes.button}>
      {textButton}
    </Button>
  )
}

export default ButtonTemplate