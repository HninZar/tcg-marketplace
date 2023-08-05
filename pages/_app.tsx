import { Header } from '@/components/Header/Header'
import { ChakraProvider, Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'
import theme from '@/theme'
import { ViewCart } from '@/components/ViewCartButton'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.lg">
        <Component {...pageProps} />
      </Container>
      <ViewCart />
    </ChakraProvider>
  )
}
