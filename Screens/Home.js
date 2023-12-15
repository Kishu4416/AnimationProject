
import React from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const images = [
  { id: '1', source: require('../assets/img.jpg') },
  { id: '2', source: require('../assets/img2.jpg') },
  { id: '3', source: require('../assets/img3.jpg') },
  { id: '4', source: require('../assets/img4.jpg') },
  { id: '5', source: require('../assets/img5.jpg') },
];

const Home = ({ navigation }) => {
  return (

    <ParallaxScrollView
      backgroundColor="white"
      parallaxHeaderHeight={responsiveHeight(20)}
      renderForeground={() => (
        <View style={styles.parallaxHeaderContainer}>
          <View style={styles.headercontainer}>
            <TouchableOpacity style={{ left: responsiveWidth(-25) }}>
              <Ionicons name="reorder-two-outline" color={'#037ffc'} size={responsiveFontSize(7)} />
            </TouchableOpacity>
            <TouchableOpacity style={{ left: responsiveWidth(1) }}>
              <Ionicons name="logo-playstation" color={'#037ffc'} size={responsiveFontSize(5)} />
            </TouchableOpacity>
            <TouchableOpacity style={{ left: responsiveWidth(20) }}>
              <Ionicons name="cart-outline" color={'#037ffc'} size={responsiveFontSize(4)} />
            </TouchableOpacity>
            <TouchableOpacity style={{ left: responsiveWidth(23) }}>
              <MaterialIcons name="search" color={'#037ffc'} size={responsiveFontSize(4)} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textname}>GREAT GAMES</Text>
          <Text style={styles.text1}>Coming Soon</Text>
        </View>
      )}
    >
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ImageView', { image: item })}>
            <View style={styles.imageContainer}>
              <Image source={item.source} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.plus}>+</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  parallaxHeaderContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(1)
  },
  textname: {
    color: '#037ffc',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',

  },
  text1: {
    fontSize: responsiveFontSize(3.5),
    color: 'black',
    marginBottom: responsiveHeight(5)

  },
  imageContainer: {
    marginTop: responsiveHeight(3),
    marginBottom:responsiveHeight(3),
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: responsiveHeight(9),
    },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 22,
    position: 'relative',
    marginHorizontal: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: responsiveWidth(90),
    height: responsiveHeight(50),
    borderRadius: 14,
    resizeMode:'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: responsiveHeight(3),
    right: responsiveHeight(3),
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveHeight(4),
    backgroundColor: '#037ffc',
    alignItems: 'center',
  },
  plus: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'white',

  },
});

export default Home;
