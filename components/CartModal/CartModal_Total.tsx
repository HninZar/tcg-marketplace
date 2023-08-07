import { HStack, Spacer, Stack, Text } from '@chakra-ui/react'

type TotalProps = {
  count: number
  total: number
}

export const CartModal_Total = ({ count, total }: TotalProps) => {
  return (
    <Stack mt="20px">
      <HStack w={300} fontWeight="semibold">
        <Text>Total cards</Text>
        <Spacer />
        <Text color="red.500">{count}</Text>
      </HStack>

      <HStack
        w={300}
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
