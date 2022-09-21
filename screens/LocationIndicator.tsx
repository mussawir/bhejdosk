import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, BackHandler, Modal, Image, ToastAndroid,ActivityIndicator } from 'react-native';
import Geolocations from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setGeoLocation } from '../redux/action/actions';
import ModalStyle from '../assets/css/ModalLoaderStyle';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import Style from "../assets/css/LocationStyle";

const LocationIndicator = () => {
const navigation = useNavigation();
const [getArea, setArea] = useState(null);
const [getcity, setCity] = useState(null);
const [modalVisible, setModalVisible] = useState(true);
const [getIsMatch, setIsMatch] = useState(0);
const dispatch = useDispatch();
const [time, updatetime] = useState(null);
const [getlatitude, updatelatitude] = useState(null);
const [getlongitude, updatelongitude] = useState(null);
const userInfo = useSelector(state => state?.areaReducer);
const cities = userInfo?.city;
const [subCityData, setSubCityData] = useState([]);

const geoLocation = geolocation => dispatch(setGeoLocation(geolocation));
const get_allow_user_location = () => {
  
  Geolocation.getCurrentPosition(
    (position) => {
      var timestamp = position.timestamp;
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log("latitudelatitudelatitudelatitudelatitude",latitude,longitude);
      updatetime(timestamp);
      updatelatitude(latitude);
      updatelongitude(longitude);
      if (latitude != null && longitude != null) {
        console.log("success");
          Axios.get(`https://api.opencagedata.com/geocode/v1/json?key=fc8b5c9c5e5d4b8aad1ee073c6ab4f25&q=${latitude}+${longitude}&pretty=1&no_annotations=1&limit=1`).then(async (res) => {
          const [response] = res.data.results;
          console.log("iffffffffffffffffff",response.components.city);
          // setArea(response.components.neighbourhood);
          setCity(response.components.city);
          setModalVisible(false);
    
          if(response.components.city === userInfo.selectManuallySingleCity.name){

            setIsMatch(0);
            // setModalVisible(true);
            // alert('success'+response.components.neighbourhood + areaInfo.selectManuallySubarea.name);
            
          }else{
            setIsMatch(1);
            showToastCity();
            // alert('failed'+response.components.neighbourhood + areaInfo.selectManuallySubarea.name);
          }
          // const fetchArea = response?.components?.neighbourhood;
          const fetchCity = response?.components?.city;
          const passgeolocation = { fetchCity };  
          geoLocation(passgeolocation); 
        }).catch((error) => {
        });
      }
    },
    (error) => {
      // See error code charts below.
      Geolocations.getCurrentPosition(
        (position) => {
          var timestamp = position.timestamp;
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          updatetime(timestamp);
          if (latitude != null && longitude != null) {
            console.log("success");
              Axios.get(`https://api.opencagedata.com/geocode/v1/json?key=fc8b5c9c5e5d4b8aad1ee073c6ab4f25&q=${latitude}+${longitude}&pretty=1&no_annotations=1&limit=1`).then(async (res) => {
            const [response] = res.data.results;
            console.log("iffffffffffffffffff",response);
              // setArea(response.components.neighbourhood);
              setCity(response.components.city);
              setModalVisible(false);

              if(response.components.city === userInfo.selectManuallySingleCity.name){
                setIsMatch(0);
                // setModalVisible(true);
              }else{
                setIsMatch(1);
                showToastCity();
              }
              // const fetchArea = response?.components?.neighbourhood;
              const fetchCity = response?.components?.city;
              const passgeolocation = { fetchCity };  
              geoLocation(passgeolocation);
            }).catch((error) => {
            });
          }
          console.log("secondlongitudesecondlongitudesecondlongitudesecondlongitude",latitude,longitude);
          updatelatitude(latitude);
          updatelongitude(longitude);
          var date = new Date(timestamp);
          var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        },
        (error) => {
          // See error code charts below.
          console.log("error", error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
}

const showToastCity = () => {
  ToastAndroid.showWithGravity(
      "Please Select The Correct City!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
  navigation.navigate("City");
}

// useEffect(() => {
//   setTimeout(() => {
//     navigation.navigate("Shopregistrationmessage");
//   },2000,[]
// )});

useEffect(() => {
  if(cities){
    setSubCityData(cities);
  }
},[]);

useEffect(() => {
  get_allow_user_location();
},[]);

useFocusEffect(
  React.useCallback(() => {
    const onBackPress = () => {
      return true;
    };
    BackHandler.addEventListener(
      'hardwareBackPress', onBackPress
    );
    return () =>
      BackHandler.removeEventListener(
        'hardwareBackPress', onBackPress
      );
  }, [])
);
return(

    <SafeAreaView style={Style.container}>

    {getlatitude != null && getlongitude != null ? (
    <>
    <View style={Style.content}>
      <Text style={Style.content_text1}>Comfirmation</Text>
      <Text style={Style.content_text2}>Your City</Text>
    </View>

    <View style={Style.logo3}>
      <Image source={require('../assets/icons/Location.png')}/>
    </View>

    <View style={Style.data}>
    {getcity != null ? (
        <Text style={Style.ConfirmText}>{getcity}</Text>
    ) : (
        <Text style={Style.ConfirmText1}>YOUR CORRECT CITY!</Text>
    )}
    </View>

    {getIsMatch != 1 ? (
    <View style={Style.content1}>
        <TouchableOpacity style={Style.btn_touch} onPress={() => navigation.navigate("ShopRegistration")}>
          <Text style={{ textAlign: "center", fontFamily:"PTN75F", color: "#FFFFFF", fontWeight:"700", fontSize:20}}>NEXT</Text>
       </TouchableOpacity>
    </View>
    ):(
    <View></View>
    )}
    </>
    ):(
      <View></View>
    )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={ModalStyle.container}>

          <ActivityIndicator
            size={60}
            color="#FFF"
          />
          <Text style={ModalStyle.text}>Please Wait Checking Your City!</Text>
        </View>

      </Modal>


    </SafeAreaView>
    );
}

export default LocationIndicator;