import { Box, Button, Center, Circle } from "@chakra-ui/react"
import Image from "next/image"
import cartImg from '../public/images/cart.png'

export const ViewCart = () => {
    return(
        <Box
            position="fixed"
            bottom="0"
            height="120px"
            width="full"
            bgGradient="linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #ffffff 100%)"
            zIndex="1"
            color="white"  
            fontSize="12px"   
        >
            <Center height="full">
                <Box position="relative">
                    <Button
                        type="button"
                        colorScheme="blue"
                        borderRadius="10px"
                        fontSize="12px"
                        fontWeight="medium"
                        leftIcon={<Image src={cartImg} width="21" height="21" alt="cart" />}
                    >
                        View cart
                    </Button>

                    <Circle
                        size="16px"
                        bg="#FF6363"
                        position="absolute"
                        top="0.5"
                        transform="translate(-50%, -50%)"
                        zIndex="5"
                        pt="1.5px"
                    >
                        2
                    </Circle>
                </Box>
            </Center>
        </Box>
    )
}