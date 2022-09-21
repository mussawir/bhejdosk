import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Text, TextInput,SafeAreaView } from 'react-native';
import Modal from './Modal';
import Style from '../assets/css/HeadrStyle';
import { setSearchBar } from '../redux/action/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function Headr({props}) {
const name = props.name;
const dispatch = useDispatch();
const setsearchbar = type => dispatch(setSearchBar(type));
const [text, onChangeText] = React.useState("");
const [showsearchinput, setshowsearchinput] = useState(false);

  const ShowInput = () => {
    setsearchbar(true);
  }

  useEffect(() => {
    setshowsearchinput(false);
  }, [])
  return (
    <SafeAreaView style={Style.Maincontainer}>

    <View style={Style.maintitle}>
            <Image source={require("../assets/shop/shop-general.png")} />
            <Text style={Style.titletxt}>{name}</Text>
         </View>

      {/* // center */}
      <View style={Style.mainlogo}>
        <Image source={require("../assets/icons/headericon.png")} />
      </View>


        <View style={Style.mainsearch}>
          <TouchableOpacity onPress={ShowInput}>
            <Image source={require("../assets/icons/search.png")} style={Style.iconcolor} />
          </TouchableOpacity>
        </View>

      <View style = {Style.modal}>
        <TouchableOpacity>
          <Modal />
        </TouchableOpacity>     
      </View>

    </SafeAreaView>
  );
}