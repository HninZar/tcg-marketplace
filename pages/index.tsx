import { SearchForm } from "@/components/SearchForm";
import { Stack } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <main>
        <Stack 
          backgroundColor="#f9f9f9"
          pt="90px">
          <SearchForm/>
        </Stack>
      </main>
    </>
  )
}
