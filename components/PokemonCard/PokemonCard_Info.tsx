import { HStack, Stack, Text } from '@chakra-ui/react'

type CardInfoProps = {
  name: string
  rarity: string
  price: number
  qty: number
}

export const PokemonCard_Info = ({
  name,
  rarity,
  price,
  qty,
}: CardInfoProps) => {
  return (
    <Stack
      pt="70px"
      pb="36px"
      bgColor="white"
      alignItems="center"
      borderRadius="20px"
      boxShadow="0px 5px 10px rgba(0, 0, 0, 0.1);"
      zIndex="1"
      position="relative"
      spacing="0"
    >
      <Text fontSize="24px" fontWeight="bold" textAlign="center">
        {name}
      </Text>
      <HStack>
        <Text color="#0F6DB0">{rarity}</Text>
      </HStack>
      <HStack
        justifyContent="space-around"
        mb="5px"
        mt="7px"
        spacing="5"
        fontSize="20px"
        color="#696969"
      >
        <Text> ${price} </Text>
        <Text> {qty} left</Text>
      </HStack>
    </Stack>
  )
}
