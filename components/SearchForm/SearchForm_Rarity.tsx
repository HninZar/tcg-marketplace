import { useRarities } from '@/hooks/useRarities';
import { Select } from '@chakra-ui/react'
import { useField } from 'formik';

export const SearchForm_Rarity = () => {

  const { data } = useRarities();
  const [field] = useField('rarity');

  return (
    <Select
      {...field}
      placeholder="Rarity"
      color="#bcbbbb"
      backgroundColor="white"
      borderRadius="0px"
    >
      {data && data.map( raritie => (
        <option value={raritie} key={raritie}> {raritie}</option>
      ))}
    </Select>
  )
}
