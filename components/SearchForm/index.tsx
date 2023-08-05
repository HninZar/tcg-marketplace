import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { SearchForm_input } from "./SearchForm_Input";
import { SearchForm_Type } from "./SearchForm_Type";
import { SearchForm_Rarity } from "./SearchForm_Rarity";
import { SearchForm_Set } from "./SearchForm_Set";

export const SearchForm = () =>{
    return (
        <Flex justifyContent="center">
            <Box maxW="600px" mt="30" width="full" >
                <Stack direction={['column', 'row']} spacing='2px'>  

                    <HStack width="40%">
                        <SearchForm_input/>
                    </HStack>
                    <HStack width="50%" spacing='2px'>
                        <SearchForm_Type/>
                        <SearchForm_Rarity/>
                        <SearchForm_Set/>
                    </HStack> 
                </Stack>
            </Box>
        </Flex>
    );
}