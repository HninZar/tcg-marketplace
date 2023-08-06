import { Header } from '@/components/Header/Header'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '@/theme'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />

      </ChakraProvider>
    </QueryClientProvider>
  )
}
