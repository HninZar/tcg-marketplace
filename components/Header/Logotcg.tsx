import { Box, Circle } from "@chakra-ui/react"
import Image from "next/image"
import logoTcg from '../../public/images/tcg-logo.png'

export const Logotcg = () => {
    return(
        <Box 
            position="absolute"
            top="48px"
            left="50%"
            transform="translateX(-50%)"
        >
            <Circle 
                size='48px' 
                bg='#fff' 
                position= "absolute"
                top= "2px"
                left= "50%"
                transform= "translateX(-50%)"/>
            <Box 
                position="relative"
                zIndex="3"
                mt="2px"
                width="68px"
            >
                <Image src={logoTcg} alt="TCG Marketplace" placeholder="blur" />
            </Box>
        </Box>
    )
}