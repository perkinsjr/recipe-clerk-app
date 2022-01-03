import {
  Flex,
  Box,
  Button,
  chakra,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore/lite'
import { database } from '../../firebase'
export default function Recipe({ recipe }) {
  const { title, description, ingredients, instructions, image, category } =
    recipe

  return (
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        width="100%"
        bg={useColorModeValue('gray.100', 'gray.600')}
        maxW="5xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={image}
          alt={title}
        />
        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue('gray.600', 'white')}
            >
              {category}
            </chakra.span>
            <Box
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: 'gray.600', textDecor: 'underline' }}
            >
              {title}
            </Box>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {description}
            </chakra.p>
          </Box>
          <Box mt={6}>
            <Box>
              <chakra.span
                fontSize="lg"
                fontWeight={500}
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Ingredients
              </chakra.span>
              <chakra.ul
                mt={2}
                mx={8}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                {ingredients.split(',').map((ingredient, index) => (
                  <chakra.li key={index}>{ingredient}</chakra.li>
                ))}
              </chakra.ul>
            </Box>
            <Box mt={6}>
              <chakra.span
                fontSize="lg"
                fontWeight={500}
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Instructions
              </chakra.span>
              <chakra.ol
                mt={2}
                mx={8}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                {instructions.split(',').map((instruction, index) => (
                  <chakra.li key={index}>{instruction}</chakra.li>
                ))}
              </chakra.ol>
            </Box>
          </Box>
        </Box>
        <Link
          passHref
          href={{ pathname: '/editrecipe', query: { id: recipe.id } }}
        >
          <Button as="a" variant="ghost">
            {' '}
            Edit Recipe{' '}
          </Button>
        </Link>
      </Box>
    </Flex>
  )
}

export async function getStaticProps({ params }) {
  const id = params.id
  const recipeSnapshot = await getDoc(doc(database, 'recipes', id))
  const recipe = recipeSnapshot.data()
  recipe.id = recipeSnapshot.id
  return {
    props: {
      recipe
    }
  }
}

export async function getStaticPaths() {
  const recipeCollection = collection(database, 'recipes')
  const recipeSnapshot = await getDocs(recipeCollection)
  const recipes = recipeSnapshot.docs.map(doc => {
    const data = doc.data()
    data.id = doc.id
    return data
  })
  const paths = recipes.map(recipe => ({
    params: {
      id: recipe.id
    }
  }))
  return {
    paths,
    fallback: false
  }
}
