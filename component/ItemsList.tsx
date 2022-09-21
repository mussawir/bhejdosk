import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import {View, TouchableOpacity, Image, Text, FlatList, SafeAreaView, TextInput, Modal, ActivityIndicator,ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from './ButtonAit';
import Style from "../assets/css/ProductlistStyle";
import BottomTabView from "../tabView/BottomTabView";
import axios from 'react-native-axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBar } from '../redux/action/actions';

let colors = ['#F6F6F6', '#FFFFFF'];
export default function ItemsList({ route }) {
const navigation = useNavigation();
const dispatch = useDispatch();
  const setsearchbar = type => dispatch(setSearchBar(type));
const [text, onChangeText] = React.useState("");
const [getProductList, setProductList] = useState(null);
const [showsearchinput, setshowsearchinput] = useState(false);
const shopInfo = useSelector(state => state.userReducer);
const areaReducerInfo = useSelector(state => state.areaReducer);
const shop_id = shopInfo.user.id;
const [modalVisible, setModalVisible] = useState(true);
const [search, setSearch] = useState('');
const [filteredDataSource, setFilteredDataSource] = useState([]);
const [masterDataSource, setMasterDataSource] = useState([]);

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
        setsearchbar(false);
        setFilteredDataSource(response);
        setMasterDataSource(response);
        setProductList(response);
        setModalVisible(false);
      }
  });
},[route]);


const searchFilterFunction = (text) => {
  // Check if searched text is not blank
  if (text) {
    // Inserted text is not blank
    // Filter the masterDataSource
    // Update FilteredDataSource
    const newData = masterDataSource.filter(
      function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    setFilteredDataSource(newData);
    setSearch(text);
  } else {
    // Inserted text is blank
    // Update FilteredDataSource with masterDataSource
    setFilteredDataSource(masterDataSource);
    setSearch(text);
  }
};

const Hideinput = () => {
  setsearchbar(false);
}

const deleteRecord = (id)=>{
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/product/remove/items/${id}`).then(async (res) => {
      const response = await res.data.data;
      if (res.data.data == null) {
        setProductList(null);
      } else {
        setProductList(response);
        showToastRemoveItem();
        setModalVisible(false)
      }
  });
}
const showToastRemoveItem = () => {
  ToastAndroid.showWithGravity(
      "Your Item Has Been Removed Successfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
  // navigation.navigate("Home")
};

  return (
    <SafeAreaView style={Style.Maincontainer}>

    <View style={Style.heading}>
      <Text style={Style.headtxt}>Search products list</Text>
    </View>    
  

      {areaReducerInfo.searchBarStatus != false ? (
        <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
        <TextInput
          style={{
          height: 40,
          width: "80%",
          borderRadius: 12,
          paddingLeft: 20,
          margin: 4,
          borderColor: '#009688',
          backgroundColor: '#f1f3f4',}}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <TouchableOpacity style={{justifyContent: "center",right: 35, bottom: 5}} onPress={Hideinput}>
          <Image source={require("../assets/icons/cross.png")} style={{tintColor: "#DEDFE0"}} />
        </TouchableOpacity>
        </View>
        ) : (
      <View></View>
      )}

  <View style={{flex: 8, marginVertical: 25}}>
  <FlatList
      data={filteredDataSource}
      numColumns={1}
      renderItem={({ item ,index}) => (
      <View style={Style.Productdetailcontainer}>
      <View style={{flex: 1, flexDirection: "column", backgroundColor: colors[index % colors.length], width: null, height: 90}}>
      <View style={Style.pDetailmainSubCon2}>
      <View style={Style.borderimg}>
        <Image source={{uri:item.main_image}} style={Style.ProdImage} />
      </View>
      <View style={Style.ProductsubCon}>
          <Text style={Style.prodtxt}>{item.name}...</Text>
          <Text style={Style.prodtxt}>{item.discription}</Text>
      </View>
      <View style={Style.price}>
        <Text style={Style.Pricetxt}>Rs:{item.discount}</Text>
        <Text style={Style.Pricetxt1}>Rs:{item.price}</Text>
        {/* <Text style={Style.Pricetxt1}>Id:{item.id}</Text> */}
      </View>

      <View style={Style.Mainicon}>
        <View style={Style.icon}>
          <TouchableOpacity onPress={()=> navigation.navigate("CloneItem", {item_id : item.id, item_name : item.name, item_discription : item.discription, item_discount : item.discount, item_price : item.price, item_image:item.main_image})}>
            <Image source = {require("../assets/icons/filter.png")} style={{tintColor: "#8BB2D6"}} />
          </TouchableOpacity>
        </View>

        <View style={Style.icon}>
          <TouchableOpacity onPress={() => {deleteRecord(item.id)}}>    
            <Image source = {require("../assets/icons/delete.png")} style={{tintColor: "#047FB8"}} />
          </TouchableOpacity>
        </View>

        <View style={Style.icon}>
          <TouchableOpacity onPress={()=> navigation.navigate("EditItem", {item_id : item.id})}>
            <Image source = {require("../assets/icons/edit.png")} style={{tintColor: "#047FB8"}} />
          </TouchableOpacity>
        </View>
      </View>
      </View>           
      </View>
      </View>
  )}
  />
  </View>

  <View style={Style.container}>
    <TouchableOpacity
      activeOpacity={15}
      onPress={() => navigation.navigate('AddItem')}
      style={Style.touchableOpacityStyle}>
      <Image source={require("../assets/icons/plusicon.png")} style={Style.floatingButtonStyle}/>
    </TouchableOpacity>
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