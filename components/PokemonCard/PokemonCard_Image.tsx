import Image from 'next/image'
import cardPic from '../../public/images/1.png'
import { Stack } from '@chakra-ui/react'

export const PokemonCard_Image = () => {
  return (
    <Stack alignItems="center" mb="-58px" zIndex="2" position="relative">
      <Image width={200} src={cardPic} alt="Pokemon Card" />
    </Stack>
  )
}
