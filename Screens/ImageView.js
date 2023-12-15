import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from "react-native-animatable";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';



const ImageView = ({ route }) => {
  const { image } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ left: responsiveWidth(5) }}>
          <Ionicons name="reorder-two-outline" color={'white'} size={responsiveFontSize(6)} />
        </TouchableOpacity>
        <TouchableOpacity style={{ left: responsiveWidth(33) }}>
          <Ionicons name="logo-playstation" color={'white'} size={responsiveFontSize(5)} />
        </TouchableOpacity>
        <TouchableOpacity style={{ left: responsiveWidth(55) }}>
          <Ionicons name="cart-outline" color={'white'} size={responsiveFontSize(3.5)} />
        </TouchableOpacity>
        <TouchableOpacity style={{ left: responsiveWidth(60) }}>
          <MaterialIcons name="search" color={'white'} size={responsiveFontSize(3.5)} />
        </TouchableOpacity>
      </View>

      <View style={styles.imagebox}>
        <Image
          source={image.source} style={styles.image} />
        <View style={styles.overlayback}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.textcontainer}>
            <MaterialIcons name="arrow-back-ios" color={'white'} size={responsiveFontSize(3)} />
            <Text style={{ color: 'white', fontSize: responsiveFontSize(2) }}>BACK</Text>
          </TouchableOpacity>
        </View>
        <Animatable.View
          animation="zoomIn"
          style={styles.overlay}>
          <Ionicons name="game-controller" color={'white'} size={responsiveFontSize(4)} />
          <Text style={styles.text1}>GAMES</Text>
        </Animatable.View>
      </View>

      <Animatable.View
        animation="zoomIn"
        duration={100}
      >
        <ActivityIndicator size={responsiveFontSize(5)} color={'white'} />
      </Animatable.View>
      <TouchableOpacity style={styles.btnbox}>
        <Text style={styles.text2}>PRE - ORDER NOW</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(1),
    alignContent: 'space-around'
  },
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(70),
    resizeMode: 'cover',
  },
  imagebox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsiveHeight(1)
  },
  overlay: {
    position: 'absolute',
    top: responsiveHeight(2),
    right: responsiveHeight(3),
    width: responsiveHeight(8),
    height: responsiveHeight(8),
    borderRadius: responsiveHeight(4),
    backgroundColor: '#037ffc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayback: {
    position: 'absolute',
    top: responsiveHeight(2),
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: responsiveFontSize(1.2),
    fontWeight: 'bold',
    color: 'white',
    bottom: responsiveHeight(0.5)
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:responsiveFontSize(1.6)
  },
  textcontainer: {
    marginLeft: responsiveWidth(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnbox: {
    backgroundColor: '#037ffc',
    padding: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(80),
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveHeight(5),
    marginVertical: responsiveWidth(2),
  },
});

export default ImageView;