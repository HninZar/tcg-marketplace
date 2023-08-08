import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SmallCloseIcon,
} from '@chakra-ui/icons'
import { Cart } from '@/data/Cart'
import { useCartContext } from '@/context/AddToCart'

type Props = {
  cart: Cart
}

export const CartModal_CardList = ({ cart }: Props) => {
  const { increase, decrease, remove } = useCartContext()
  const price = cart.card.cardmarket.prices.averageSellPrice
  const { id, qty } = cart
  const totalPrice = (price * qty).toFixed(2)

  return (
    <Flex width="full" height="107px" mb="25px">
      <Image width={77} src={cart.card.images.small} alt={'Pokemon Card'} />
      <HStack
        width="full"
        height="full"
        flex="1"
        justifyContent="space-between"
      >
        <VStack
          height="full"
          alignItems="start"
          justifyContent="space-around"
          spacing="0"
          marginLeft="15px"
        >
          <Box color="#bcbbbb" fontSize="14px">
            <Text fontSize="20px" fontWeight="bold" color="#000">
              {cart.card.name}
            </Text>
            <Text>
              <Text color="#000" as="span">
                ${price}
              </Text>
              &nbsp;per card
            </Text>
          </Box>
          <Text mt="0.5rem">
            <Text color="red.500" as="span" fontWeight="semibold">
              {cart.card.set.total}
            </Text>
            &nbsp;cards left
          </Text>
        </VStack>

        <VStack height="full" alignItems="end" justifyContent="space-around">
          <HStack spacing="1" alignItems="start" pr="3px">
            <Text pt="1" fontSize="20px" fontWeight="semibold" color="blue.500">
              {qty}
            </Text>

            <VStack spacing="1">
              <IconButton
                minW="8px"
                height="8px"
                size="xs"
                aria-label="Up"
                variant="link"
                color="blue.500"
                onClick={() => increase(id)}
                icon={<ChevronUpIcon />}
              />
              {qty === 1 ? (
                <IconButton
                  minW="8px"
                  height="8px"
                  size="xs"
                  aria-label="Remove"
                  variant="link"
                  color="brand.alert"
                  onClick={() => remove(id)}
                  icon={<SmallCloseIcon />}
                />
              ) : (
                <IconButton
                  minW="8px"
                  height="8px"
                  size="xs"
                  aria-label="Remove"
                  variant="link"
                  color="brand.action"
                  onClick={() => decrease(id)}
                  icon={<ChevronDownIcon />}
                />
              )}
            </VStack>
          </HStack>

          <VStack spacing="0" alignItems="end">
            <Text fontSize="12px" fontWeight="medium">
              price
            </Text>
            <Text fontWeight="bold" color="blue.500">
              ${totalPrice}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Flex>
  )
}
