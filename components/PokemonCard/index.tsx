import { Box } from '@chakra-ui/react'
import { PokemonCard_Button } from './PokemonCard_Button'
import { PokemonCard_Image } from './PokemonCard_Image'
import { PokemonCard_Info } from './PokemonCard_Info'
import { Card } from '@/data/Card'
import { useCartContext } from '@/context/AddToCart'

type CardProps = {
  card: Card
}
export const PokemonCard = ({ card }: CardProps) => {
  const { cart, addToCart } = useCartContext()

  const selected = cart.findIndex((item) => item.card.id === card.id) > -1

  const handlerOnClick = () => {
    if (selected) return
    addToCart(card)
  }

  return (
    <Box width="full">
      <PokemonCard_Image image={card.images.large} />
      <PokemonCard_Info
        name={card.name}
        rarity={card.rarity}
        price={card.cardmarket.prices.averageSellPrice}
        qty={card.set.total}
      />
      <PokemonCard_Button selected={selected} onClick={handlerOnClick} />
    </Box>
  )
}
