import { HStack, Spacer, Stack, Text } from '@chakra-ui/react'

type TotalProps = {
  count: number
  total: number
}

export const CartModal_Total = ({ count, total }: TotalProps) => {
  return (
    <Stack mt="20px" w="full" justifyContent="center" alignItems="center">
      <HStack fontWeight="semibold" w={{ base: '100%', lg: '250px' }}>
        <Text>Total cards</Text>
        <Spacer />
        <Text color="red.500">{count}</Text>
      </HStack>

      <HStack
        w={{ base: '100%', lg: '250px' }}
        justifyContent="space-between"
        fontSize="20px"
        fontWeight="bold"
      >
        <Text>Total price</Text>
        <Spacer />
        <Text color="red.500">$ {total.toFixed(2)}</Text>
      </HStack>
    </Stack>
  )
}
