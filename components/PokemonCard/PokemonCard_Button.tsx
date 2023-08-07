import { Button, Stack, VStack } from '@chakra-ui/react'

type Props = {
  selected?: boolean,
  onClick: () => void
}
export const PokemonCard_Button = ({selected, onClick}: Props) => {
  return (
    <Stack mt="-25px" position="relative" zIndex="2">
      <VStack>
        <Button
          variant="solid"
          width="220px"
          height="50px"
          bgColor={selected? "#000" : "#FDCE29"}
          borderRadius="25px"
          color={selected? "#fff" : "#000"}
          fontSize="20px"
          fontWeight="medium"
          boxShadow="0px 3px 5px rgba(0, 0, 0, 0.1)"
          _hover={{
            background: '#000',
            color: '#ffffff',
          }}
          onClick={onClick}
        >
          {selected ? 'Selected' : 'Select Card'}
        </Button>
      </VStack>
    </Stack>
  )
}
