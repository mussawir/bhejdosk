import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text, StyleSheet, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from "./Modal";
import Style from "../assets/css/HeaderStyle";

export default function Header1() {
const navigation = useNavigation();
const [text, onChangeText] = React.useState("");
const [showsearchinput, setshowsearchinput] = useState(false);
const ShowInput = () =>{
  setshowsearchinput(true);
}
const Hideinput = () =>{
  setshowsearchinput(false);
}

useEffect(()=>{
  setshowsearchinput(false);
},[])

  return (
    <View style={Style.Mainheader}>

      {/* // Left */}
      {showsearchinput == false ? (
      <View style={Style.heading}>
        <Text style={Style.headtxt}>Bhej</Text>
        <Text style={Style.headtxt1}>Do</Text>
      </View>
      ):(
        <View></View>
      )}

      {/* // center  */}
      <View style = {Style.logo}>
        <Image source = {require("../assets/icons/headericon.png")}/>
      </View>  

      {/* // Right */}
      {showsearchinput == false ? (
      <View style={Style.searchicon}>
      <TouchableOpacity onPress={ShowInput}>
        <Image source = {require("../assets/icons/search.png")} style={Style.color}/>
        </TouchableOpacity>
      </View>
      ):(
        <View></View>
      )}
      
        {showsearchinput == true ? (
          <View style = {Style.textinput}>
          <TextInput
            style={Style.input}
            onChangeText={onChangeText}
            value={text}
            clearButtonMode="always"
            keyboardType="default"
            placeholder="  Search..."
        
          /> 
        <TouchableOpacity style={Style.crossTouch} onPress={Hideinput}>
        <Image source = {require("../assets/icons/cross.png")} style={Style.color}/>
        </TouchableOpacity>
           </View> 
        ):(
          <View></View>
        )}
    
    <View style = {Style.modal}>
        <TouchableOpacity>
          <Modal />
        </TouchableOpacity>     
      </View>

    </View>
  );
}