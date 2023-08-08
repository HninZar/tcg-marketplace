import { useQuery } from 'react-query'
import { API } from './API'

export const useRarities = () => {
  let url = `${API.baseURL}/rarities`
  const fetchRarities = () =>
    fetch(`${url}`)
      .then((res) => res.json())
      .then<string[]>((res) => res.data)

  return useQuery('rarities', fetchRarities, { placeholderData: [] })
}
