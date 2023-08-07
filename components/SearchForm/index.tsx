import { Box, Flex, HStack, Stack } from '@chakra-ui/react'
import { SearchForm_input } from './SearchForm_Input'
import { SearchForm_Type } from './SearchForm_Type'
import { SearchForm_Rarity } from './SearchForm_Rarity'
import { SearchForm_Set } from './SearchForm_Set'
import { Form, Formik } from 'formik'
import { SearchForm_AutoSubmit } from './SearchForm_AutoSubmit'
import { SearchFormValues } from '@/data/SearchFormValues'

type onSubmitValuesProps = {
  onSubmitValues : (values: SearchFormValues) => void;
}

export const SearchForm = ({onSubmitValues} : onSubmitValuesProps) => {

   //Inital Value for Formik
   const initialValues: SearchFormValues = {
    name: '',
    type: '',
    rarity: '',
    set: ''
  }

  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={onSubmitValues}
    >

    <Flex justifyContent="center">
      <Box maxW="600px" mt="30" width="full">
        <Form>
          
          <Stack direction={['column', 'row']} spacing="2px">
            <HStack width="40%">
              <SearchForm_input />
            </HStack>
            <HStack width="50%" spacing="2px">
              <SearchForm_Type />
              <SearchForm_Rarity />
              <SearchForm_Set />
            </HStack>
          </Stack>

          <SearchForm_AutoSubmit />
        </Form>
        
      </Box>
    </Flex>
    </Formik>
  )
}
