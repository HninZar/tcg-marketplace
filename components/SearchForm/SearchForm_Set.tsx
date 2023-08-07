import { useSets } from '@/hooks/useSets'
import { Select } from '@chakra-ui/react'
import { useField } from 'formik';

export const SearchForm_Set = () => {
  
  const{data} = useSets();
  const [field] = useField('set');

  return (
    <Select
      {...field}
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
