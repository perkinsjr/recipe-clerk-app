import { Box, SimpleGrid, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { RecipeCard } from '../components/RecipeCard'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite'
import { database } from '../firebase'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    async function getRecipes() {
      const recipeCollection = collection(database, 'recipes')
      const recipeSnapshot = await getDocs(recipeCollection)
      const recipes = recipeSnapshot.docs.map(doc => {
        const data = doc.data()
        data.id = doc.id
        return data
      })
      setRecipes(recipes)
    }
    getRecipes()
  }, [])

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Head>
        <title>Recipe App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}
