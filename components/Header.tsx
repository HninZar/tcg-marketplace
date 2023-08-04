import { Box, Text } from "@chakra-ui/react";
import styles from '@/styles/Home.module.css';

import Image from "next/image";
import logoTcg from '../public/images/tcg-logo.png'

export const Header = () => {
    return(
        <Box className={`${styles.headerbox}`}>
            
            <Text className={`${styles.headertext}`}>TCG Marketplace</Text>

            <Box className={`${styles.logobox}`}>
          
                <Box className={`${styles.logobg}`}/>
                <Box 
                    position="relative"
                    zIndex="3"
                    marginTop="2px"
                    width="68px"
                    >
                <Image src={logoTcg} alt="TCG Marketplace" placeholder="blur" />
                </Box>
            </Box>
          
        </Box>
    );
}