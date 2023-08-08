import { useQuery } from 'react-query'
import { API } from './API'

type Set = {
  id: string
  name: string
}
export const useSets = () => {
  let url = `${API.baseURL}/sets`
  const fetchSets = () =>
    fetch(`${url}`)
      .then((res) => res.json())
      .then<Set[]>((res) => res.data)
  return useQuery('sets', fetchSets, { placeholderData: [] })
}
