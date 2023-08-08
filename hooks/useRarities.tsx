import { useQuery } from 'react-query'

export const useRarities = () => {
  const fetchRarities = () =>
    fetch('https://api.pokemontcg.io/v2/rarities')
      .then((res) => res.json())
      .then<string[]>((res) => res.data)

  return useQuery('rarities', fetchRarities, { placeholderData: [] })
}
