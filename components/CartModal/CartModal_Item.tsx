import { Box, Button, HStack, Stack } from '@chakra-ui/react'
import { CartModal_Total } from './CartModal_Total'
import { CartModal_CardList } from './CartModal_CardList'
import { Cart } from '@/data/Cart'

type Props = {
  cart: Cart[]
  clearAll: () => void
  count: number
  total: number
  handlePayButtonClick: () => void
}

export const CartModal_Item = ({
  cart,
  clearAll,
  count,
  total,
  handlePayButtonClick,
}: Props) => {
  return (
    <Stack w="full">
      <Stack
        w="full"
        padding="40px 40px 0px 40px"
        position="relative"
        height="full"
      >
        <Box minH="370px" maxH="370px" overflowY="scroll">
          {cart.map((item) => (
            <CartModal_CardList key={item.id} cart={item} />
          ))}
        </Box>
        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height="58px"
          bgGradient="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
        />
      </Stack>

      <Button size="xs" fontWeight="normal" variant="link" onClick={clearAll}>
        Clear all
      </Button>

      <Box w="full">
        <CartModal_Total count={count} total={total} />
      </Box>

      <HStack w="full" justify="center" mt="30px">
        <Button
          fontSize="20px"
          fontWeight="500"
          colorScheme="blue"
          borderRadius="25px"
          bgColor="brand.action"
          boxShadow="0px 3px 5px rgba(0, 0, 0, 0.07)"
          width="217px"
          onClick={handlePayButtonClick}
        >
          Pay Now
        </Button>
      </HStack>
    </Stack>
  )
}
