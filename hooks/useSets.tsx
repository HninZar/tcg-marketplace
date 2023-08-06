import { useQuery } from "react-query"

type Set = {
    id: string
    name: string
}
export const useSets = () => {
    const fetchSets = () => (
        fetch('https://api.pokemontcg.io/v2/sets')
        .then(res => res.json())
        .then<Set[]>(res => res.data)

    )
    return useQuery('sets', fetchSets, {placeholderData: []})
}