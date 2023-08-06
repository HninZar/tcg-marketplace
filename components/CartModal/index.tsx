import { Box, Button, HStack, Modal, ModalContent, ModalFooter, ModalOverlay, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CartModal_Close } from "./CartModal_Close";
import { CartModal_Total } from "./CartModal_Total";
import { CartModal_CardItem } from "./CartModal_CardItem";

type ModalProps = {
    isOpen: boolean,
    onClose: () => void
}

export const CartModal = ({ isOpen, onClose }: ModalProps) => {

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>

                <Stack mt={5} mb={5} justify="center">
                    <Stack
                        mb="40px"
                        spacing="26px"
                        alignItems="center"
                        w="full"
                    >
                        <Stack p="40px" w="full">
                            <CartModal_CardItem/>
                        </Stack>
                        
                        <Button
                            size="xs"
                            fontWeight="normal"
                            variant="link"
                        >
                            Clear all
                        </Button>
                        
                        <CartModal_Total/>

                        <HStack w="full" justify="center" mt={5} mb={5}>
                            <Button 
                                colorScheme="blue"
                                color="#ffffff">
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