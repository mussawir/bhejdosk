import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Text, View, SafeAreaView, Image,TouchableOpacity} from 'react-native';
import Style from "../assets/css/SplashscreenStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux';
import { getArea, getSubarea, getCity } from '../redux/action/actions';

const Splashscreen = ({ navigation }) => {
const [getNumber ,setNumber] = useState(null);
const dispatch = useDispatch();
const getUserInfo = useSelector(state => state.userReducer);
const userIsLoggin = getUserInfo.user.id;
console.log('SplashscreenSplashscreenSplashscreenSplashscreenSplashscreenSplashscreen',userIsLoggin);
const fetchCity = () => dispatch(getCity());
const fetchArea = () => dispatch(getArea());
const fetchSubarea = () => dispatch(getSubarea());

useEffect(() => {
  fetchCity();
  fetchArea();
  fetchSubarea();
},[]);

useEffect(() => {

setTimeout(() => {
  if(userIsLoggin != undefined){
    navigation.navigate('Home');
  }else{
    navigation.navigate('ShopOwnerLogin');  
  }
},2000,[userIsLoggin]
)});

    return (
      
      <SafeAreaView style={Style.container}>
        
      <View style={Style.logo}>
        <Image source={require("../assets/icons/Icon.png")} />
      </View>

      <View style={Style.titletxt}>
        <Text style={Style.textP}>Bhej</Text>
        <Text style={Style.textC}>do</Text>
      </View>

      <View style={Style.titletxt1}>
        <Text style={Style.textP1}>HOME </Text>
        <Text style={Style.textC1}>DELIVERY</Text>
      </View>

      <View style={Style.titletxt2}>
        <Image source = {require("../assets/icons/shopsplash.png")} />
      <View style={Style.home}>
        <Text style={Style.titletext1}>SHOP</Text>
        <Text style={Style.titletext2}>KEEPER</Text>
      </View>
      </View>

      <View style={Style.titletxt3}>
        <Text style={Style.textP2}>Becho ji bhr ke</Text>
      </View>

      </SafeAreaView>
      
    );
}

export default Splashscreen;


