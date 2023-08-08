import { useQuery } from 'react-query'
import { API } from './API'

export const useTypes = () => {
  let url = `${API.baseURL}/types`
  const fetchTypes = () =>
    fetch(`${url}`)
      .then((res) => res.json())
      .then<string[]>((res) => res.data)
  return useQuery('types', fetchTypes, { placeholderData: [] })
}
