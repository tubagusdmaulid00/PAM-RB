import React, {useEffect} from 'react';
import { StyleSheet, ImageBackground, Image, View, Dimensions,Text,StatusBar} from 'react-native';
import {ImageSplash} from '../../assets';

const Splash = ({navigation}) => {
 useEffect(() => {
     setTimeout(() => {
       navigation.replace('Home');
     }, 3000);
  }, [navigation]);

  return (
    <View style={styles.background}>
    <StatusBar
        hidden={true}
         />
		<ImageBackground source={ImageSplash} resizeMode='contain' style={styles.background} />
    </View>
  );
};

export default Splash;

const {height} = Dimensions.get ('screen');
const {width} = Dimensions.get ('screen');


const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
});