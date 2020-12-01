import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { SearchBar } from 'react-native-elements';


import { BoxesContext } from '../context/BoxesContext';

export default function TabTwoScreen() {
  const { boxes } = React.useContext(BoxesContext);

  console.log("boxes: " + JSON.stringify(boxes));
    
  // state = {
  //   search: '',
  // };

  // updateSearch = (search) => {
  //   this.setState({ search });
  // };


  // const { search } = this.state;

  return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar style={styles.searchBar}
            placeholder="Type Here..."
            // onChangeText={this.updateSearch}
            // value={search}
          />
        </View>
        {boxes.map((box) => (
          <Text key={box.id}>{box.name}</Text>
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    top: 25,
    height: 100,
    alignSelf: 'stretch',
  },
  searchBar: {
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
