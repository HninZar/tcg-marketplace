import { Box, Flex, HStack, IconButton, Stack, Text, VStack } from "@chakra-ui/react"
import cardPic from '../../public/images/1.png'
import Image from "next/image"
import { ChevronUpIcon, SmallCloseIcon } from "@chakra-ui/icons"

export const CartModal_CardItem = () => {
    return (
        <Flex
            width="full"
            min-height="107px"
        >
            <Image
                width={77}
                src={cardPic}
                alt={"Pokemon Card"}
            />
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
                    <Text
                        fontSize="20px"
                        fontWeight="bold" 
                    >
                        Pokemon
                    </Text>   
                    <Box
                    fontSize="12px"
                    > 
                    <Text>
                    $10.55 per card</Text>     
                    <Text>198 cards left</Text>
                    </Box>
                </VStack>

                <VStack
                    height="full"
                    alignItems="end"
                    justifyContent="space-around"
                >    
                    <HStack
                        spacing="1"
                        alignItems="start"
                        pr="3px"
                    >
                        <Text
                            pt="1"
                            fontSize="20px"
                            fontWeight="semibold"
                            color="blue.500"
                        >
                        2
                        </Text>

                        <VStack spacing="1">
                            <IconButton
                                minW="8px"
                                height="8px"
                                size="xs"
                                aria-label="Up"
                                variant="link"
                                color="blue.500"
                            
                                icon={
                                    <ChevronUpIcon />
                                }
                            />
                            <IconButton
                                minW="8px"
                                height="8px"
                                size="xs"
                                aria-label="Remove"
                                variant="link"
                                color="red.500"
                                
                                icon={
                                    <SmallCloseIcon />
                                }
                            />
                        </VStack>
                    </HStack>

                <VStack
                    spacing="0"
                    alignItems="end"
                >
                    <Text
                        fontSize="12px"
                        fontWeight="medium"
                    >
                        price
                    </Text>
                    <Text
                        fontWeight="bold"
                        color="blue.500"
                    >
                        $4.5
                    </Text>
                </VStack>
            </VStack>

        </HStack>
    </Flex>
    )
}