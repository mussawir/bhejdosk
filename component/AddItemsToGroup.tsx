import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import {View, TouchableOpacity, Image, Text, FlatList, SafeAreaView, TextInput, Modal, ActivityIndicator,ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from './ButtonAit';
import Style from "../assets/css/AddGroupItemStyle";
import BottomTabView from "../tabView/BottomTabView";
import axios from 'react-native-axios';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from 'react-native-element-dropdown/src/TextInput/styles';

let colors = ['#F6F6F6', '#FFFFFF'];
export default function AddItemsToGroup({ route }) {
const navigation = useNavigation();
const [text, onChangeText] = React.useState("");
const [getProductList, setProductList] = useState(null);
const [showsearchinput, setshowsearchinput] = useState(false);
const shopInfo = useSelector(state => state.userReducer);
const shop_id = shopInfo.user.id;
const [modalVisible, setModalVisible] = useState(true);
const group_id = route.params.group_id;
const group_image = route.params.group_image;
const group_discription = route.params.group_discription;
const group_name = route.params.group_name;
const ShowInput = () =>{
  setshowsearchinput(true);
}
const Hideinput = () =>{
  setshowsearchinput(false);
}

useEffect(()=>{
  setshowsearchinput(false);
},[])

useEffect(() => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/item/list/all/${shop_id}`).then(async (res) => {

    console.log("useEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffect",typeof(res.data.data));
      const response = await res.data.data;
      if (res.data.data == null) {
        setProductList(null);
      } else {
        setProductList(response);
        setModalVisible(false);
      }
  });
},[]);

const AddItems = (item_id) => {
    axios.get(`https://bhejdo.net/api/v1/shopkeeper/group/add/items/${group_id}/${item_id}`).then(async (response) => {
        //   const response = await res.data.data;

          console.log("AddItemsAddItemsAddItemsAddItemsAddItemsAddItemsAddItems",response);
          if (response.data.status == 200) {
            showToast();
          } else if(response.data.status == 300) {

            setModalVisible(false);
            showToastWhenItemAlreadyInsert();
          }
      }); 
}

const showToast = () => {
    ToastAndroid.showWithGravity(
        "Your Item Has Been Added Successfully!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
    navigation.navigate('GroupDetail',{id:group_id,name:group_name,image:group_image,discription:group_discription});
  };

  const showToastWhenItemAlreadyInsert = () => {
    ToastAndroid.showWithGravity(
        "Your Item Already In This Group!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
  };
  return (
    <SafeAreaView style={Style.Maincontainer}>

    <View style={Style.heading}>
      <Text style={Style.headtxt}>Search products list</Text>
    </View>

    {showsearchinput == false ? (
      <View style={Style.mainsearch}>
      <TouchableOpacity onPress={ShowInput}>
        <Image source = {require("../assets/icons/search.png")} style={Style.color}/>
        </TouchableOpacity>
      </View>
      ):(
        <View></View>
      )}
    
    {showsearchinput == true ? (
      <View style = {Style.maintype}>
      <TextInput
        style={Style.input}
        onChangeText={onChangeText}
        value={text}
        clearButtonMode="always"
        keyboardType="email-address"
        placeholder="  Search..."
    
      /> 
      <TouchableOpacity style={{right:30,justifyContent:"center"}} onPress={Hideinput}>
        <Image source = {require("../assets/icons/cross.png")} style={Style.color}/>
      </TouchableOpacity>
         </View> 
      ):(
        <View></View>
      )}

  <View style={{flex: 10,}}>
  <FlatList
      data={getProductList}
      numColumns={1}
      renderItem={({ item ,index}) => (
      <View style={Style.Productdetailcontainer}>
      <View style={{flex: 1, flexDirection: "column", backgroundColor: "#FFFFFF", width: null, height: 90}}>
      <View style={Style.pDetailmainSubCon2}>
      <View style={Style.borderimg}>
        <Image source={{uri:item.main_image}}  style={Style.ProdImage} />
      </View>

      <View style={Style.ProductsubCon}>
        <Text style={Style.prodtxt}>{item.name}</Text>
        <Text style={Style.Pricetxt}>Rs:{item.discount}</Text>
        <Text style={Style.Pricetxt1}>Rs:{item.price}</Text>
      </View>

    <View style={Style.Product_Icon}>
        <TouchableOpacity onPress={() => AddItems(item.id)}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", alignSelf: 'center',  alignItems: "center",}}>
            <Image source={require("../assets/icons/plus.png")} style={{tintColor: "#047FB8"}} />
          </View>
        </TouchableOpacity>
      </View>

      </View>           
      </View>
      </View>
  )}
  />
  </View>

  <View>
    <BottomTabView />
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
              
      );
    }