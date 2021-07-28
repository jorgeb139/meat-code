import * as yup from 'yup'

const ValidationSchema = yup.object().shape({
  firstname: yup.string()
    .matches(/[a-zA-Z]/, 'Solo puede contener letras latinas.')
    .required('El campo es requerido')
    .min(3, 'Debe tener un mínimo de 3 caracteres')
    .max(20, 'Debe tener un máximo de 20 caracteres'),
  lastname: yup.string()
    .matches(/[a-zA-Z]/, 'Solo puede contener letras latinas.')
    .required('El campo es requerido')
    .min(3, 'Debe tener un mínimo de 3 caracteres')
    .max(20, 'Debe tener un máximo de 20 caracteres'),
    email: yup.string()
    .matches(/^\S*$/, 'No puede contener espacios en blanco.')
    .required('El campo es requerido')
    .min(6, 'Debe tener un mínimo de 6 caracteres')
    .email('Debe ser un email válido')
    .max(20, 'Debe tener un máximo de 20 caracteres'),
  phone: yup.string()
    .matches(/[0-9]/, 'Solo puede contener números.')
    .required('El campo es requerido')
    .min(7, 'Debe tener mínimo de 7 números')
    .max(12, 'Debe tener un máximo de 12 números')
})

export default ValidationSchema