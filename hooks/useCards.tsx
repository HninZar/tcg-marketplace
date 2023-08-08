import { Card } from '@/data/Card'
import { useInfiniteQuery } from 'react-query'

type Response = {
  data: Card[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}
type Props = {
  name?: string
  type?: string
  rarity?: string
  set?: string
}

export const useCards = ({ name, type, rarity, set }: Props) => {
  let url = 'https://api.pokemontcg.io/v2/cards?pageSize=9'
  let query = ''

  if (name) {
    query += `name:${name}*`
  }

  if (type) {
    query += ` types:${type}`
  }

  if (rarity) {
    query += ` rarity:${rarity}`
  }

  if (set) {
    query += ` set.id:${set}`
  }

  if (query) {
    url += `&q=${query}`
  }

  const fetchCards = async ({ pageParam = 1 }) =>
    await fetch(`${url}&page=${pageParam}`).then<Response>((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      return response.json()
    })

  return useInfiniteQuery(
    ['cards', `${name}-${type}-${rarity}-${set}`],
    fetchCards,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.length > 0) {
          return lastPage.page + 1
        }
        return undefined
      },
    }
  )
}
