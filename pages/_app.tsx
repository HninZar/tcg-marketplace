import { Header } from '@/components/Header/Header'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { extendTheme } from "@chakra-ui/react"
import theme from '@/theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
  
  
}
