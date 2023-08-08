import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { CartModal_Close } from './CartModal_Close'
import { useCartContext } from '@/context/AddToCart'
import { useState } from 'react'
import { CartModal_Success } from './CartModal_Success'
import { CartModal_NoItem } from './CartModal_NoItem'
import { CartModal_Item } from './CartModal_Item'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const CartModal = ({ isOpen, onClose }: ModalProps) => {
  const { cart, clearAll } = useCartContext()
  const [isSuccess, setIsSuccess] = useState(false)

  const count = cart.reduce((num, cart) => num + cart.qty, 0)
  const total = cart.reduce((price, cart) => {
    return price + cart.qty * cart.card.cardmarket.prices.averageSellPrice
  }, 0)

  const handleSuccessButtonClick = () => {
    onClose()
    clearAll()
    setIsSuccess(false)
  }

  const handlePayButtonClick = () => {
    setIsSuccess(true)
    clearAll()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={{ base: '95%', lg: '95%' }}>
        <Stack justify="center" margin={'5px 0px 5px 0px'}>
          <Stack mb="40px" spacing="0px" alignItems="center" w="full">
            {isSuccess ? (
              <CartModal_Success
                onSuccessButtonClick={handleSuccessButtonClick}
              />
            ) : cart.length === 0 && !isSuccess ? (
              <CartModal_NoItem onClose={onClose} />
            ) : (
              <CartModal_Item
                cart={cart}
                clearAll={clearAll}
                count={count}
                total={total}
                handlePayButtonClick={handlePayButtonClick}
              />
            )}
          </Stack>
        </Stack>

        <ModalFooter p="0">
          <CartModal_Close onClose={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
