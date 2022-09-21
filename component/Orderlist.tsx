import React, {useState,useEffect,useLayoutEffect} from 'react';
import {View, SafeAreaView,Modal,ActivityIndicator,Text,BackHandler,FlatList,ScrollView,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'react-native-axios';
import Flatlist from "./Flatlist";
import Style from "../assets/css/FlatlistStyle";
import { useDispatch, useSelector } from 'react-redux';
import { SetIsOrder } from '../redux/action/actions';
import { useFocusEffect } from '@react-navigation/native';
let colors = ['#FFFFFF', '#F8FDFF'];

const Orderlist = ({}) => {
const navigation = useNavigation(); 
console.log(navigation);
const [getOrderlist ,setOrderlist] = useState(null);
const [getPointbalance ,setPointbalance] = useState(null);
const [orderid,setOrderid]= useState('');
const [getLoader, setLoader] = useState(true);
const dispatch = useDispatch();
const shopInfo = useSelector(state => state.userReducer);
const shop_id = shopInfo.user.id;
console.log("user_Infouser_Infouser_Infouser_Infouser_Infouser_Info",shop_id);
const getOrderStatus = useSelector(state => state.getOrderReducer);
const getOrder = useSelector(state => state.storesReducer);
console.log("OrderlistOrderlistOrderlistOrderlistOrderlistOrderlistOrderlistOrderlist",getOrder.orders);
useEffect(() => {
    axios.get(`https://bhejdo.net/api/v1/shopkeeper/orders/list/${shop_id}`).then(async (res) => {
        const response = await res.data.data;
        console.log("OrderlistOrderlistOrderlistOrderlistOrderlistOrderlistOrderlistOrderlist",response);
        if (res.data.data == null) {
          setOrderlist(null);
        } else {
          dispatch(SetIsOrder(false));
          setOrderlist(response);
          setLoader(false);
        }
    });
},[getOrderStatus.getOrder]);

useEffect(() => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/point/${shop_id}`).then(async (res) => {
      const response = await res.data.data;
      console.log("OrderlistOrderlistOrderlistOrderlistOrderlistOrderlistOrderlistOrderlist",response);
      if (res.data.data == null) {
        setPointbalance(null);
      } else {
        setPointbalance(response);
        setLoader(false);
      }
  });
},[getOrderStatus.getOrder]);

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

    <SafeAreaView style={Style.Container}>
    <View>
    <FlatList
      data={getPointbalance}
      numColumns={1}
      renderItem={({ item ,index}) => (
      <View style={Style.Productdetailcontainer}>
      <View style={{flex: 1, flexDirection: "row", backgroundColor: '#FFFFFF', width: null, height: 10,}}>
        <View style={{flex: 0.5, paddingHorizontal: 15, marginVertical: 15}}>
          <Text style={{color: "#C9C9C9", fontSize: 15, fontWeight: "300"}}>Balance</Text>
          <Text style={{color: "#C9C9C9", fontSize: 15, fontWeight: "300"}}>Points</Text>
          <Text style={{color: "#C1C1C1", fontSize: 15, fontWeight: "400"}}>{item.points_balance}</Text>
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{color: "#047FB8", fontSize: 24, fontWeight: "300"}}>New Orders</Text>
          <Text style={{color: "#047FB8", fontSize: 24, fontWeight: "700"}}>Rs: {item.payment}</Text>
        </View>
      </View>
      </View>
  )}
  />
  </View>

    <FlatList
      data={getOrderlist}
      numColumns={1}
      renderItem={({ item ,bgcolor}) => (
        <View style={{flex: 1,  marginVertical: 5, borderRadius: 5, backgroundColor: colors[bgcolor % colors.length], height: 100, width: "95%", alignSelf: "center", shadowColor: '#000', shadowOffset: { width: 1, height: 1 }, shadowOpacity:  0.4, shadowRadius: 3, elevation: 3,  }}>
        <View style={Style.shop}>
        <View style = {Style.ProductcattitleCon2}>
        <View style={Style.textP}>
          <Text style={Style.shoptxt}>Order Amount</Text>
        </View>
    
        <View style={Style.textP}>
          <Text style={Style.shoptxt1}>{item.grand_total} </Text>
        </View>
    
        <View style={Style.textP}>
          <Text style={Style.shoptxt2}>Order ITEMS: {item.item_quantity}</Text>
        </View>
    
        <View style={Style.textP3}>
          <Text style={Style.shoptxt3}>{item.city}</Text>
          <Text style={Style.shoptxt3}>Street: {item.street}</Text>
          <Text style={Style.shoptxt3}>{item.created_at}</Text>
          <Text style={Style.shoptxt3}>{item.updated_at}</Text>
        </View>
       
          <View style={Style.rect}>
            <TouchableOpacity style={Style.btn_touch1}>
              <Image source = {require("../assets/icons/delete.png")} style={Style.rectxt} />
            </TouchableOpacity>
          </View>
  
          <View style={Style.rect1}>
            <TouchableOpacity style={Style.btn_touch2} onPress = {() => navigation.navigate("Orderdetails",{order_master_id:item.id,order_master_shopId:item.shop_id,order_master_price:item.grand_total,order_master_customer:item.customer_name,order_master_phone_number:item.phone_number,order_master_house:item.house_number,order_master_city:item.city,order_master_street:item.street})}>
              <Image source = {require("../assets/icons/vect.png")} style={Style.rectxt1} />
            </TouchableOpacity>
          </View>
        </View>
    
      </View>
      </View>
  )}
  />

    {/* {Orderlist == null ? (
      <View></View>
    ):(
      <Flatlist props={{sdata: getOrderlist,com:'Orderlist'}}></Flatlist>
    )} */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={getLoader}
      >
        <View style={{flex: 1,justifyContent: "center",alignItems: "center",backgroundColor: 'rgba(0,0,0,0.7)',}}>

          <ActivityIndicator
            size={60}
            color="#FFF"
          />
          <Text style={{fontSize: 18,color: '#FFF',}}>Please Wait</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default Orderlist;
