import React, { useEffect } from 'react'
import axios from 'axios'

const articlesURL = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles'

const ObtainCategories = () => {
  const categories = []

  useEffect(() => {
    (async () => {
      const apiResponse = await axios.get(articlesURL)
      apiResponse.data.forEach(({category}) => {
        if (!categories.includes(category)) categories.push(category)
      })
    })()
  }, [])


  return (
    categories
  )
}

export default ObtainCategories
