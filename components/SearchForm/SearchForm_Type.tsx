import { useTypes } from '@/hooks/useTypes'
import { Select } from '@chakra-ui/react'
import { useField } from 'formik'

export const SearchForm_Type = () => {
  const { data } = useTypes()
  const [field] = useField('type')

  return (
    <Select
      {...field}
      placeholder="Type"
      color="#bcbbbb"
      backgroundColor="white"
      borderRadius={{ base: '100px', lg: '0px' }}
    >
      {data &&
        data.map((type) => (
          <option value={type} key={type}>
            {' '}
            {type}
          </option>
        ))}
    </Select>
  )
}
