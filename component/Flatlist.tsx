import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import{ StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Style from "../assets/css/FlatlistStyle";
import axios from 'react-native-axios';
import { Checkbox } from 'react-native-paper';
import { SELECTED_ORDERS } from '../redux/action/actions';
import { Dimensions } from 'react-native';
let colors = ['#FFFFFF', '#F8FDFF'];
const Item = ({title,bgcolor,}) => {
const navigation = useNavigation();

// Order-list Work Start

return(
  // <TouchableOpacity onPress = {() => navigation.navigate("Orderdetails",{order_master_id:title.id,order_master_shopId:title.shop_id,order_master_price:title.grand_total})}>
  <View style={{flex: 1,  marginVertical: 8, borderRadius: 5, backgroundColor: colors[bgcolor % colors.length], height: 100, width: "95%", alignSelf: "center", shadowColor: '#000', shadowOffset: { width: 1, height: 1 }, shadowOpacity:  0.4, shadowRadius: 3, elevation: 3,  }}>
    <View style={Style.shop}>
    <View style = {Style.ProductcattitleCon2}>
    <View style={Style.textP}>
      <Text style={Style.shoptxt}>Order Amount</Text>
    </View>

    <View style={Style.textP}>
      <Text style={Style.shoptxt1}>{title.grand_total} </Text>
    </View>

    <View style={Style.textP}>
      <Text style={Style.shoptxt2}>Order ITEMS: {title.item_quantity}</Text>
    </View>

    <View style={Style.textP3}>
      <Text style={Style.shoptxt3}>{title.city}</Text>
      <Text style={Style.shoptxt3}>Street: {title.street}</Text>
      <Text style={Style.shoptxt3}>{title.created_at}</Text>
      <Text style={Style.shoptxt3}>{title.updated_at}</Text>
    </View>

    <View style={Style.rect}>
      <TouchableOpacity style={Style.btn_touch1}>
        <Image source = {require("../assets/icons/delete.png")} style={Style.rectxt} />
      </TouchableOpacity>
    </View>

    <View style={Style.rect1}>
      <TouchableOpacity style={Style.btn_touch2} onPress = {() => navigation.navigate("Orderdetails",{order_master_id:title.id,order_master_shopId:title.shop_id,order_master_price:title.grand_total,order_master_customer:title.customer_name,order_master_phone_number:title.phone_number,order_master_house:title.house_number,order_master_city:title.city,order_master_street:title.street})}>
        <Image source = {require("../assets/icons/vect.png")} style={Style.rectxt1} />
      </TouchableOpacity>
    </View>
    </View>

  </View>
  </View>
  // </TouchableOpacity>
);
}

// Order-details-list Work Start

// const Orderdetails = ({title,bgcolor}) => {
// const dispatch = useDispatch();
// const navigation = useNavigation();
// const [checked, setChecked] = React.useState(false);
// const AddToCart = products => dispatch(addToCart(products));
// const RemoveFromCart = cartItem => dispatch(removeFromCart(cartItem));
// const Function_Add_To_Cart = (products) => {
//     AddToCart(products);
// }

const Orderdetails = ({title,bgcolor,index}) => {
const dispatch = useDispatch();
const [checked, setChecked] = React.useState(false);
const rdxOrdersDetail = useSelector(state => state.storeReducer);
// const FillFlatList = rdxOrdersDetail.orders;
const rdxSelectedOrders = rdxOrdersDetail.selectedOrders;
console.log('rdxSelectedOrdersrdxSelectedOrdersrdxSelectedOrdersrdxSelectedOrders',rdxSelectedOrders);

return(
	<View style={Style.Productdetailcontainer}>
    <View style={{flex: 1,  flexDirection: "column", backgroundColor: colors[bgcolor % colors.length]}}>
    <View style={Style.pDetailmainSubCon1}>
    <View style={Style.borderimg1}>
      <Image source={require('../assets/Orderdetails/box.png')} />
    </View>
    <View style={Style.ProductsubCon2}>
      <View style={Style.textP2}>
        <Text style={Style.prodtxt}>{title.item_name}</Text>
      </View>
      <View style={Style.quantity}>
        <Text style={Style.prodtxt}>{title.qty}</Text>
      </View>
      {title?.isSelected ?
        <TouchableOpacity style={{ backgroundColor: "white", paddingVertical: "7%", paddingHorizontal: "5%", width: 100, height: 40, borderRadius: 20, borderStyle: "solid", borderColor: "#ec4137", borderWidth: 1, }} onPress={() => { dispatch({ type: SELECTED_ORDERS, index, id: title.id })}}>
          <Text style={{ color: "yellow", alignItems: "center", fontWeight: "bold", textAlign: "center", top: 3,}}>Remove</Text>
        </TouchableOpacity>
        : 
        <TouchableOpacity style={{ backgroundColor: "#ec4137", paddingVertical: "8%", paddingHorizontal: "10%", width: 100, height: 40, borderRadius: 20, borderStyle: "solid", borderColor: "red", borderWidth: 1, }} onPress={() => { dispatch({ type: SELECTED_ORDERS, index, id: title.id }) }}>
          <Text style={{ color: "black", fontWeight: "bold", textAlign: "center", top: 3}}>Add</Text>
        </TouchableOpacity>
      }
    </View>

     <View style={Style.checkbox}>
       <Checkbox
        uncheckedColor="#079076"
        color="#079076"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>

    </View>
    </View>           
    </View>
	
);
}


const GroupList = ({title,route}) => {
const navigation = useNavigation();
  // Shop-list Work Start
return(


 <View style={{flex: 1}}>
    <View style={{flex:1,paddingVertical: 2,backgroundColor: '#FFFF', width: Dimensions.get('window').width, height: 90,}}>
    <View style = {{ flex: 1,flexDirection: "row",justifyContent: "center",alignSelf: "center",alignItems: "center",borderBottomWidth:1, borderColor:'#F1F1F1' }}>
    {/* List image  */}
  <View style={{flex:2,justifyContent:"center",alignItems:"flex-start",backgroundColor:"#fff",padding:5}}>
  <TouchableOpacity onPress={() => {navigation.navigate('GroupDetail', {id:title.id,name:title.name,image:title.image,discription:title.discription})}}>
    <View style={{ height: 70, width: 70,backgroundColor: "#ffffff",  borderWidth: 1.5, borderColor: "#F2F2F2",borderRadius: 5,  alignItems: "center",justifyContent: "center",}}>
      <Image source={{ uri: title.image }} style={{ height: "80%",width: "80%"}} />
      {/* <Image source={require('../assets/Orderdetails/box.png')} /> */}
    </View>
  </TouchableOpacity>
  </View>

{/* List Heading Text */}
  <View style={{flex:5.5,backgroundColor:"#FFF"}}>
  <View style={{ flex:5,justifyContent:"center"}}>
   <Text style={{fontFamily: 'PTS55F',fontSize: 18,color: "#1765AD",fontWeight: "700",}}>{title.name}</Text>
  <View style={{ flex:0.6,justifyContent:"center"}}>
   <Text style={{fontFamily: 'PTS55F',fontSize: 14,color: "#646465",fontWeight: "700",marginBottom:5}}>{title.discription}</Text>
  </View>
   </View>
  </View>
 {/* List icon  */}
<View style={{flex:1.6,backgroundColor:"#FFFFFF",flexDirection: "row",justifyContent: "space-between",alignSelf: "center",alignItems: "center",}}>
<TouchableOpacity onPress={() => {navigation.navigate('DeleteGroup', {id:title.id})}}>
  <View style={{flex:1,justifyContent:"center",alignSelf: 'center',alignItems: "center",flexDirection: "row",paddingVertical: 10,}}>
    <Image source={require("../assets/icons/delete.png")} style={{ tintColor: "#047FB8"}} />
  </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => {navigation.navigate('UpdateGroup', {id:title.id,name:title.name,image:title.image,discription:title.discription})}}>
  <View style={{flex:1,justifyContent:"center",alignSelf: 'center',alignItems: "center",flexDirection: "row",paddingVertical: 10, marginRight: 5}}>
    <Image source={require("../assets/icons/edit.png")} style={{ tintColor: "#047FB8",}} />
  </View>
  </TouchableOpacity>
  
</View>
  </View>
  </View>
  </View>



  //   <TouchableOpacity onPress={() => {navigation.navigate('GroupDetail', {id:title.id,name:title.name,image:title.image,discription:title.discription})}}>
  //   <View style={{flex:1,paddingVertical: 2,backgroundColor: colors[bgcolor % colors.length], width: Dimensions.get('window').width, height: 90,}}>
  
  //       <View style={Style.shopSubContainer}>

  //         <View style={Style.ImageMainContainer}>
  //         <View style={Style.shopImageContainer}>
  //           <Image source={{ uri: title.image }} style={Style.shopImage} />
  //         </View>
  //         </View>

  //         <View style={Style.shopDetailsContainer}>
  //           <View style={Style.shopDetails}>
  //             <Text style={Style.shopName}>{title.name} </Text>
  //           </View>
  //           <View style={Style.ShopAddressView}>
  //             <Text style={Style.shopAddress}>{title.discription}</Text>
  //           </View>
  //         </View>
          
  //       </View>
  //     </View>
  // </TouchableOpacity>
  );
  }
  

export default function Flatlist({props}) {
const DATA = props.sdata;
const rendercomponent = props.com;
const renderItem = ({item,index})=>(

	
	<>
    {rendercomponent == 'Orderlist' ? 
    <Item title={item} bgcolor={index}/> : 
    rendercomponent == 'Orderdetails' ?
    <Orderdetails title={item} bgcolor={index}/>
     :
     rendercomponent == 'Grouplist' ?
     <GroupList title={item} bgcolor={index}/>
     :
    <View></View>
    }
	</>
	

);
return (
<View style={Style.container1}>
	<FlatList
	data={DATA}
	renderItem={renderItem}
	keyExtractor={(item, index) => index.toString()}
	/>
</View>
);
}
