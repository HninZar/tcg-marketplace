import { Box, Button, HStack, Modal, ModalContent, ModalFooter, ModalOverlay, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CartModal_Close } from "./CartModal_Close";
import { CartModal_Total } from "./CartModal_Total";
import { CartModal_CardItem } from "./CartModal_CardItem";
import { useCartContext } from "@/context/AddToCart";

type ModalProps = {
    isOpen: boolean,
    onClose: () => void
}

export const CartModal = ({ isOpen, onClose }: ModalProps) => {

    const {cart , clearAll} = useCartContext();

    //Array Reduce function
    const count = cart.reduce((num, cart) => num + cart.qty, 0);
    const total = cart.reduce((price, cart) => {
        return price + (cart.qty * cart.card.cardmarket.prices.averageSellPrice)
    }, 0);
    
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>

                <Stack mt={5} mb={5} justify="center">
                    <Stack
                        mb="40px"
                        spacing="0px"
                        alignItems="center"
                        w="full"
                    >
                        <Stack 
                            w="full" 
                            padding="40px 40px 0px 40px"
                            position="relative"
                            height="full"
                        >
                            <Box 
                            minH="370px"
                            maxH="370px"
                            overflowY="scroll">
                            {cart.map((item) => (
                                <CartModal_CardItem key={item.id} cart={item} />
                            ))}
                            </Box>
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                width="100%"
                                height="58px"
                                bgGradient="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
                            />
                        </Stack>
                        
                        <Button
                            size="xs"
                            fontWeight="normal"
                            variant="link"
                            onClick={clearAll}
                        >
                            Clear all
                        </Button>
                        
                        <CartModal_Total
                            count={count}
                            total={total}
                        />

                        <HStack w="full" justify="center" mt="30px">
                            <Button 
                                fontSize="20px"
                                fontWeight="500"
                                colorScheme="blue"
                                borderRadius="25px"
                                bgColor="brand.action"
                                boxShadow="0px 3px 5px rgba(0, 0, 0, 0.07)"
                                width="217px">
                                    Pay Now
                            </Button>
                        </HStack>
                    </Stack>

                </Stack>

                <ModalFooter p="0">
                    <CartModal_Close onClose={onClose} />
                </ModalFooter>
                
            </ModalContent>
        </Modal>
    );
}