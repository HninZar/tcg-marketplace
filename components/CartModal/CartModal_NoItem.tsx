import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'

type ModalProps = {
  onClose: () => void
}

export const CartModal_NoItem = ({onClose}: ModalProps) => {
  return (
    <Stack p="120px 0px 70px 0px">
      <HStack justify="center">
        <Box>
          <Text mb={3}>There is no items in Cart.</Text>
        </Box>
      </HStack>
      <HStack justify="center">
        <Box>
          <Button onClick={onClose}>Shop Now</Button>
        </Box>
      </HStack>
    </Stack>
  )
}
