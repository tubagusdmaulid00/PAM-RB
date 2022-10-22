import React, {Component} from 'react';
import {StyleSheet,Text,SafeAreaView,View,ScrollView,TextInput,TouchableOpacity,StatusBar } from 'react-native';


const Home = ({navigation}) => {  
   const [text, handleText] = React.useState({ 
    keberangkatan: '',
    kedatangan: '',
    tanggal: '',
  });

  const getText = (nameVar) => {
    return (val) => {
      handleText({ ...text, [nameVar]: val });
      console.log(text);
    }
  }  
  
  return (
    <>
      <StatusBar barStyle="hidden"/>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Tugas 1</Text>
          <Text style={styles.headline}>Pencarian Jadwal</Text>
          <View style={styles.main}>
            <View style={styles.group}>
              <Text style={styles.title}>Bandara Asal</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('keberangkatan')}
                  value={text.keberangkatan} placeholder="Bandara Asal"/>
              </View>              
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Bandara Tujuan</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('kedatangan')}
                  value={text.kedatangan} placeholder="Bandara Tujuan"/>
              </View>              
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Tanggal Keberangkatan</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('tanggal')}
                  value={text.tanggal} placeholder="Tanggal Keberangkatan"/>
              </View>              
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Details', {text})}>
                <Text style={styles.buttonText}>Mari Berangkat!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.copyright}>Tubagus D. Maulid - 118140087</Text>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#f18534',
  },
  header: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 5,
    textAlign: 'center',
    marginTop: 20,    
  },
  headline: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  main: {
    margin: 40,  
    marginTop: 70,  
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginVertical: 100,
  },
  group: {
    marginBottom: 30,
  },
  search: {
    marginLeft:15,    
    flexDirection: 'row', 
    justifyContent: 'center',   
    alignItems: 'center',
  },
  iconcalendar: {
    paddingRight: 5,
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e84f1f',
  },
  input: {
    borderWidth: 1,
    borderColor: '#283593',
    borderRadius: 50,
    color: '#283593',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    width: 250,
    flex: 1,
  },
  button: {
    backgroundColor: '#ff3d00',
    borderRadius: 40,
    marginHorizontal: 50,
    paddingVertical: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  copyright: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default Home;