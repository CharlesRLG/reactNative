// Components/Search.js
import React from 'react'
import { FlatList, View, TextInput, Button, StyleSheet } from 'react-native'
// import films from '../Helpers/filmsData'
import FilmItem from '../Components/FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import { ActivityIndicator } from 'react-native'

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Search extends React.Component {
  render() {
    console.log('RENDER')
    return (
      <View style={styles.main_container}>
        <TextInput
          placeholder='Titre du film'
          style={{ styles }}
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title="Rechercher" onPress={() => this._loadFilms()} />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      { this._displayLoading() }
      </View>

    )
  }
  constructor(props) {
    super(props)
    this.searchedText = ''
    this.state = {
      films: [],
      isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    }
    
  }

  // Nouvelle méthode
  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par setState
  }

 // Bien noter les deux setState
 //   isLoading: True puis appel API puis lorsque l'API a répondu isLoading: False
 _loadFilms() {
    if (this.state.isLoading) return
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchedText).then((data) => {
        this.setState({ films: data.results, isLoading: false });
      });
    }
  }
    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }
}
export default Search
