import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'

export const CartModal_NoItem = () => {
  return (
    <Stack p="120px 0px 70px 0px">
      <HStack justify="center">
        <Box>
          <Text mb={3}>There is no items in Cart.</Text>
        </Box>
      </HStack>
      <HStack justify="center">
        <Box>
          <Button>Shop Now</Button>
        </Box>
      </HStack>
    </Stack>
  )
}
