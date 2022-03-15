// Components/Search.js
import React from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'
import { FlatList, Text } from 'react-native'

const styles = StyleSheet.create({
    main_container: {
      marginTop: 20,
      flex: 1,
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 20,
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
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => { }}/>
                <FlatList 
                data={ [ {key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}>
                </FlatList>
            </View>
        )
    }
}

export default Search

