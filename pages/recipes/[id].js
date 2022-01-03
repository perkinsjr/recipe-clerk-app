import {
  Flex,
  Box,
  Button,
  chakra,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'

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
  const recipes = [
    {
      id: '4',
      title: 'Awesome Crab Roll',
      description: 'Tastes just like mom used to make',
      ingredients: 'Crab, Rice, Salt, Pepper',
      instructions: 'Mix ingredients, roll, bake',
      image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1641217989/Recipe%20App/yzt6ekukk0tvt4ipj9rg.jpg',
      category: 'Appetizer',
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: '4',
      calories: '200'
    },
    {
      id: '3',
      title: 'Pizza',
      description: 'super tastey',
      ingredients: 'Pizza crust, Cheese, Sauce, Pepper',
      instructions: 'Top crust with sauce, add your cheese, bake, eat',
      image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1641217990/Recipe%20App/kn24c9af1suukkh5dvww.jpg',
      category: 'Appetizer',
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: '4',
      calories: '200'
    },
    {
      id: '2',
      title: 'hot dog',
      description: 'Tastes like freedom',
      ingredients: 'hot dog, ketchup, mustard',
      instructions:
        'Take hot dog,cook on grill, put ketchup on top, put mustard on top',
      image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1641217990/Recipe%20App/swzgd7lqpfsil9a045ri.jpg',
      category: 'Appetizer',
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: '4',
      calories: '200'
    },
    {
      id: '1',
      title: 'chicken',
      description: 'Great for meal prepping, super quick and easy',
      ingredients: 'chicken, salt, pepper',
      instructions:
        'Trim fat, put a bunch of salt and pepper on it, and cook it',
      image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1641217990/Recipe%20App/dnhuxb6uaoiytrbyka3g.jpg',
      category: 'Appetizer',
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: '4',
      calories: '200'
    }
  ]

  const recipe = recipes.find(recipe => recipe.id === id)
  console.log(recipe)
  return {
    props: {
      recipe
    }
  }
}

export async function getStaticPaths() {
  const recipes = [
    {
      id: '4',
      title: 'Awesome Crab Roll',
      description: 'Tastes just like mom used to make',
      ingredients: 'Crab, Rice, Salt, Pepper',
      instructions: 'Mix ingredients, roll, bake',
      image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1641217989/Recipe%20App/yzt6ekukk0tvt4ipj9rg.jpg',
      category: 'Appetizer',
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: '4',
      calories: '200'
    },
    {
      id: '3',
      title: 'Pizza',
      description: 'super tastey',
      ingredients: 'Pizza crust, Cheese, Sauce, Pepper',
      instructions: 'Top crust with sauce, add your cheese, bake, eat',
      image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1641217990/Recipe%20App/kn24c9af1suukkh5dvww.jpg',
      category: 'Appetizer',
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: '4',
      calories: '200'
    },
    {
      id: '2',
      title: 'hot dog',
      description: 'Tastes like freedom',
      ingredients: 'hot dog, ketchup, mustard',
      instructions:
        'Take hot dog,cook on grill, put ketchup on top, put mustard on top',
      image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1641217990/Recipe%20App/swzgd7lqpfsil9a045ri.jpg',
      category: 'Appetizer',
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: '4',
      calories: '200'
    },
    {
      id: '1',
      title: 'chicken',
      description: 'Great for meal prepping, super quick and easy',
      ingredients: 'chicken, salt, pepper',
      instructions:
        'Trim fat, put a bunch of salt and pepper on it, and cook it',
      image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1641217990/Recipe%20App/dnhuxb6uaoiytrbyka3g.jpg',
      category: 'Appetizer',
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: '4',
      calories: '200'
    }
  ]
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
