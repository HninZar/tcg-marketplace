import { useSets } from '@/hooks/useSets'
import { Select } from '@chakra-ui/react'

export const SearchForm_Set = () => {
  
  const{data} = useSets();

  return (
    <Select
      placeholder="Set"
      color="#bcbbbb"
      backgroundColor="white"
      borderRadius="0px"
      borderRightRadius="50px"
    >
      {data && data.map( set =>
        <option value={set.id} key={set.id}> {set.name}</option>
      )}
    </Select>
  )
}
