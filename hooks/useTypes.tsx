import { useQuery } from 'react-query'

export const useTypes = () => {
  const fetchTypes = () =>
    fetch('https://api.pokemontcg.io/v2/types')
      .then((res) => res.json())
      .then<string[]>((res) => res.data)
  return useQuery('types', fetchTypes, { placeholderData: [] })
}
