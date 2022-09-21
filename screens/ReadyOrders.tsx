import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity,FlatList,SafeAreaView, Image, Text,ToastAndroid,Modal,ActivityIndicator,BackHandler} from 'react-native';
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import ButtonAit from '../component/ButtonAit';
import BottomTabView from '../tabView/BottomTabView';
import axios from 'react-native-axios';
import Style from "../assets/css/ReadyOrderStyle";
import { useDispatch, useSelector } from 'react-redux';
import { AddOrdersDetail,SetIsOrder,EMPTY_ITEM } from '../redux/action/actions';
import Orderdetails from './Orderdetails';
let colors = ['#E8E8E8', '#FFFFFF'];
const ReadyOrders = ({ route }) => {
const navigation = useNavigation();
const [modalVisible, setModalVisible] = useState(true);
const [getLoader, setLoader] = useState(true);
const [getmodaldelivered, setmodaldelivered] = useState(false);
const [getmodalcanceled, setmodalcanceled] = useState(false);
const [getmodalhandover, setmodalhandover] = useState(false);
// const [getOrderDelivered, setOrderDelivered] = useState(null);
const [getProcess, setProcess] = useState(false);
const dispatch = useDispatch();
// const [checked, setChecked] = React.useState('');
const rdxOrdersDetail = useSelector(state => state.storesReducer);
const [getOrderReady, setOrderReady] = useState(null);

useEffect(() => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/orders/ready`).then(async (res) => {
    const response = await res.data.data;
    if (res.data.data == null) {
      setOrderReady(null);
    }
    else {
      setOrderReady(response);
      setLoader(false);
    }
  });
}, [rdxOrdersDetail]);

const orderDeliver = () =>{
  axios({
    url: `https://bhejdo.net/api/v1/shopkeeper/orders/delivers`,
    method: 'POST',
    data: ReadyOrders
  }).then(function (response) {

            if (response.data.status == 200) {
                dispatch(SetIsOrder(true));
                console.log('xxxxxxxxxxxxxxxxx200200200200200200', response);
                showToast();
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
      "Order Deliver Shopkeeper Seccessfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
  dispatch({ type: EMPTY_ITEM });
  navigation.navigate('Home');
};

  return (
    <SafeAreaView style={Style.Maincontainer}>

<View style={{flex: 6}}>
    <FlatList
    data={getOrderReady}
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

    <View style={Style.Mainbtn}>
    {item.using_rider == 0 ?(
      <View style={Style.backview}>
        <TouchableOpacity onPress={() => {setmodaldelivered(true),setLoader(false)}} style={[Style.button]}>
          <Text style={Style.btntext}>COMPLETED</Text>
        </TouchableOpacity>
      </View>
    ):(
      <View></View>
    )}
    {item.using_rider == 1 ? (
      <View style={Style.backview2}>
      <TouchableOpacity onPress={() => {setmodalhandover(true),setLoader(false)}} style={[Style.button]}>
          <Text style={Style.btntext}>HANDOVER</Text>
        </TouchableOpacity>
      </View>
    ):(
      <View></View>
    )}
    <View style={Style.backview1}>
      <TouchableOpacity onPress={() => {setmodalcanceled(true),setLoader(false)}} style={[Style.button]}>
        <Text style={Style.btntext}>CANCEL</Text>
      </TouchableOpacity>
    </View>
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

    <Modal
      animationType="slide"
      transparent={true}
      visible={getmodaldelivered}
      onRequestClose={() => {
        console.log('modalVisiblemodalVisiblemodalVisiblemodalVisiblemodalVisible',getmodaldelivered);
        setmodaldelivered(!getmodaldelivered);
        setLoader(true)
      }}
    >
    <View style={Style.centeredView}>
      <View style={Style.modalView}>
        <View style={Style.headingpicked}>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "center",}}>
          <Text style={Style.modalText4}>COMFIRM</Text>
          <Text style={Style.modalText5}> ORDER</Text>
        </View>
      <View style={Style.mainicon}>
        <TouchableOpacity onPress={()=> setmodaldelivered(false)}>
          <Image source = {require("../assets/icons/delete.png")} style={Style.iconcolor}/>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
        <View style={{flex: 0.2, justifyContent: "center", backgroundColor: "#047FB8", borderRadius: 5,}}>
          <TouchableOpacity onPress = {()=> {orderDeliver(),setmodaldelivered(false),setLoader(true)}}>
            <Text style={Style.modalText6}>YES</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.2, justifyContent: "center",  backgroundColor: "#047FB8", borderRadius: 5}}>
          <TouchableOpacity onPress={()=> setmodaldelivered(false)}>
            <Text style={Style.modalText6}>NO</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
</Modal>

  <Modal
      animationType="slide"
      transparent={true}
      visible={getmodalcanceled}
      onRequestClose={() => {
      console.log('modalVisiblemodalVisiblemodalVisiblemodalVisiblemodalVisible',getmodalcanceled);
      setmodalcanceled(!getmodalcanceled);
    }}
  >
    <View style={Style.centeredView}>
      <View style={Style.modalView}>
        <View style={Style.headingpicked}>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "center",}}>
          <Text style={Style.modalText4}>CANCELED</Text>
          <Text style={Style.modalText5}> ORDER</Text>
        </View>
      <View style={Style.mainicon}>
        <TouchableOpacity onPress={()=> setmodalcanceled(false)}>
          <Image source = {require("../assets/icons/delete.png")} style={Style.iconcolor}/>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
        <View style={{flex: 0.2, justifyContent: "center", backgroundColor: "#047FB8", borderRadius: 5,}}>
          <TouchableOpacity onPress={()=> {setmodalcanceled(false)}}>
          <Text style={Style.modalText6}>YES</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.2, justifyContent: "center",  backgroundColor: "#047FB8", borderRadius: 5}}>
          <TouchableOpacity onPress={()=> setmodalcanceled(false)}>
          <Text style={Style.modalText6}>NO</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
</Modal>

<Modal
      animationType="slide"
      transparent={true}
      visible={getmodalhandover}
      onRequestClose={() => {
      console.log('modalVisiblemodalVisiblemodalVisiblemodalVisiblemodalVisible',getmodalhandover);
      setmodalhandover(!getmodalhandover);
    }}
  >
    <View style={Style.centeredView}>
      <View style={Style.modalView}>
        <View style={Style.headingpicked}>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "center",}}>
          <Text style={Style.modalText4}>HANDOVER</Text>
          <Text style={Style.modalText5}> ORDER</Text>
        </View>
      <View style={Style.mainicon}>
        <TouchableOpacity onPress={()=> setmodalhandover(false)}>
          <Image source = {require("../assets/icons/delete.png")} style={Style.iconcolor}/>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
        <View style={{flex: 0.2, justifyContent: "center", backgroundColor: "#047FB8", borderRadius: 5,}}>
          <TouchableOpacity onPress={()=> {orderDeliver(),setmodalhandover(false),setLoader(true)}}> 
          <Text style={Style.modalText6}>YES</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.2, justifyContent: "center",  backgroundColor: "#047FB8", borderRadius: 5}}>
          <TouchableOpacity onPress={()=> setmodalhandover(false)}>
          <Text style={Style.modalText6}>NO</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
</Modal>

    </SafeAreaView>
  );
}
export default ReadyOrders;