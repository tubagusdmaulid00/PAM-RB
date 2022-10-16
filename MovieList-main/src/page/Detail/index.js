import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Alert,
} from 'react-native';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datatampil: [],
    };
  }
  getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'http://www.omdbapi.com/?apikey=faf7e5bb&i=' +
          this.props.route.params.ID,
      );
      const json = await response.json();
      this.setState({datatampil: json});
    } catch (error) {
      Alert.alert('data error', error);
    }
  };
  componentDidMount = () => {
    this.getMoviesFromApiAsync();
  };
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <SafeAreaView style={styles.DetailView}>
          <ScrollView>
            <Image
              source={{uri: this.state.datatampil.Poster}}
              style={styles.poster}
              resizeMode="contain"
            />
            <SafeAreaView style={styles.kotak}>
              <Text style={styles.textheader}>Synopsis</Text>
              <Text style={styles.textisi}>{this.state.datatampil.Plot}</Text>
            </SafeAreaView>
            <SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Director</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Director}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Writer</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Writer}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Cast</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Actors}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Genre</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Genre}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Language</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Language}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Year</Text>
                <Text style={styles.textisi}>{this.state.datatampil.Year}</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Released</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Released}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Awards</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Awards}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Runtime</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Runtime}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.kotak}>
                <Text style={styles.textheader}>Rated</Text>
                <Text style={styles.textisi}>
                  {this.state.datatampil.Rated}
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}
const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.1,
    justifyContent: 'flex-end',
    marginBottom: height * 0.03,
    // alignItems:'flex-end'
  },
  DetailView: {
    // backgroundColor:'red',
    flex: 1,
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.02,
    // marginTop:height * 0.02,
  },

  poster: {
    height: height * 0.3,
    width: width * 1,
  },
  kotak: {
    marginTop: height * 0.01,
    backgroundColor: '#FFF',
    // borderBottomWidth:0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textheader: {
    color: 'black',
    fontWeight: 'bold',
  },
  textisi: {
    color: 'black',
  },
});
