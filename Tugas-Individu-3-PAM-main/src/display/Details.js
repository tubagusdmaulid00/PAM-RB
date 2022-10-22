import React, { Component } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar, View, FlatList,} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { JADWAL, MASKAPAI, BANDARA } from '../database/db.js';

const Details = ({ route, navigation }) => {
  const data = route.params.text;
  const kedatanganId = BANDARA.find(item => item.bandara_nama === data.kedatangan).bandara_kode;
  const keberangkatanId = BANDARA.find(item => item.bandara_nama === data.keberangkatan).bandara_kode;
  const listAirplane = JADWAL.filter(item =>
    item.bandara_kode_keberangkatan === keberangkatanId &&
    item.bandara_kode_tujuan === kedatanganId &&
    item.jadwal_keberangkatan === data.tanggal);
  console.log(listAirplane);

  return (
    <>
      <StatusBar barStyle="hidden"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.topNavigation}>
          <View style={styles.back}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Kembali</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.header}>Tugas 1</Text>
            <Text style={styles.headline}>Pencarian Jadwal</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.search}>Hasil Pencarian</Text>
        </View>
        <FlatList
          data={listAirplane}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity style={styles.Details}>
                <View style={styles.airport}>
                  <Text style={styles.text}>
                    {BANDARA.find(theItem => theItem.bandara_kode === item.bandara_kode_keberangkatan).bandara_nama}
                  </Text>
                  <Text style={styles.text}>
                    {BANDARA.find(theItem => theItem.bandara_kode === item.bandara_kode_tujuan).bandara_nama}
                  </Text>
                </View>
                <View style={styles.time}>
                  <View style={styles.maskapai}>
                    <Text style={styles.text}>
                      {MASKAPAI.find(theItem => theItem.maskapai_id === item.maskapai_id).maskapai_nama}
                    </Text>
                  </View>
                  <Text style={styles.text}>
                    {item.jadwal_keberangkatan}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.jadwal_id}
        >

        </FlatList>

        <Text style={styles.copyright}>Tubagus D. Maulid - 118140087</Text>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: '#f18534',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  button: {
    backgroundColor: '#ff3d00',
    borderRadius: 40,
    elevation: 2,
    marginTop: 40,
    marginHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center',
  },
  headline: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 40,
  },
  search: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  card: {
    marginHorizontal: 30,
  },
  Details: {
    backgroundColor: '#f18534',
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 10,
  },
  airport: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maskapai: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconPlane: {
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  copyright: {
    color: '#283593',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
});


export default Details;