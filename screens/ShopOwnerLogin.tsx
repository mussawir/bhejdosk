import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView,Modal,ActivityIndicator} from 'react-native';
import ButtonAit from '../component/ButtonAit';
import Style from "../assets/css/ShoploginStyle";
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { SetUserLoggin } from '../redux/action/actions';
import Axios from 'react-native-axios';

const ShopOwnerLogin = ({ navigation }) => {
  const [getpin, setpin] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [spinner, setspinner] = React.useState(false);
  const [ph_number_error, setPh_number_error] = useState(false);
  const [pin_error, setPin_error] = useState(false);
  const [infoerror, setInfoerror] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const userLoged = user => dispatch(SetUserLoggin(user));
  const getUserInfo = useSelector(state => state.userReducer);
  console.log('ShopOwnerLoginShopOwnerLoginShopOwnerLoginShopOwnerLoginShopOwnerLogin',getUserInfo.user);

  const Login = () => {
    setModalVisible(true);
    setPh_number_error(false);
    setInfoerror(false);
    setPin_error(false);
    const trimPin = getpin.trim();
    const trimPhonenumber = phonenumber.trim();

    if (trimPin === '' && trimPhonenumber === '') {
      setModalVisible(false);
      alert('Enter details to Login!');
    } else {
      console.log("LoginLoginLoginLoginLoginLoginLogin",trimPin,trimPhonenumber);
      Axios.get('https://bhejdo.net/api/v1/shopkeeper/list').then(async (res) => {
        const response = res.data.data;
        const filterPhoneNumber = response.find(response => response.phone_number === trimPhonenumber);
        const filterPin = response.find(response => response.pin === trimPin);

        console.log("filterPinfilterPinfilterPinfilterPinfilterPinfilterPin",filterPin);
        if (filterPhoneNumber !== undefined && filterPin !== undefined) {
          setPhonenumber(trimPhonenumber);
          setpin(trimPin);
          console.log('ififififififiresponseresponseresponseresponseresponse', filterPin);
          userLoged(filterPin);
          setModalVisible(false);
          navigation.navigate('Home');
        } else if (filterPhoneNumber === undefined && filterPin !== undefined) {
          setModalVisible(false);
          setPh_number_error(true);
          setInfoerror(false);
          setPin_error(false);
          setpin(trimPin);
        } else if (filterPin === undefined && filterPhoneNumber !== undefined) {
          setModalVisible(false);
          setPin_error(true);
          setPh_number_error(false);
          setInfoerror(false);
          setPhonenumber(trimPhonenumber);
        } else if (filterPhoneNumber === undefined && filterPin === undefined) {
          setModalVisible(false);
          setInfoerror(true);
          setPin_error(false);
          setPh_number_error(false);
          setPhonenumber(trimPhonenumber);
          setpin(trimPin);
        }
      }).catch((error) => {
      });
    }
  }


  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
    <SafeAreaView style={Style.Maincontainer}>
      <View style={Style.haeding}>
        <Text style={Style.headingtxt}>SHOP </Text>
        <Text style={Style.headingtxt1}>LOGIN</Text>
      </View>

      <View style={Style.logo}>
        <Image source={require("../assets/icons/Login.png")} />
      <View style={Style.arrow}>
        <Image source={require("../assets/icons/Vector.png")} style={Style.logo1} />
        <Image source={require("../assets/icons/Vector.png")} style={Style.logo1} />
      </View>
      </View>

      <View style={Style.Maininput}>
        <View style={Style.input1}>
        <View style={Style.iconimg}>
          <Image source={require("../assets/icons/Phone1.png")} style={Style.icon} />
        </View>
          <TextInput
            style={Style.input2}
            placeholder="YOUR PHONE NUMBER"
            placeholderTextColor="#047FB8"
            keyboardType="decimal-pad"
            autoFocus={true}
            maxLength={11}
            value={phonenumber}
            onChangeText={text => setPhonenumber(text)}
          />
        </View>
        <View>
          <Text style={Style.underlineInput}></Text>
        </View>

        <View style={Style.input1}>
        <View style={Style.iconimg}>
          <Image source={require("../assets/icons/lock.png")} style={Style.icon} />
        </View>
          <TextInput
            style={Style.input2}
            placeholder="PIN NUMBER"
            placeholderTextColor="#047FB8"
            keyboardType="decimal-pad"
            maxLength={4}
            value={getpin}
            onChangeText={text => setpin(text)}
          />
        </View>
        <View>
          <Text style={Style.underlineInput}></Text>
        </View>
      </View>
        {infoerror === true ?
          <View style={Style.info}>
            <Text style={Style.infotxt}>Please Enter The Correct Phone Number And Pin.</Text>
          </View>
        :
        pin_error === true ?
          <View style={Style.info}>
            <Text style={Style.infotxt}>Please Enter The Correct Pin.</Text>
          </View>
        :
        ph_number_error === true ?
          <View style={Style.info}>
            <Text style={Style.infotxt}>Please Enter The Correct Phone Number.</Text>
          </View>
        :
      <View></View>
      }
      <View style={Style.forget}>
        <Text style={Style.forgettxt}>Forgot your Password number.</Text>
        <Text style={Style.forgettxt}>Click here to reset Password</Text>
      </View>

      <View style={Style.btn4}>
        <TouchableOpacity style={Style.btn_touch} onPress={() => Login('Home')}>
          <ButtonAit props={{ name: "LOGIN", fontsize: 18, fontweight: "800" }}/>
        </TouchableOpacity>
      </View>

      
      <View style={Style.Mainlink}>
        <TouchableOpacity style={Style.btn_touch} onPress = {() => navigation.navigate('City')}>
          <Text style={Style.linktxt}>Register Now !</Text>
        </TouchableOpacity>
      </View>

      {modalVisible == true ? 
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={{flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.7)',}}>

        <ActivityIndicator
          size={60}
          color="#FFF"
        />
        <Text style={{ fontSize: 18,
  color: '#FFF',}}>Please Wait</Text>
      </View>

    </Modal>
    :
<View></View>
    }
      

    </SafeAreaView>
    </ScrollView>
  );
};

export default ShopOwnerLogin;