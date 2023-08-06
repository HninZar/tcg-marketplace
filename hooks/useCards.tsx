import { Card } from '@/data/Card';
import { useInfiniteQuery } from 'react-query'

type Response = {
    data: Card[];
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
  }

export const useCards = () => {

    const fetchCards = ({ pageParam = 1 }) => 
     fetch(`https://api.pokemontcg.io/v2/cards?pageSize=9&page=${pageParam}`)
     .then(res => res.json())
     .then<Response>(res => res) 

    return useInfiniteQuery(['cards'], fetchCards,  {
        getNextPageParam: (lastPage) => {
            //console.table(lastPage)
            if (lastPage.data.length > 0) {
                return lastPage.page + 1;
            }
            return undefined;
        }
    })
}