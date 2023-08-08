import { useFormikContext } from 'formik'
import { useEffect } from 'react'

export const SearchForm_AutoSubmit = () => {
  // Grab values and submitForm
  const { values, submitForm } = useFormikContext()
  useEffect(() => {
    // Submit the form
    submitForm()
  }, [values, submitForm])
  return null
}
