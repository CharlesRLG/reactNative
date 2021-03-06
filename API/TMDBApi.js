// API/TMDBApi.js
import axios from 'axios'
import { API_TOKEN } from '@env'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function slowNetwork() {
  await sleep(5000)
}

const getFilmsFromApiWithSearchedText = async (text) => {
  await slowNetwork()
  const url =
    'https://api.themoviedb.org/3/search/movie?api_key=' +
    API_TOKEN +
    '&language=fr&query=' +
    text + "&page=" + page
    const response = await axios.get(url)
    console.log('--getFilmsFromApiWithSearchedText--')
    console.log(url)
    console.log(response.data)
    console.log('--fin getFilmsFromApiWithSearchedText--')
    return response.data
  }
// API/TMDBApi.js
const getImageFromApi = (name) => {
  if (name === null || name === undefined)
    return require('../Assets/filmVide.jpg')
  // 'https://image.tmdb.org/t/p/original' + name
  // 'https://image.tmdb.org/t/p/w300' + name
  return { uri: 'https://image.tmdb.org/t/p/w300' + name }
}

  
  export { getFilmsFromApiWithSearchedText, getImageFromApi }