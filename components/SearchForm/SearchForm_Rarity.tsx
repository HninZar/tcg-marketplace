import { useRarities } from '@/hooks/useRarities';
import { Select } from '@chakra-ui/react'

export const SearchForm_Rarity = () => {

  const { data } = useRarities();

  return (
    <Select
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
