import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image,BackHandler,Text,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "../assets/css/Style";


let openDrawerMenu = () => { 
  navigation.openDrawer();
}

export default function OrderMessage() {
  const navigation = useNavigation();

  return (
    <View style={{height: "100%", width: "100%" ,backgroundColor: "#FFF"}}>
    
    <View style={styles.Adshow}>
    <TouchableOpacity>
    <Text style={{textAlign: "center", fontSize: 16, color: "#079076", fontFamily: "PTS55F", fontWeight: "700",}}>AD Here</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.OrderCenterView}>
    <View  style={{display:"flex", backgroundColor: "#F5FAFF", width:'100%', height:'40%', flexDirection: "column", justifyContent:"center", alignItems: "center"}}> 
    <View style={{display: "flex", width: "65%", flexDirection: "column", alignItems: "center"}}>
    <Text style={{fontFamily: "PTC75S", fontWeight: "700", color: "#1765AD", fontSize: 24}}>Shukria, Ap ka oder</Text>
    <Text style={{fontFamily: "PTC75S", fontWeight: "700", color: "#1765AD", fontSize: 24}}>jald deliver hoja e ga</Text>
    </View>

    <View>
    <Text style={{fontFamily: "PTC75S", fontWeight: "700",color: "#079076",fontSize: 30}}>Rs:200</Text>
    </View>

    <View>
    <Text style={{fontFamily: "PTC75S", fontWeight: "700",color: "#1765AD",fontSize: 24}}>10 items</Text>
    </View>

    </View>


    </View>


    <View style={styles.OrderAdshow}>
    <TouchableOpacity onPress={() => navigation.navigate("Orderhistory")}>
    <Text style={{textAlign: "center", fontSize: 16, color: "#079076", fontFamily: "PTS55F", fontWeight: "700",}}>AD Here</Text>
    </TouchableOpacity>
    </View>

    </View>
          
  );
}



