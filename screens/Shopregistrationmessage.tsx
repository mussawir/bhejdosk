import React, {useState,useEffect} from 'react';
import {View, Text, Image, TouchableOpacity,ToastAndroid } from 'react-native';
import Style from "../assets/css/ShopMessageStyle";
import { useNavigation } from '@react-navigation/native';
import Splashscreen from './Splashscreen';

const Shopregistrationmessage = () => {
const navigation = useNavigation();

// useEffect(() => {
//   setTimeout(() => {
//     navigation.navigate("Splashscreen");
//   },2000,[]
// )});

  return (
  <View style={Style.maincontainer}>
    <View style={Style.content}>
      <Text style={Style.text}>REGISTER YOUR</Text>
      <Text style={Style.text1}> SHOP</Text>
    </View>

    <View style={Style.mainview}>
      <Text style={Style.maintext}>Thank you for registering your shop we will contact you soon to get more information</Text>
    </View>

  </View>
   
  );
};

export default Shopregistrationmessage;