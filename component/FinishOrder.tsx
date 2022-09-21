import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image,BackHandler,Text,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../assets/css/Style";
import ButtonAit from "./ButtonAit";

const initialItems = [
{
    id: 1,
    title: 'Basmati Kernal Nayab Chawal',
    poster: require('../assets/groceryimages/Oilpack.jpg'),
    price: '112,00',
    off: '55.45% off',
    Myr: '500.00',
    total : '200'
},
{
    id: 2,
    title: 'Shan Nihari Masala',
    poster: require('../assets/groceryimages/Sugar.jpg'),
    price: '112,00',
    off: '55.45% off',
    Myr: '500.00',
    total : '200'
},
{
id: 3,
    title: 'Daal pouch',
    poster: require('../assets/groceryimages/Daal.jpg'),
    price: '85,00',
    off: '22.00% off',
    Myr: '340.00',
    total : '200'
},
];

let colors = ['#FBFBFB', '#FFFFFF'];
export default function FinishOrder() {
  const navigation = useNavigation();

//   const nextPage = () => {
//     navigation.navigate();
//       alert();
//     const jumpToAction = TabActions.jumpTo('LIST');
//     navigation.dispatch(jumpToAction)
//   }

  return (
    <View style={{height: "100%", width: "100%" ,backgroundColor: "#FFF"}}>

    <View style={styles.Adshow}>
        <Text style={{ fontSize: 18, color: "#FFFFFF", fontFamily: "PTC7s5F", fontWeight: "700",}}>Order Items List</Text>
    </View>
  
    <View style={styles.mainviewadd}>
        <View style={styles.total}>
            <Text style={{textAlign: "center", fontSize: 20, color: "#1765AD", fontFamily: "PTS56F", fontWeight: "700",}}>
                Order Quantity: 10
            </Text>
        </View>
        <View style={styles.totalprice}>
            <Text style={{textAlign: "center", fontSize: 16, color: "#CFD7DE", fontFamily: "PTS55F", fontWeight: "400",}}>
            Order Total
            </Text>
            <Text style={{textAlign: "center", fontSize: 23, color: "#079076", fontFamily: "PTS55F", fontWeight: "700",}}>
                Rs: 200
            </Text>
        </View>
</View>

    <View style={{height:"66%"}}>
    <FlatList
        data={initialItems}
        numColumns={1}
        renderItem={({ item ,index}) => (
        <View style={styles.Productdetailcontainer}>
        <View style={{ paddingVertical: 5, backgroundColor: colors[index % colors.length],width: "100%", height: 90}}>
        <View style={styles.ProductcattitleCon}> 
            <Text style={styles.Producttexttxt}>{item.title}</Text>                                
        </View>
        <View style={styles.ProductsubCon}>
            <Text style={{ fontSize: 11,textDecorationLine: 'line-through', textDecorationStyle: 'solid',color: "#F58E8E",fontFamily: "PTS55F", fontWeight: "700",}}>Rs {item.price}</Text>
        </View>
        <View style={styles.ProductsubCon}>
        <Text style={{fontSize: 16,fontFamily: "PTS55F", fontWeight: "700", color: "#079076", top: 5}}>Rs: </Text>
        <Text style={{ fontSize: 16,fontFamily: "PTS55F", fontWeight: "700",  color: "#079076", top: 5}}>{item.Myr}</Text>
        </View>
        <View style={{display: "flex", flexDirection: "column", alignItems: "center", bottom: 20, right: 15}}>
            <Text style={{fontSize: 14,fontFamily: "PTS55F", color: "#1765AD", display: "flex", flexDirection: "row",}}>Order Quantity: 1</Text>
        <View style={{display: 'flex', flexDirection: "row"}}>
            <Text style={{fontSize: 14,fontFamily: "PTS55F", color: "#CFD7DE", display: "flex", flexDirection: "row",}}>Sub-Total</Text>
            <Text style={{ fontSize: 14,fontFamily: "PTS55F",fontWeight: "700", color: "#079076", display: "flex", flexDirection: "row",}}>Rs: {item.total}</Text>
        </View>

        <View style={{display: "flex", flexDirection: "row", justifyContent: 'center', alignSelf: "flex-end",borderWidth: 1, borderColor: "#079076", backgroundColor:  '#FFFAFA', width: "10%", height: 38, borderRadius: 5,  position: "absolute", right: 50, bottom: 15}}>
        <TouchableOpacity>
        <View style={{display: "flex", flexDirection: "row", alignSelf: 'center', top: 7}}>
            <Image source = {require("../assets/icons/minus.png")} style={{tintColor: "#F67474"}} />
        </View>
        </TouchableOpacity>
        </View>

        <View style={{display: "flex", flexDirection: "row", justifyContent: 'center', alignSelf: "flex-end",borderWidth: 1, borderColor: "#079076", backgroundColor:  '#F1FCEE', width: "10%", height: 38, borderRadius: 5,  position: "absolute", bottom: 15}}>
        <TouchableOpacity>
        <View style={{display: "flex", flexDirection: "row", alignSelf: 'center',}}>
            <Image source = {require("../assets/icons/plus.png")} style={{tintColor: "#079076", top: 6}} />
        </View>
        </TouchableOpacity>
        </View>

        </View>

        </View>
        </View>

        )}
        />
        </View>
    <View style={styles.btn8}>
      <TouchableOpacity>
        <ButtonAit props={{name:"FINISH ORDER",fontsize:20,fontweight:"800"}}></ButtonAit>
      </TouchableOpacity>
    </View>
    <View style={{ position: "absolute", width: "100%", justifyContent: "center", alignItems: "center", bottom: "10%" }}>
        <Text style={{ backgroundColor: "gray", color: "gray", width: "100%", height: 1, borderRadius: 150 / 2 }}></Text>
    </View>
        <View style={{display: "flex",flexDirection: "row",  justifyContent: 'space-between', position: 'relative', padding: 15}}>
            <TouchableOpacity onPress={() => navigation.navigate('Bag')}>
            <View style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: 'space-between'}}>
                <Image source = {require("../assets/icons/bag.png")} />
                <Text style={{display: "flex", color: '#B3B4B6', fontWeight: "700", fontSize: 12, fontFamily: "PTC75F", top: 5}}>ORDER ITEMS</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: 'space-between'}}>
                <Image source = {require("../assets/icons/order.png")} />
                <Text style={{display: "flex", color: '#B3B4B6', fontWeight: "700", fontSize: 12, fontFamily: "PTC75F", top: 5}}>FINISH ORDER</Text>
            </View>
            </TouchableOpacity>
        </View>

    </View>
          
  );
}



