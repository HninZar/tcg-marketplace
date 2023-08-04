import { Box } from "@chakra-ui/react"
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
          
            <Box 
                backgroundColor= "#fff"
                width= "50px"
                height= "50px"
                borderRadius= "100%"
                position= "absolute"
                top= "0"
                left= "50%"
                transform= "translateX(-50%)"
            />
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