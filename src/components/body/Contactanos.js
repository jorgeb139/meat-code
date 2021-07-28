import React, { useState, useEffect } from 'react'
import {
  Grid,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

import ButtonTemplate from '../ButtonTemplate'
import SectionTitles from '../SectionTitles'
import ValidationSchema from '../../services/ValidationSchema'

const listOfFields = 'formFields.json'
const marginValue = '11.8px'

const newsletterURL = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter'

const useStyles = makeStyles(() => ({
  textFieldContainer: {
    padding: `10px ${marginValue}`
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 0,
    }
  },
  buttonContainer: {
    padding: `20px ${marginValue}`
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

const Contactanos = () => {
  const classes = useStyles()
  const [fields, setFields] = useState([])
  const [register, setRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    (async () => {
      const elements = await axios.get(listOfFields)
      setFields(elements.data)
    })()
  }, [])

  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: 'onChange'
  })

  const handleInputChange = (e) => {
    setRegister({
      ...register,
      [e.target.name] : e.target.value,
    })
  }

  const onSubmit = async(values) => {
    try {
      await axios.post(newsletterURL, register)
      Swal.fire({
        title: '¡Te has registrado con éxito!',
        text: 'Recibirás todas las novedades y beneficios únicos',
        icon: 'success',
        confirmButtonText: 'Excelente'
      })
      reset({})
      setRegister({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Grid container style={{ marginTop: 100 }}>
      <SectionTitles textTitle='Contáctanos'/>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            {fields.map((element) => {
              const uppercaseTitle = element.title.toUpperCase()
              const nombre = element.name
              return(
                <Controller        
                  key={element.id}
                  name={nombre}
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <Grid item xs={12} sm={6} className={classes.textFieldContainer}>
                      <Typography variant='subtitle1'>
                        {uppercaseTitle}
                      </Typography>
                      <TextField
                        {...field}
                        type = { field.type }
                        variant = 'outlined'
                        id = { field.id }
                        fullWidth
                        className={classes.textField}
                        error={!!errors[nombre]}
                        helperText={errors[nombre] ? errors[nombre]?.message : ''}
                        onChange={handleInputChange}
                        value={register[nombre]}
                      />
                    </Grid>
                  )}
                />
              )
            })}
          </Grid>
          <Grid container justifyContent='flex-end' className={classes.buttonContainer}>
          <ButtonTemplate textButton='ENVIAR'/>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  )
}

export default Contactanos
