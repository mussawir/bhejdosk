import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image,ActivityIndicator,Text,FlatList,SafeAreaView,ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from '../component/ButtonAit';
import Style from '../assets/css/GroupDetailsStyle';
import axios from 'react-native-axios';
import BottomTabView from "../tabView/BottomTabView";
import { useDispatch, useSelector } from 'react-redux';


let colors = ['#F6F6F6', '#FFFFFF'];
export default function GroupDetails({route}) {
const navigation = useNavigation();
const [checked, setChecked] = React.useState(false);
const [getItemList, setItemList] = useState(null);
const [getModalVisible, setModalVisible] = useState(true);
const shopInfo = useSelector(state => state.userReducer);
const shop_id = shopInfo.user.id;
const group_id = route.params.id;
const group_image = route.params.image;
const group_discription = route.params.discription;
const group_name = route.params.name;
console.log('routerouterouterouterouterouteroute',group_id);

useEffect(() => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/group/item/list/${group_id}`).then(async (res) => {

    console.log("useEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffect",typeof(res.data.data));
      const response = await res.data.data;
      if (res.data.data == null) {
        setItemList(null);
      } else {
        
        setItemList(response);
        setModalVisible(false);
      }
  });
},[route]);

const clickHandler = () => {
  navigation.navigate('AddItemsToGroup',{group_id:group_id,group_image:group_image,group_discription:group_discription,group_name:group_name});
}

const deleteRecord = (item_id)=>{
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/group/remove/items/${group_id}/${item_id}`).then(async (res) => {
      const response = await res.data.data;
      if (res.data.data == null) {
        setItemList(null);
      } else {
        setItemList(response);
        showToastRemoveItem();
        setModalVisible(false);
      }
  });

}

const showToastRemoveItem = () => {
  ToastAndroid.showWithGravity(
      "Your Item Has Been Removed Successfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
};

  return (
    <SafeAreaView style={Style.Maincontainer}>
    
    <View style={{flex: 0.5, backgroundColor:"#f3f3f3",}}>

    <View style={{flex: 1, alignItems:"center", flexDirection: "row", justifyContent: "space-evenly",}}>
      <View style={{flexDirection: "row", width: 90, height: 90,}}>
        <Image source={{uri:group_image}} style={{height: "100%", width: "100%", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}} />
      </View>

      <View style={{flex: 0.9, }}>
      <View style={{flex: 0.2, flexDirection: "row",}}>
        <Text style={{fontFamily: 'PTS55F',fontSize: 18,color: "#1765AD",fontWeight: "700",}}>NAME: {group_name}</Text>
      </View>

      <View  style={{flex:0.4, justifyContent: "flex-start"}}>
        <Text style={{fontFamily: 'PTS55F',fontSize: 14,color: "#047FB8",fontWeight: "700",}}>DESCRIPTION: {group_discription}</Text>
      </View>
      </View>
      </View>
    </View>

    <View style={{flex:2,backgroundColor:"#ffff"}}>
    <FlatList
    data={getItemList}
    numColumns={1}
    renderItem={({ item ,index }) => (
      <View style={{flex: 1, marginVertical: 5,  backgroundColor:"#FFFFFF", height: 100, width: "95%", alignSelf: "center", borderBottomWidth: 1, borderColor:'#F1F1F1', }}>
      <View style={Style.pDetailmainSubCon2}>
        <View style={Style.borderimg}>
          <Image source={{uri:item.main_image}} style={Style.ProdImage} />
        </View>

        <View style={Style.ProductsubCon}>
        <Text style={Style.prodText}>{item.name.substring(0,100)}...</Text>
        <Text style={Style.PriceTxt}>Rs: {item.discount}</Text>
        <Text style={Style.PriceTxt2}>Rs: {item.price}</Text>
      </View>
        <View style={{flex:1,justifyContent: 'space-evenly',alignItems:'flex-end',}}>
        <View style={{justifyContent: 'flex-start',marginRight:5}}>
            
            <TouchableOpacity onPress={() =>{deleteRecord(item.id)}}>
              <Image source={require("../assets/icons/delete.png")} style={{tintColor: "#047FB8"}} />
            </TouchableOpacity>
            
        </View>
      </View>
      </View>
    </View>

    )}
    />
   
   <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={{position: 'absolute',
          width: 50,
          height: 50,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          right: 5,
          bottom: 20,
          backgroundColor: "#047FB8"}}>
          <Image
            source={require("../assets/icons/plusicon.png")}
            style={{resizeMode: 'contain',
            width: 50,
            height: 50,}}
          />
    </TouchableOpacity>
    </View>
    </SafeAreaView>
      );
    }



