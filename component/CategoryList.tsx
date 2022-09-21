import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image,ActivityIndicator,Text,FlatList,SafeAreaView,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from '../component/ButtonAit';
import Style from '../assets/css/CategorylistStyle';
import axios from 'react-native-axios';
import BottomTabView from "../tabView/BottomTabView";
import { useDispatch, useSelector } from 'react-redux';

let colors = ['#F6F6F6', '#FFFFFF'];
export default function Orderdetails() {
const navigation = useNavigation();
const [checked, setChecked] = React.useState(false);
const [getCategoryList, setCategoryList] = useState(null);
const [getModalVisible, setModalVisible] = useState(true);
const shopInfo = useSelector(state => state.userReducer);
const shop_id = shopInfo.user.id;

useEffect(() => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/category/list/${shop_id}`).then(async (res) => {

    console.log("useEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffect",typeof(res.data.data));
      const response = await res.data.data;
      if (res.data.data == null) {
        setCategoryList(null);
      } else {
        
        setCategoryList(response);
        setModalVisible(false);
      }
  });
},[]);
  return (
    <SafeAreaView style={Style.Maincontainer}>

    <View style={Style.mainviewadd1}>
      <View style={Style.total1}>
        <Text style={Style.totaltxt}>CATEGORIES LIST</Text>
      </View>    
    </View>
  
    <View style={{flex: 2}}>
    <FlatList
    data={getCategoryList}
    numColumns={1}
    renderItem={({ item ,index }) => (
    <View style={Style.Productdetailcontainer}>
      <View style={{flex: 1,  flexDirection: "column", backgroundColor: colors[index % colors.length]}}>
    <View style={Style.pDetailmainSubCon1}>
    <View style={Style.borderimg}>
      <Image source={{uri: item.image}} style={Style.ProdImage} />
    </View>
    <View style={Style.ProductsubCon2}>
      <View style={Style.textP}>
        <Text style={Style.prodtxt}>{item.name}</Text>
      </View>
      <TouchableOpacity style={Style.btn_touch}>
      <View style={Style.quantity}>
        <Image source = {require("../assets/icons/edit.png")} />
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={Style.btn_touch}>
      <View style={Style.quantity}>
          <Image source = {require("../assets/icons/plus.png")} />
      </View>
      </TouchableOpacity>
    </View>

    </View>
    </View>           
    </View>
    )}
    />
    </View>
  
    {/* <View style={Style.btn}>
      <TouchableOpacity onPress = {()=> {setModalVisible(true), navigation.navigate("AddItem")}}>
        <ButtonAit props={{name:"ADD NEW CATEGORY",fontsize:16,fontweight:"800"}}></ButtonAit>
      </TouchableOpacity>
    </View> */}

    <View style={{flex: 0.2, justifyContent: "center", }}>
      <BottomTabView />
    </View>

    {getModalVisible == true ? 
      <Modal
      animationType="slide"
      transparent={true}
      visible={getModalVisible}
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
      );
    }



