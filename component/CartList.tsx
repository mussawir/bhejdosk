import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image,BackHandler,Text,FlatList} from 'react-native';
import styles from "../assets/css/Style";
import ButtonAit from "./ButtonAit";

let colors = ['#F6F6F6', '#FFFFFF'];
export default function FinishOrder({ cartItem, cId,keyindex}) {
  return (
<View style={styles.Productdetailcontainer1}>
<View style={{ paddingVertical: 1, backgroundColor: colors[keyindex % colors.length], width: "100%", height: 85}}>
<View style={styles.pDetailmainSubCon1}>
<View style={{display: "flex", height: "90%", width: "20%", backgroundColor: "#FFFFFF", alignSelf: "center", alignItems: "center", justifyContent: "center", top: 5}}>
<Image style={styles.productdetailImg1} source={require('../assets/groceryimages/tv.jpg')}/>
</View>
<View style={styles.ProductcattitleCon1}>
  <View>
<Text style={styles.Producttexttxt}>{cartItem[cId].name}</Text>
</View>
{/* <View style={{display: "flex", flexDirection: "column", alignItems: "flex-start", alignSelf: "center", justifyContent: "center",}}>
<Text style={{fontSize: 14,fontFamily: "PTS55F", color: "#1765AD", display: "flex", flexDirection: "row",}}>Order Quantity: {cartItem[cId].qty}</Text>
<View style={{display: 'flex', flexDirection: "row"}}>
<Text style={{fontSize: 14,fontFamily: "PTS55F", color: "#CFD7DE", display: "flex", flexDirection: "row"}}>Sub-Total</Text>
<Text style={{ fontSize: 14,fontFamily: "PTS55F",fontWeight: "700", color: "#079076", display: "flex", flexDirection: "row",}}> Rs: {cartItem[cId].price}</Text>
</View>
</View> */}

<View style={{display: "flex", flexDirection: "row",}}>
<View style={styles.ProductsubCon2}>
<Text style={{fontSize: 14,fontFamily: "PTS55F", fontWeight: "700", color: "#079076", left: 10, top: 25}}>Rs: </Text>
<Text style={{ fontSize: 14,fontFamily: "PTS55F", fontWeight: "700",  color: "#079076", left: 10, top: 25}}>00</Text>
</View>
<View style={styles.ProductsubCon3}>
<Text style={{fontSize: 14,fontFamily: "PTS55F", fontWeight: "700", color: "#F58E8E", textDecorationLine: 'line-through', textDecorationStyle: 'solid', left: 10, top: 25}}>Rs:</Text>
<Text style={{ fontSize: 14,fontFamily: "PTS55F", fontWeight: "700",  color: "#F58E8E", textDecorationLine: 'line-through', textDecorationStyle: 'solid', left: 10, top: 25}}>00</Text>
</View>
</View>
</View>

<View style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignSelf: "flex-end", backgroundColor:  '#F67474', width: "12%", height: 30, borderRadius: 5, bottom: 40, left: 8}}>
<TouchableOpacity>
<View style={{display: "flex", flexDirection: "row", alignSelf: 'center',  alignItems: "center"}}>
<Image source= {require("../assets/icons/minus.png")} style={{tintColor: "#FFFFFF",}} />
</View>
</TouchableOpacity>
</View>

<View style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignSelf: "flex-end", backgroundColor:  '#079076', width: "12%", height: 41, borderRadius: 5, right: 35, top: 2}}>
<TouchableOpacity>
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



