import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
	Button,
	Alert,
} from 'react-native';
import {list, captamerica, Ironman, Hulk, Thor, Spiderman} from '../../assets';
import {Katagori} from '../../components';
import {FlatGrid} from 'react-native-super-grid';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'http://www.omdbapi.com/?apikey=faf7e5bb&s=Captain%20america',
      datatampil: [],
      dataasli: [],
      search: '',
    };
  }

  getMoviesFromApiAsync = async link => {
    try {
      const response = await fetch(link);
      const json = await response.json();
      this.setState({
        datatampil: json.Search,
        dataasli: json.Search,
      });
    } catch (error) {
      Alert.alert("data error",error);
    }
  };
  getdatadefault = async () => {
    try {
      const response = await fetch(this.state.title);
      const json = await response.json();
      this.setState({
        datatampil: json.Search,
        dataasli: json.Search,
      });
    } catch (error) {
      Alert.alert("data error",error);
    }
  };
  componentDidMount = () => {
    this.getdatadefault();

  };

  search = () => {
    let dataFilm = this.state.dataasli;
    let search = this.state.search;
    dataFilm = dataFilm.filter(item =>
      item.Title.toLowerCase().includes(search.toLowerCase()),
    );
    this.setState({
      datatampil: dataFilm,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <SafeAreaView style={styles.header}>
          <SafeAreaView style={styles.judul}>
            <Text style={{fontSize: 30, color: 'red'}}>OMDB API</Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.katagori}>
          <ScrollView horizontal={true} style={styles.list}>
            <SafeAreaView style={styles.listkatagori}>
              {/* <TouchableOpacity style={styles.kotaklist}>
					<SafeAreaView >
						<Image source={list} resizeMode='contain'
						style={styles.img}
						/>
						<Text>Semua Film</Text>
					</SafeAreaView>
					</TouchableOpacity> */}
              <TouchableOpacity
                style={styles.kotaklist}
                onPress={() =>
                  this.getMoviesFromApiAsync(
                    'http://www.omdbapi.com/?apikey=faf7e5bb&s=Captain%20america',
                  )
                }>
                <SafeAreaView>
                  <Image
                    source={captamerica}
                    resizeMode="contain"
                    style={styles.img}
                  />
                  <Text style={styles.text}>Captain America</Text>
                </SafeAreaView>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.kotaklist}
                onPress={() =>
                  this.getMoviesFromApiAsync(
                    'http://www.omdbapi.com/?apikey=faf7e5bb&s=IronMan',
                  )
                }>
                <SafeAreaView>
                  <Image
                    source={Ironman}
                    resizeMode="contain"
                    style={styles.img}
                  />
                  <Text style={styles.text}>Iron Man</Text>
                </SafeAreaView>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.kotaklist}
                onPress={() =>
                  this.getMoviesFromApiAsync(
                    'http://www.omdbapi.com/?apikey=faf7e5bb&s=Hulk',
                  )
                }>
                <SafeAreaView>
                  <Image
                    source={Hulk}
                    resizeMode="contain"
                    style={styles.img}
                  />
                  <Text style={styles.text}>Hulk</Text>
                </SafeAreaView>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.kotaklist}
                onPress={() =>
                  this.getMoviesFromApiAsync(
                    'http://www.omdbapi.com/?apikey=faf7e5bb&s=Thor',
                  )
                }>
                <SafeAreaView>
                  <Image
                    source={Thor}
                    resizeMode="contain"
                    style={styles.img}
                  />
                  <Text style={styles.text}>Thor</Text>
                </SafeAreaView>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.kotaklist}
                onPress={() =>
                  this.getMoviesFromApiAsync(
                    'http://www.omdbapi.com/?apikey=faf7e5bb&s=Spiderman',
                  )
                }>
                <SafeAreaView>
                  <Image
                    source={Spiderman}
                    resizeMode="contain"
                    style={styles.img}
                  />
                  <Text style={styles.text}>Spider Man</Text>
                </SafeAreaView>
              </TouchableOpacity>
            </SafeAreaView>
          </ScrollView>
          <SafeAreaView style={styles.viewkatagori}>
            <View>
              <TextInput
                onChangeText={text =>
                  this.setState({search: text}, () => this.search())
                }
                placeholder="Cari File"
              />
            </View>
            <FlatGrid
              data={this.state.datatampil}
              renderItem={({item, index}) => (
                <View
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {ID: item.imdbID})
                  }>
                  <View style={styles.kotakkatagori}>
									<Text style={styles.textlist}>{item.Title}</Text>
                  <Text style={styles.textlist}>{item.Year}</Text>
									</View>
									<Button title='lihat detail' onPress={() =>
                    this.props.navigation.navigate('Detail', {ID: item.imdbID})
                  }/>
                </View>
              )}
            />
          </SafeAreaView>
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
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.1,
    overflow: 'hidden',
    // paddingBottom: 5
  },
  judul: {
    flex: 0.9,
    backgroundColor: '#fff',
    // paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
		// flex: height*0.
    // flex:0.1,
    // backgroundColor:'red'
		// height:height*0.1
		marginHorizontal:width*0.03,
  },
  listkatagori: {
    flexDirection: 'row',
    // flex:0.2,
    // justifyContent:'center',
    // alignItems:'center'
    // backgroundColor:'red'
  },
  katagori: {
    flex: 0.9,
  },
  kotaklist: {
    // padding: 5,
    borderWidth: 0.2,
    marginHorizontal: width*0.01,
    marginBottom: 5,
    // justifyContent:'center',
    alignItems: 'center',
		height:height*0.15,
		marginTop:height*0.02,
  },
  img: {
		alignSelf:'center',
    height: height*0.1,
    width: width*0.3,
    // alignSelf:'center'
  },
	text:{
		alignSelf:'center',
		color:'black'
	},
  viewkatagori: {
    flex: height,
		marginHorizontal:width*0.02,
  },
	kotakkatagori:{
		height:height*0.07,
	},
	textlist:{
		color:'black'
	}
});
