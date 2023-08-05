import { HStack, Stack, Text } from '@chakra-ui/react'

export const PokemonCard_Info = () => {
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
      <Text fontSize="25px" fontWeight="bold">
        Pokemon
      </Text>
      <HStack>
        <Text color="#0F6DB0">rarity</Text>
      </HStack>
      <HStack
        justifyContent="space-around"
        mb="5px"
        mt="7px"
        spacing="5"
        fontSize="20px"
        color="#696969"
      >
        <Text> $3.5 </Text>
        <Text> 60 left</Text>
      </HStack>
    </Stack>
  )
}
