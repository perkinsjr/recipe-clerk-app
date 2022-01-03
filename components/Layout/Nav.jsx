import { Box, Center, Text, useColorModeValue as mode } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { NavLink } from './NavLink'
import { UserProfile } from './UserProfile'
import { SignIn, SignedOut, UserButton } from '@clerk/nextjs'
export const Nav = () => (
  <Box bg={mode('gray.50', 'gray.700')}>
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd="10">
          <Text>Recipe App</Text>
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/addrecipe">Add Recipe</NavLink>]
      </Navbar.Links>
      <Navbar.UserProfile>
        <UserButton />
      </Navbar.UserProfile>
    </Navbar>
  </Box>
)
