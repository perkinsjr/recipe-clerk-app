import { ChakraProvider } from '@chakra-ui/react'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { Nav } from '../components/Layout/Nav'

const publicPages = ['/', `/recipes/[id]`]

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const isPublicPage = publicPages.includes(pathname)

  return (
    <ClerkProvider>
      <ChakraProvider>
        {isPublicPage ? (
          <>
            <Nav />
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <SignedIn>
              <Nav />
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </ChakraProvider>
    </ClerkProvider>
  )
}

export default MyApp
