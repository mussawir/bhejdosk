import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity,FlatList,SafeAreaView, Image, Text,ToastAndroid,Modal,ActivityIndicator,BackHandler} from 'react-native';
import BottomTabView from '../tabView/BottomTabView';
import axios from 'react-native-axios';
import Style from "../assets/css/DeliveredOrderStyle";
import { useDispatch, useSelector } from 'react-redux';

let colors = ['#E8E8E8', '#FFFFFF'];
const OrderHistory = ({ navigation }) => {
const rdxOrdersDetail = useSelector(state => state.storesReducer);
const [getOrderDelivered, setOrderDelivered] = useState(null);
const [getLoader, setLoader] = useState(true);

useEffect(() => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/orders/delivered`).then(async (res) => {
    const response = await res.data.data;
    if (res.data.data == null) {
      setOrderDelivered(null);
    }
    else {
      setOrderDelivered(response);
      setLoader(false);
    }
  });
}, [rdxOrdersDetail]);

  return (
    <SafeAreaView style={Style.Maincontainer}>
    <View style={{flex: 6}}>
    <FlatList
    data={getOrderDelivered}
    numColumns={1}
    renderItem={({ item ,index}) => (
    <View style={Style.pDetailmainSubCon1}>
    <View style={{flex: 1, flexDirection: "column", width: "100%", paddingLeft: 10,backgroundColor: colors[index % colors.length],}}>
    <View style={Style.pDetailmainSubCon}>
    <View style={Style.ProductsubCon}>
      <Text style={Style.idtxt}>#{item.id}</Text>
    </View>

    <View style={Style.ProductsubCon6}>
      <Text style={Style.prodtxt}>{item.customer_name}</Text>
    </View>

    <View style={Style.price}>
      <Text style={Style.prodtxt1}>Rs:{item.grand_total}</Text>
    </View>

    <View style={Style.ProductsubCon3}>
      <Text style={Style.prodtxt3}>Quantity: {item.item_quantity}</Text>
    </View>

    </View>
    </View>
    </View>
    )}
    />
    </View>
  </SafeAreaView>
  );
}
export default OrderHistory;