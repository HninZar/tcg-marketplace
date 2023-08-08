import { useCartContext } from '@/context/AddToCart'
import { Button, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

type onCloseProps = {
  onSuccessButtonClick: () => void
}

export const CartModal_Success = ({ onSuccessButtonClick }: onCloseProps) => {
  return (
    <Stack p="120px 0px 70px 0px">
      <HStack justify="center">
        <Text fontSize="20px" fontWeight="medium">
          Your Payment is successful!
        </Text>
      </HStack>
      <HStack justify="center" mt="20px">
        <Button
          colorScheme="blue"
          onClick={() => {
            onSuccessButtonClick()
          }}
        >
          OK
        </Button>
      </HStack>
    </Stack>
  )
}
