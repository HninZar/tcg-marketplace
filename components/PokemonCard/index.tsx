import { Box, Center, Grid, GridItem, Stack } from '@chakra-ui/react'
import { PokemonCard_Button } from './PokemonCard_Button'
import { PokemonCard_Image } from './PokemonCard_Image'
import { PokemonCard_Info } from './PokemonCard_Info'
import { Fragment } from 'react'

export const PokemonCard = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" rowGap="50px" columnGap="160px">
      <Fragment>
        <GridItem width="full">
          <Center>
            <Box width="full">
              <PokemonCard_Image />
              <PokemonCard_Info />
              <PokemonCard_Button />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Box width="full">
              <PokemonCard_Image />
              <PokemonCard_Info />
              <PokemonCard_Button />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Box width="full">
              <PokemonCard_Image />
              <PokemonCard_Info />
              <PokemonCard_Button />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Box width="full">
              <PokemonCard_Image />
              <PokemonCard_Info />
              <PokemonCard_Button />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Box width="full">
              <PokemonCard_Image />
              <PokemonCard_Info />
              <PokemonCard_Button />
            </Box>
          </Center>
        </GridItem>
      </Fragment>
    </Grid>
  )
}
