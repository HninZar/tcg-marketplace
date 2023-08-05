import { Button, Stack, VStack } from '@chakra-ui/react'

export const PokemonCard_Button = () => {
  return (
    <Stack mt="-25px" position="relative" zIndex="2">
      <VStack>
        <Button
          variant="solid"
          width="220px"
          height="50px"
          bgColor="#FDCE29"
          borderRadius="25px"
          color="#fffff"
          fontSize="20px"
          fontWeight="medium"
          boxShadow="0px 3px 5px rgba(0, 0, 0, 0.1)"
          _hover={{
            background: '#000',
            color: '#ffffff',
          }}
        >
          Select Card
        </Button>
      </VStack>
    </Stack>
  )
}
