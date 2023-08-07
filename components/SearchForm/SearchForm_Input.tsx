import { Input } from '@chakra-ui/react'
import { useField } from 'formik'

export const SearchForm_input = () => {

  const [field] = useField('name');
  return (
    <Input
      {...field}
      placeholder="Name.."
      backgroundColor="white"
      borderRadius="0px"
      borderLeftRadius="50px"
    />
  )
}
