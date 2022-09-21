import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, BackHandler, ScrollView, Image, Modal, ActivityIndicator, TextInput,ToastAndroid } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Axios from 'react-native-axios';
import Style from "../assets/css/RegistrationStyle";
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setGeoLocation, getStores, SetUserLoggin, setManuallySingleCity } from '../redux/action/actions';
import Pickerarea from "../component/Pickerarea";
import Pickersubarea from '../component/Pickersubarea';
import PickerCity from '../component/PickerCity';
import Geolocations from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
import ButtonAit from "../component/ButtonAit";
import ModalStyle from "../assets/css/ModalLoaderStyle";

interface Props {
  phonenumber: string,
  shop_onwer: string,
  shop_name: string,
  city: Int32Array,
  address: string,
  checked: false,
}

const ShopRegistration = ({ navigation, Props }) => {
const dispatch = useDispatch();
const fetchBooks = () => dispatch(getStores());
const [getarea, setArea] = useState(null);
const [getcity, setCity] = useState(null);
const [getlatitude, updatelatitude] = useState(null);
const [getlongitude, updatelongitude] = useState(null);
const [phonenumber, setPhonenumber] = useState(Props);
const [shop_owner, setshop_owner] = useState(Props);
const [shop_name, setshop_name] = useState(Props);
const [checked, setChecked] = React.useState(false);
const [getIsMatch, setIsMatch] = useState(0);
const [modalVisible, setModalVisible] = useState(false);
const areaInfo = useSelector(state => state?.areaReducer);
const areas = areaInfo?.area;
const subareas = areaInfo?.subarea;
const cities = areaInfo?.city;
// console.log("subareassubareassubareassubareassubareassubareassubareas",areaInfo.selectManuallySingleCity.name);
const [areaData, setAreaData] = useState([]);
const [subAreaData, setSubAreaData] = useState([]);
const [subCityData, setSubCityData] = useState([]);
const updateSubAreaData =  (subAreaId) => {
const filterData = (subareas || []).length > 0 && subareas?.filter((item) => item?.area_id === subAreaId );
  setSubAreaData(filterData);
};
const [time, updatetime] = useState(null);
const userLoged = user => dispatch(SetUserLoggin(user));
const userInfo = useSelector(state => state.areaReducer);
const Items =  areaInfo;
let fetchdata = Items;
const Address = phonenumber + ', ' + shop_owner + ', ' + shop_name + ', ' + userInfo.selectManuallySingleCity;
console.log(Address);
// console.log("userInfouserInfouserInfouserInfouserInfouserInfo",userInfo.selectManuallySingleArea.id);
// console.log("selectManuallySubareaselectManuallySubareaselectManuallySubareaselectManuallySubarea",userInfo.selectManuallySubarea.id);
const ShopkeeperReg = () => {
    const formData = new FormData();
    console.log("formDataformDataformDataformDataformData",formData);
    formData.append(
      "shop_owner", shop_owner
    );
    formData.append(
      "shop_name", shop_name
    );
    formData.append(
      "address", Address
    );
    formData.append(
      "city", userInfo.selectManuallySingleCity.id
    );
    formData.append(
      "phonenumber", phonenumber
    );
    formData.append(
      "area", userInfo.selectManuallySingleArea.id
    );
    formData.append(
      "sub_area", userInfo.selectManuallySubarea.id
    );
  
    Axios({
      url: 'https://bhejdo.net/api/v1/shopkeeper/registration',
      method: 'POST',
      data: formData
    }).then(function (response) {
      console.log("response.data.statusresponse.data.statusresponse.data.statusresponse.data.status",response);
      if (response.data.status == 200) {
        // userLoged(response.data.data);
        showToast();
    }
    else {
      showToastShopkeeperAlreadyRegistered();
    }
    }).catch((error) => {
      //Network error comes in
      console.log("errorerrorerrorerror", error);
    });
  }

  const showToast = () => {
    ToastAndroid.showWithGravity(
        "Shopkeeper Registered Successfully!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
    navigation.navigate('Shopregistrationmessage');
  };

  const showToastShopkeeperAlreadyRegistered = () =>{
      ToastAndroid.showWithGravity(
        "Shopkeeper Already Registered",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
    navigation.navigate('Shopregistrationapprovemessage');
  };

  useEffect(() => {
    if(areas){
      setAreaData(areas);
    }
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

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
    <SafeAreaView style={Style.container}>

    <View style={Style.heading}>
      <View style={Style.mainhead}>
          <Text style={Style.heading_txt}>REGISTER</Text>
      </View>
      <View style={Style.mainhead}>
        <Text style={Style.heading_txt1}>HumAwaz advertise your business and helps you in growing your business</Text>
      </View>
    </View>

     <View style={Style.inputfieldsview}>

      <View style={Style.inputfieldscontainer}>
        <Image source = {require("../assets/icons/Phone.png")} style={Style.icon}/>
        <TextInput
        style={Style.inputTxt}
        placeholder="YOUR WHATSAPP NUMBER"
        placeholderTextColor="#047FB8"
        keyboardType="decimal-pad"
        autofocus={true}
        maxLength={11}
        onChangeText={value=> {setPhonenumber(value);
        // console.log('setPhonenumber', value)
        }}
        />
      </View>
      <Text style={Style.underlineInput}></Text>

      <View style={Style.inputfieldscontainer}>
        <Image source = {require("../assets/icons/person.png")} style={Style.icon}/>
        <TextInput
        style={Style.inputTxt}
        placeholder="YOUR NAME"
        placeholderTextColor="#047FB8"
        keyboardType="default"
        maxLength={20}
        onChangeText={value=> {setshop_owner(value);
        // console.log('setshopowner', value)
        }}
        />
      </View>
      <Text style={Style.underlineInput}></Text>


      <View style={Style.inputfieldscontainer}>
        <Image source = {require("../assets/icons/shop.png")} style={Style.icon}/>
          <TextInput
          style={Style.inputTxt}
          placeholder="YOUR SHOP NAME"
          placeholderTextColor="#047FB8"
          keyboardType="default"
          maxLength={25}
          onChangeText={value=> {setshop_name(value);
          // console.log('setshopname', value)
          }}
          />
      </View>
      <Text style={Style.underlineInput}></Text>

    <View style={Style.mainarea}>
      {/* <View style={Style.area}>
        <PickerCity cities={subCityData} />
      </View>
      <Text style={Style.underlineInput2}></Text> */}
      <View style={Style.area}>
        <Pickerarea areas={areaData} updateSubAreaData={updateSubAreaData} />
      </View>
      <Text style={Style.underlineInput2}></Text>

      <View style={Style.area}>
        <Pickersubarea subAreaData={subAreaData} />
      </View>
        <Text style={Style.underlineInput2}></Text>
      </View>
    </View>

    <View style={Style.Mainphone}>
      <View style={Style.phonetxt}>
        <Image source = {require("../assets/icons/Phone.png")} style={Style.phonetxtImage}/>
        <Text style={Style.phonetxt0}>Please Register From Shop</Text>
      </View>
     </View>

     {/* <View style={Style.data}>
        {userInfo.selectManuallySingleCity.name != null ? (
          <Text style={Style.ConfirmText}>{userInfo.selectManuallySingleCity.name}</Text>
        ) : (
          <Text style={Style.ConfirmText1}>YOUR GEO LOCATION</Text>
        )}
          <Text style={Style.underlineInput1}></Text>
      </View> */}


     <View style={Style.bottomContainer}>
     <View style={Style.btn}>
       <TouchableOpacity style={Style.btn_touch} onPress={() => ShopkeeperReg()}>
        <ButtonAit props={{ name: "REGISTER NOW", fontsize: 24, fontweight: "800", fontFamily: "Nunito Sans", color: "#FFFFFF"  }} navigation={navigation}></ButtonAit>
       </TouchableOpacity>
     </View>
     </View>


     <View style={Style.bottomContainer}>
     <View style={Style.phonetxt1}>
      
      <View>
       <Checkbox
        uncheckedColor="#1765AD"
        color="#1765AD"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
        setChecked(!checked);
      }}
    />
      </View>
  
  <View style={Style.checkboxContainer}>
    <Text style={Style.checkboxTxt1}>By registering with HumAwaz I am agreed with the Terms & Conditions</Text>
  </View>

     </View>
    </View>

  <View style={Style.mainphone1}>
    <TouchableOpacity onPress={() => {navigation.navigate('ShopOwnerLogin')}}>
      <View style={Style.phonetxt2}>
        <Image source={require("../assets/icons/customer.png")} style={Style.phonetxtImage1} />
        <Text style={Style.content2_text1}>Login</Text>
      </View>
    </TouchableOpacity>
  </View>

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
    </ScrollView>
  );
}
export default ShopRegistration;

