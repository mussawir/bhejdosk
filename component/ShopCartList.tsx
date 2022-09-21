import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image,BackHandler,Text,FlatList} from 'react-native';
import styles from "../assets/css/Style";
import ButtonAit from "./ButtonAit";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../redux/action/actions';

let colors = ['#F6F6F6', '#FFFFFF'];
export default function FinishOrder({ cartItem, cId,keyindex}) {
const dispatch = useDispatch();
const cartItemInfo = useSelector(state => state.cartReducer);
const Items = cartItemInfo.products;
const totalQty = cartItemInfo.totalQty;
const RemoveFromCart = cartItem => dispatch(removeFromCart(cartItem));
const AddToCart = products => dispatch(addToCart(products));
let colors = ['#FBFBFB', '#FFFFFF'];


return (
<View style={styles.Productdetailcontainer1}>
<View style={{ paddingVertical: 1, backgroundColor: colors[keyindex % colors.length], width: "100%", height: 95}}>
<View style={styles.pDetailmainSubCon1}>
<View style={{display: "flex", height: 65, width: 65, backgroundColor: "#FFFFFF", borderWidth: 1.5, borderColor: "#F2F2F2", borderRadius: 5,  alignSelf: "center", alignItems: "center", justifyContent: "center", top: 5}}>
<Image style={{display: "flex", height: "80%", width: "60%"}} source={{uri: cartItem[cId].images}}/>
{/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: "60%", height: "80%", display: "flex"}} /> */}
</View>
<View style={styles.ProductcattitleCon1}>
  <View>
    <Text style={styles.Producttexttxt}>{cartItem[cId].name}</Text>
  </View>
</View>

<View style={styles.ProductsubCon2}>
  <Text style={{fontSize: 16,fontFamily: "PTS55F", fontWeight: "700", color: "#079076"}}>Rs: </Text>
  <Text style={{ fontSize: 16,fontFamily: "PTS55F", fontWeight: "700",  color: "#079076"}}>{cartItem[cId].price}</Text>
</View>

<View style={styles.ProductsubCon3}>
  <Text style={{fontSize: 16,fontFamily: "PTS55F", fontWeight: "700", color: "#F58E8E", textDecorationLine: 'line-through', textDecorationStyle: 'solid', left: 10}}>Rs:</Text>
  <Text style={{ fontSize: 16,fontFamily: "PTS55F", fontWeight: "700",  color: "#F58E8E", textDecorationLine: 'line-through', textDecorationStyle: 'solid', left: 10}}>00</Text>
</View>

<View style={styles.ProductsubCon4}>
    <Text style={{fontSize: 16,fontFamily: "PTS55F", fontWeight: "700", color: "#1765AD"}}>Items:</Text>
    <Text style={{ fontSize: 16,fontFamily: "PTS55F", fontWeight: "700", color: "#1765AD"}}>{cartItemInfo.totalQty}</Text>
</View>

</View>

<View style={{display: "flex", bottom: 68}}>
<View style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignSelf: "flex-end", backgroundColor:  '#F67474', width: "12%", height: 24, borderRadius: 5, right: 10, bottom: 5}}>
<TouchableOpacity onPress={() => RemoveFromCart(cartItem[cId])}>
<View style={{display: "flex", flexDirection: "row", alignSelf: 'center',  alignItems: "center"}}>
<Image source= {require("../assets/icons/minus.png")} style={{tintColor: "#FFFFFF",}} />
</View>
</TouchableOpacity>
</View>

<View style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignSelf: "flex-end", backgroundColor:  '#079076', width: "12%", height: 45, borderRadius: 5, right: 10,}}>
<TouchableOpacity onPress={() => AddToCart(cartItem[cId])}>
<View style={{display: "flex", flexDirection: "row", alignSelf: 'center', alignItems: "center"}}>
<Image source = {require("../assets/icons/plus.png")} style={{tintColor: "#FFFFFF"}} />
</View>
</TouchableOpacity>
</View>
</View>

    </View>
</View>
    );
}



