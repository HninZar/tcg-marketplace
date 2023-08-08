import { SmallCloseIcon } from '@chakra-ui/icons'
import { Box, Button, CloseButton } from '@chakra-ui/react'

type onCloseProps = {
  onClose: () => void
}
export const CartModal_Close = ({ onClose }: onCloseProps) => {
  return (
    <Box position="absolute" left="50%" transform="translate(-50%, 5%)">
      <Button
        width="35px"
        height="35px"
        colorScheme="red.600"
        borderRadius="10px"
        onClick={onClose}
        size="sm"
        bgColor="red.600"
        color="white"
        fontWeight="bold"
      >
        <SmallCloseIcon />
      </Button>
    </Box>
  )
}
