import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity,FlatList,SafeAreaView, Image, Text,ToastAndroid,Modal,ActivityIndicator,BackHandler} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from '../component/ButtonAit';
import Flatlist from '../component/Flatlist';
import Style from "../assets/css/OrderdetailsStyle";
import axios from 'react-native-axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddOrdersDetail,SetIsOrder,EMPTY_ITEM } from '../redux/action/actions';
import { Checkbox } from 'react-native-paper';
import BottomTabView from "../tabView/BottomTabView";
import { useFocusEffect } from '@react-navigation/native';

export default function Orderdetails({ route }) {
let colors = ['#FBFBFB', '#FFFFFF'];
const navigation = useNavigation();
const [getLoader, setLoader] = useState(true);
const [getProcess, setProcess] = useState(false);
const dispatch = useDispatch();
const [checked, setChecked] = React.useState('');
const rdxOrdersDetail = useSelector(state => state.storesReducer);
const FillFlatList = rdxOrdersDetail.orders;
// const rdxSelectedOrders = rdxOrdersDetail.selectedOrders;
// console.log('rdxSelectedOrdersrdxSelectedOrdersrdxSelectedOrdersrdxSelectedOrders',FillFlatList.order_master_id);
const order_master_id = route.params.order_master_id;
const order_master_shopId = route.params.order_master_shopId;
const order_master_price = route.params.order_master_price;
const order_master_customer = route.params.order_master_customer;
const order_master_phone_number = route.params.order_master_phone_number;
const order_master_house = route.params.order_master_house;
const order_master_city = route.params.order_master_city;
const order_master_street = route.params.order_master_street;
const orders_detils = {
  order_master_id,
  order_master_shopId,
  order_master_price,
  order_master_customer,
  order_master_phone_number,
  order_master_house,
  order_master_city,
  order_master_street,
};
console.log('orders_detilsorders_detilsorders_detilsorders_detilsorders_detils',orders_detils);
const [getOrdersDetail, setOrdersDetail] = useState(null);
const addToReduxORSD = Data => dispatch(AddOrdersDetail(Data));
const [products, setProducts] = useState(FillFlatList);
useEffect(() => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/orders/details/${order_master_id}`).then(async (res) => {
    const response = await res.data.data;
    if (res.data.data == null) {
      setOrdersDetail(null);
    }
    else {
      const Data = res?.data?.data?.map(pd => ({ ...pd, isSelected: false }));
      addToReduxORSD(Data);
      setOrdersDetail(response);
      setLoader(false);
    }
  });
}, []);
// let selected = products.filter((product) => product.isChecked);
const orderDeliver = () =>{
  setProcess(true);
  console.log('orderDeliverorderDeliverorderDeliverorderDeliver0',orders_detils);
  axios({
    url: `https://bhejdo.net/api/v1/shopkeeper/orders/deliver`,
    method: 'POST',
    data: orders_detils
  }).then(function (response) {

            if (response.data.status == 200) {
                dispatch(SetIsOrder(true));
                console.log('xxxxxxxxxxxxxxxxx200200200200200200', response);
                showToast();
                // navigation.navigate('Home');
            } else {
                console.log('xxxxxxxxxxxxxxxxx', response);
            }
        }).catch((error) => {
            console.log(error);
            //Network error comes in
        });
}

const showToast = () => {
  // dispatch({ type: EMPTY_ITEM });
  // dispatch(Emptyitem(type:"EMPTY_ITEM"));
  ToastAndroid.showWithGravity(
      "Order Deliver Seccessfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
  dispatch({ type: EMPTY_ITEM });
  navigation.navigate('ReadyOrders');
};

const handleChange = (id) => {
  let temp = FillFlatList.map((FillFlatList) => {
    if (id === FillFlatList.id) {
      console.log("ifffffffffffffffffffffffffffffffff",id);
      return { ...FillFlatList, isChecked: !FillFlatList.isChecked };
    }
    return FillFlatList;
  });
  console.log('temptemptemptemptemptemptemptemptemptemptemptemptemp',temp);
  setProducts(temp);
};
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
<SafeAreaView style={Style.Maincontainer}>
  <View style={Style.address}>
    <View style={{flex: 0.5, flexDirection: "column",}}>
      <Text style={Style.addresstxt}>{route.params.order_master_customer}</Text>
      <Text style={Style.addresstxt2}>{route.params.order_master_phone_number}</Text>
    </View>
    <View style={{flex: 1, flexDirection: "column",}}>
      <Text style={Style.addresstxt1}>House # {route.params.order_master_house}, City: {route.params.order_master_city}, Street: {route.params.order_master_street}</Text>
    </View>
    </View>
  <View style={{flex: 1,}}>
    <FlatList
      data={FillFlatList}
      numColumns={1}
      renderItem={({ item, index }) => (
    <View style={Style.Productdetailcontainer}>
      <View style={{flex: 1,  flexDirection: "column", backgroundColor: "#FFF", borderBottomWidth: 1, borderColor: "#F1F1F1", width: "95%", alignSelf: "center"}}>
    <View style={Style.pDetailmainSubCon1}>
    <View style={Style.ProductsubCon2}>
      <View style={Style.textP2}>
        <Text style={Style.prodtxt}>{item.item_name}</Text>
      </View>
      <View style={Style.textP2}>
        <Text style={Style.shoptxt1}>Rs: {item.item_price} </Text>
      </View>
      <View style={Style.textP2}>
        <Text style={Style.prodtxt1}>Quantity: {item.qty}</Text>
      </View>
    </View>

    <View style={Style.borderimg1}>
      <Image source={{uri: item.main_image}} style={Style.ProdImage} />
    </View>

    </View>
    </View>           
    </View>
      )} />
    </View>

    <TouchableOpacity disabled={getProcess == true ? true : false} onPress = {()=> {orderDeliver()}}>
    <View style={Style.btn}>
      <ButtonAit props={{name:"READY", fontsize:16, fontweight:"800"}}></ButtonAit>
    </View>
    </TouchableOpacity>

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
      <View>
        <BottomTabView />
      </View>
    </SafeAreaView>
              
      );
    }



