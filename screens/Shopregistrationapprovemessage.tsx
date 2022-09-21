import React, {useState,useEffect} from 'react';
import {View, Text, Image, TouchableOpacity,ToastAndroid } from 'react-native';
import Style from "../assets/css/ShopMessageStyle";
import { useNavigation } from '@react-navigation/native';
import Splashscreen from './Splashscreen';

const Shopregistrationapprovemessage = () => {
const navigation = useNavigation();

useEffect(() => {
  setTimeout(() => {
    navigation.navigate("ShopOwnerLogin");
  },3000,[]
)});

  return (
  <View style={Style.maincontainer}>
    <View style={Style.content}>
      <Text style={Style.text1}>REGISTER YOUR</Text>
      <Text style={Style.text1}> SHOP</Text>
    </View>

    <View style={Style.mainview}>
      <Text style={Style.maintext}>your shops is already registered and approved please go to login</Text>
    </View>

  </View>
   
  );
};

export default Shopregistrationapprovemessage;