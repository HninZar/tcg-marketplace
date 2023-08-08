import { PokemonCard } from '@/components/PokemonCard'
import { SearchForm } from '@/components/SearchForm'
import { ViewCart } from '@/components/ViewCartButton'
import { SearchFormValues } from '@/data/SearchFormValues'
import { useCards } from '@/hooks/useCards'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Stack,
  Center,
  Grid,
  GridItem,
  Button,
  Container,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Fragment, useState } from 'react'

export default function Home() {
  const [searchValues, setSearchValues] = useState<SearchFormValues>()

  const columns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    lg: 'repeat(3, 1fr)',
  })

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useCards(searchValues || {})

  // if (error) {
  //   return <Center pt="200px">No Data Found</Center>
  // }

  return (
    <>
      <Container maxW="container.lg">
        <main>
          <Stack backgroundColor="#f9f9f9" pt="90px" pb="120px">
            <SearchForm onSubmitValues={setSearchValues} />

            <Stack pt="35px">
              <Grid templateColumns={columns} rowGap="50px" columnGap="80px">
                {error ? <Center >No Data Found</Center>  
                :  data &&
                  data.pages.map((pages, index) => (
                    <Fragment key={index}>
                      {pages.count === 0 ? (
                        <p>Not Found</p>
                      ) : (
                        pages.data.map((item: any) => (
                          <GridItem width="full" key={item.id}>
                            <Center>
                              <PokemonCard card={item} />
                            </Center>
                          </GridItem>
                        ))
                      )} ? 
                    </Fragment>
                  )) }
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
                    variant="link"
                    color="#696969"
                    _hover={{
                      textDecor: 'none',
                    }}
                  >
                    {isFetchingNextPage ? 'showing more...' : 'show more'}
                  </Button>
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
