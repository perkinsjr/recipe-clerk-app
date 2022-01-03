import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Textarea,
  Grid,
  GridItem,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite'
import { database } from '../firebase'
export default function AddRecipe() {
  const user = useUser()
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    image: '',
    category: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    calories: ''
  })
  const handleChange = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    const firebaseClerkToken = await user.getToken('firebase')
    const auth = getAuth()
    await signInWithCustomToken(auth, firebaseClerkToken)

    const result = await await addDoc(collection(database, 'recipes'), recipe)
    console.log(result)
  }
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading as="h1" fontSize="7xl" textAlign="center">
        Add Recipe
      </Heading>
      <form
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns={['repeat(1,1fr)', 'repeat(5, 1fr)']}
          gap={2}
        >
          <GridItem colSpan={[1, 2]}>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                name="title"
                type="text"
                placeholder="Awesome Crab Roll"
                value={recipe.title}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={[1, 2]}>
            <FormControl>
              <FormLabel htmlFor="image">Image URL</FormLabel>
              <Input
                name="image"
                type="text"
                placeholder="https://lorem.picsum"
                value={recipe.image}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={[1, 2]}>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                name="description"
                placeholder="Tastes how I remember"
                value={recipe.description}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={[1, 3]}>
            <FormControl>
              <FormLabel htmlFor="ingredients">Ingredients</FormLabel>
              <Textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={[1, 5]}>
            <FormControl>
              <FormLabel htmlFor="instructions">Instructions</FormLabel>
              <Textarea
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>

          <FormControl>
            <FormLabel htmlFor="cookTime">Cook Time</FormLabel>
            <Input
              name="cookTime"
              type="text"
              placeholder="in minutes"
              value={recipe.cookTime}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="servings">Servings</FormLabel>
            <Input
              name="servings"
              type="number"
              placeholder="5"
              value={recipe.servings}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="calories">Calories</FormLabel>
            <Input
              name="calories"
              type="number"
              placeholder="300"
              value={recipe.calories}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Input
              name="category"
              type="text"
              placeholder="Asian"
              value={recipe.category}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="prepTime">Prep Time</FormLabel>
            <Input
              name="prepTime"
              type="text"
              placeholder="Prep in minutes"
              value={recipe.prepTime}
              onChange={handleChange}
            />
          </FormControl>
          <GridItem colSpan={[1, 2]}>
            <Button colorScheme="purple" width="100%" type="submit">
              Submit
            </Button>
          </GridItem>
          <GridItem colSpan={[1, 2]}>
            <Link passHref href="/">
              <Button
                colorScheme="purple"
                variant="outline"
                as="a"
                width="100%"
                type=""
              >
                Cancel
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </form>
    </Flex>
  )
}
