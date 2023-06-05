import * as yup from 'yup'

export default yup.object({
  nya: yup.string().required('Debe ingresar un nombre'),
  email: yup.string().email().required('Debe ingresar un email'),
  telefono: yup.number().required('Debe ingresar un telefono').positive().integer(),
});
