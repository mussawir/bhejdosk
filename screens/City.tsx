import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Style from "../assets/css/CityStyle";
import ButtonAit from '../component/ButtonAit';
import { getArea, getSubarea, getCity} from '../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import PickerCity from '../component/PickerCity';

const City = ({ navigation }) => {
  const [getarea, setArea] = useState(null);
  const [getcity, setCity] = useState(null);
  const areaInfo = useSelector(state => state?.areaReducer);
  const citys = areaInfo?.city;
  const [subCityData, setSubCityData] = useState([]);

  useEffect(() => {
    if(citys){
      setSubCityData(citys);
    }
  },[]);

  return (
    <SafeAreaView style={Style.container}>

      <View style={Style.content3}>
        <Text style={Style.content3_text1}>SELECT YOUR CURRENT</Text>
        <Text style={Style.content3_text1}>CITY</Text>
        <Text style={Style.content3_text2}>FOR CUSTOMER DELIVERY</Text>
      </View>

      <View style={Style.logo3}>
        <Image source={require("../assets/icons/Location.png")} />
      </View>

      <View style={{marginTop: 15}}>
        <PickerCity cities={subCityData} />
      </View>

      <View style={Style.btn12}>
        <TouchableOpacity style={Style.btn_touch} onPress={() => navigation.navigate('LocationIndicator')}>
          <ButtonAit props={{ name: "NEXT", fontsize: 24, fontweight: "800", fontFamily: "Nunito Sans", color: "#FFFFFF" }} navigation={navigation}></ButtonAit>
        </TouchableOpacity>
      </View>

      {/* <View style={Style.mainphone}>
        <TouchableOpacity onPress={() => {navigation.navigate('CustomerLogin',{redirectfrom:'LocationIndicator'})}}>
          <View style={Style.phonetxt}>
            <Image source={require("../assets/icons/customer.png")} style={Style.phonetxtImage} />
            <Text style={Style.content2_text}>Login</Text>
          </View>
        </TouchableOpacity>
      </View> */}

      {/* <View style={{flex: 0.2, flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
        <Text style={Style.content3_text3}>Open your shop and start receiving orders</Text>
        <TouchableOpacity style={Style.btn_touch1} onPress={() => navigation.navigate('ShopRegistration')}>
          <ButtonAit props={{ name: "START", fontsize: 14, fontweight: "800", fontFamily: "Nunito Sans", color: "#047FB8" }} navigation={navigation}></ButtonAit>
        </TouchableOpacity>
      </View> */}

    </SafeAreaView>
  );
}
export default City;