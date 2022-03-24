// Components/FilmItem.js
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import dayjs from 'dayjs'
// import 'react-json-pretty/themes/adventure_time.css'
// import JSONPretty from 'react-json-pretty'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
  render() {
    const film = this.props.film
    console.log(this.props.film.title)
    return (
      <View>
        <View>
          {/* <JSONPretty data={film}></JSONPretty> */}
        </View>
        <View style={styles.film_main_container}>
        <Image style={styles.image} source={getImageFromApi(film.poster_path)} />

          <View style={styles.film_description}>
            <View style={styles.titreVote}>
              <Text style={styles.titreFilm}>{film.title}</Text>
              <Text style={styles.Vote_average_film}>{film.vote_average}</Text>
            </View>
            <Text style={styles.OverviewFilm}>{film.overview}</Text>
            <Text style={styles.release_date_film}>
              {dayjs(film.release_date).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  film_main_container: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#FFFFF',
  },
  film_description: {
    flexDirection:'column',
    marginLeft: 20,
  }, 
  titreVote: {
    flexDirection: 'row',
    fontSize: 16,
  },
  titreFilm: {
    marginRight: 50,
    fontSize: 20,
    minWidth: 300,
    fontWeight: 'bold',
  },
  Vote_average_film: {
    fontWeight: 'bold',
  },
  OverviewFilm: {
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 350,
    minHeight: 100,
  },
  release_date_film: {
    fontSize: 16,
    marginLeft: 250,
    fontWeight: 'bold',
  },
  image: {
        width: 200,
        height: 300,
        flexDirection:'column',
    }
    
})
export default FilmItem