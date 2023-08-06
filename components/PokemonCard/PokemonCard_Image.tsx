import { Image, Stack } from '@chakra-ui/react'

type CardImgProps = {
  image: string;
}

export const PokemonCard_Image = ({image}: CardImgProps) => {
  return (
    <Stack alignItems="center" mb="-58px" zIndex="2" position="relative">
      <Image width={200} src={image} alt="Pokemon Card"/>
    </Stack>
  )
}
