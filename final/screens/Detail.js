import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import SearchInput, { createFilter } from 'react-native-search-filter';

import { MonoText } from '../components/StyledText';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  setFavorite = (i) => {
    this.items[i].favorite = true;
  }

  render ()
  {
    const filteredImages = images.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <SearchInput
         onChangeText={(term) => { this.searchUpdated(term) }}
         style={styles.searchInput}
         placeholder="Type a message to search"
         />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {filteredImages.map(images => {
            return (
              <TouchableOpacity onPress={()=>alert(images.user.name)}
              key={images.id} style={styles.imagesItem}>
                <View>
                  <Text>{images.user.name}</Text>
                  <Text style={styles.imagesSubject}>{images.subject}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>These are a few photos I have taken</Text>
            <FlatList
             data={[
              {favorite: true, key: 'Ale',image: require('../assets/images/punkinale.jpg')},
              {favorite: false, key: 'IPA',image: require('../assets/images/spacedust.jpg')},
              {favorite: true, key: 'Ale',image: require('../assets/images/longboard.jpg')},
              {favorite: true, key: 'Ale',image: require('../assets/images/englishbay.jpg')},
              {favorite: false, key: 'IPA',image: require('../assets/images/bearhug.jpg')},
              {favorite: false, key: 'Lager',image: require('../assets/images/summerfest.jpg')},
            ]}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity onPress={(event) =>
                {
                  navigate("Detail", {
                    title: item.key,
                    image: item.image,
                    setFavorite:this.setFavorite})
              }
              }>
              <Text>{item.key}</Text>
              <Image source={item.image} style={{width:200,height:200}} />
              </TouchableOpacity>}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 20,
    color: '#7C0A02',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
