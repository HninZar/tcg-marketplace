import { HStack, Spacer, Stack, Text } from "@chakra-ui/react"

export const CartModal_Total = () => {
    return (
        <Stack>
            <HStack 
                w={300}
                fontWeight="semibold"
            >
                <Text>Total cards</Text>
                <Spacer />
                <Text color="red.500">
                9
                </Text>
            </HStack>

            <HStack 
                w={300}
                fontWeight="semibold"
            >
                <Text>Total price</Text>
                <Spacer />
                <Text color="red.500">
                    $ 29
                </Text>
            </HStack>
        </Stack>
        
    )
}