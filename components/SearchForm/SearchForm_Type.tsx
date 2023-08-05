import { Select } from '@chakra-ui/react'

export const SearchForm_Type = () => {
  return (
    <Select
      placeholder="Type"
      color="#bcbbbb"
      backgroundColor="white"
      borderRadius="0px"
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  )
}
