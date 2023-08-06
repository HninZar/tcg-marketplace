import { useTypes } from '@/hooks/useTypes'
import { Select } from '@chakra-ui/react'

export const SearchForm_Type = () => {
  
  const {data} = useTypes();

  return (
    <Select
      placeholder="Type"
      color="#bcbbbb"
      backgroundColor="white"
      borderRadius="0px"
    >
      {data && data.map( type =>
        <option value={type} key={type}> {type}</option>
      )}
    </Select>
  )
}
