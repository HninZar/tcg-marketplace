import { Box, Text } from '@chakra-ui/react'
import { Logotcg } from './Logotcg'

export const Header = () => {
  return (
    <Box
      height="77px"
      backgroundColor="#fff"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.03)"
      position="fixed"
      width="100%"
      zIndex="99"
    >
      <Text textAlign="center" mt="18px" fontWeight={700} fontSize={24}>
        TCG Marketplace
      </Text>
      <Logotcg />
    </Box>
  )
}
