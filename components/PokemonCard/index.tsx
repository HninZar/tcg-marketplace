import { Box } from '@chakra-ui/react'
import { PokemonCard_Button } from './PokemonCard_Button'
import { PokemonCard_Image } from './PokemonCard_Image'
import { PokemonCard_Info } from './PokemonCard_Info'
import { Card } from '@/data/Card'

type CardProps = {
  card : Card;
}
export const PokemonCard = ({card}: CardProps) => {

  return (
    <Box width="full">
      <PokemonCard_Image image={card.images.large}/>
      <PokemonCard_Info name={card.name} rarity={card.rarity} price={card.cardmarket.prices.averageSellPrice} qty={card.set.total}/>
      <PokemonCard_Button />
    </Box>
  )
}
