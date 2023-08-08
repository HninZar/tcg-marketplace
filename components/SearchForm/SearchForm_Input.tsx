import { Input } from '@chakra-ui/react'
import { useField } from 'formik'

export const SearchForm_input = () => {
  const [field] = useField('name')
  return (
    <Input
      {...field}
      placeholder="Name.."
      backgroundColor="white"
      borderRadius={{ base: '100px', lg: '50px 0px 0px 50px' }}
    />
  )
}
