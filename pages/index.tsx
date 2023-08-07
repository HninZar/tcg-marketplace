import { PokemonCard } from '@/components/PokemonCard'
import { SearchForm } from '@/components/SearchForm'
import { ViewCart } from '@/components/ViewCartButton'
import { SearchFormValues } from '@/data/SearchFormValues'
import { useCards } from '@/hooks/useCards'
import { SearchIcon } from '@chakra-ui/icons'
import { Stack, Center, Grid, GridItem, Spinner, Text, Button, Container } from '@chakra-ui/react'
import { Fragment, useState} from 'react'

export default function Home() {
  const [searchValues, setSearchValues] = useState<SearchFormValues>();
  
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useCards(searchValues || {});

  return (
    <>
    <Container maxW="container.lg">
      <main>
        <Stack backgroundColor="#f9f9f9" pt="90px" pb="120px">
          <SearchForm onSubmitValues={setSearchValues}/>
          
          <Stack pt="35px">
            <Grid templateColumns="repeat(3, 1fr)" rowGap="50px" columnGap="80px">
            {data && data.pages.map((pages, index) =>
              <Fragment key={index}>
                {pages.data.map((item) => (
                  <GridItem width="full" key={item.id}>
                    <Center>
                      <PokemonCard card={item}/>
                    </Center>
                  </GridItem>
                ))}
              </Fragment>
              )}
            </Grid>
          </Stack>
          
          <Stack mt="40px">
            {hasNextPage && (
              <Stack
                width="full"
                direction="row"
                alignItems="center"
                justifyContent="center"  
                color="#696969"
              >
                <SearchIcon width="14px" />
                <Button 
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage} 
                  fontWeight="medium"
                  variant='link'
                  color="#696969"
                  _hover={{
                      textDecor:"none"
                  }}
                >
                {isFetchingNextPage ? "showing more..." : "show more"}</Button>
              </Stack>
            )}
          </Stack>

        </Stack>
      </main>
      </Container>
      <ViewCart />
    </>
  )
}
