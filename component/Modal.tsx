import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity} from "react-native";
import styles from "../assets/css/Style";
import Feather from 'react-native-vector-icons/Feather';
import axios from 'react-native-axios';
import { useSelector,useDispatch } from 'react-redux';
import { SetUserLoggin, USER_IS_lOGOUT } from '../redux/action/actions';
import { useNavigation } from '@react-navigation/native';

const Model = () => {
const navigation = useNavigation();
const [modalVisible, setModalVisible] = useState(false);
const dispatch = useDispatch();
const userLoged = user => dispatch(SetUserLoggin(user));
const getUserInfo = useSelector(state => state.userReducer);
const shop_id = getUserInfo.user.id;
const is_Delivery = getUserInfo.user.is_delivery;
console.log('ModelModelModelModelModelModelModelModelModelModelModelModel',getUserInfo.user.is_delivery);

const PressStartDelivery = () => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/stop/delivery/${shop_id}`).then(async (res) => {
      const [response] = await res.data.data;
      userLoged(response);
      console.log("PressDeliveryPressDeliveryPressDeliveryPressDeliveryPressDeliveryPressDelivery",response);
     
  });
};

const PressStopDelivery = () => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/start/delivery/${shop_id}`).then(async (res) => {
      const [response] = await res.data.data;
      userLoged(response);
      console.log("PressDeliveryPressDeliveryPressDeliveryPressDeliveryPressDeliveryPressDelivery",response);
     
  });
};

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start",}}>
              <Text style={{display: "flex", fontSize: 16, fontWeight: "500", color: "#1765AD", fontFamily: "PTC55F"}}>Profile</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {setModalVisible(false), navigation.navigate('AddGroup')}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
              <Text style={{display: "flex", fontSize: 16, fontWeight: "500", color: "#1765AD", fontFamily: "PTC55F"}}>Create Group</Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress = {() => {setModalVisible(false), navigation.navigate('GroupList')}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
              <Text style={{display: "flex", fontSize: 16, fontWeight: "500", color: "#1765AD", fontFamily: "PTC55F"}}>Groups List</Text>
            </View>
            </TouchableOpacity>

            {is_Delivery == 1 ? (
              <TouchableOpacity onPress = {() => PressStartDelivery()}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
              <Text style={{display: "flex", fontSize: 16, fontWeight: "500", color: "#1765AD", fontFamily: "PTC55F"}}>Stop Delivering</Text>
            </View>
            </TouchableOpacity>
            ):(

              <TouchableOpacity onPress = {() => PressStopDelivery()}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
              <Text style={{display: "flex", fontSize: 16, fontWeight: "500", color: "#1765AD", fontFamily: "PTC55F"}}>Start Delivering</Text>
            </View>
            </TouchableOpacity>

            )}
            

            <TouchableOpacity onPress = {() => {dispatch({ type: USER_IS_lOGOUT }),navigation.navigate("Splashscreen")}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
              <Text style={{display: "flex", fontSize: 16, fontWeight: "500", color: "#1765AD", fontFamily: "PTC55F"}}>LogOut</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {setModalVisible(true)}}
      >
      <View style={{left: 10}}>
        <Image source={require("../assets/icons/linear_scale.png")} style={{tintColor: "#1765AD"}} />
      </View>
      </Pressable>
    </View>
  );
};

export default Model;