import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import {View, TouchableOpacity, Image,Text,ScrollView,SafeAreaView,ToastAndroid,ActivityIndicator,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from './ButtonAit';
import { TabActions } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import Style from "../assets/css/DeleteGroupStyle";
import { State, TextInput } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import BottomTabView from "../tabView/BottomTabView";
import axios from 'react-native-axios';
import { useDispatch, useSelector } from 'react-redux';

export default function DeleteGroup({props,route}) {
const navigation = useNavigation();
const [modalVisible, setModalVisible] = useState(false);
const group_id = route.params.id;

const DeleteGroup = () => {
    axios.get(`https://bhejdo.net/api/v1/shopkeeper/group/delete/${group_id}`).then(async (res) => {
    const response = await res.data.data;
    showToastDeleteGroup();
    setModalVisible(true);
  });
}
const showToastDeleteGroup = () => {
  ToastAndroid.showWithGravity(
      "Your Group Has Been Delete Successfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
  navigation.navigate('GroupList',{group_id: group_id});
};

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
    <SafeAreaView style={Style.MainContainer}>
    <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontFamily: 'PTS55F',fontSize: 16, color: "#1765AD",fontWeight: "700", textAlign: "center"}}>Please click Yes to delete this group else click on Cancel</Text>
    </View>
    <View style={Style.Mainbtn}>
    <View style={Style.btn2}>
      <TouchableOpacity style={Style.btn_touch} onPress={()=> navigation.navigate("GroupList")}>
        <ButtonAit props={{name:"NO",fontsize:16,fontweight:"700"}}></ButtonAit>
      </TouchableOpacity>
    </View>

    <View style={Style.btn2}>
      <TouchableOpacity style={Style.btn_touch} onPress={()=> DeleteGroup()}>
        <ButtonAit props={{name:"YES",fontsize:16,fontweight:"700"}}></ButtonAit>
      </TouchableOpacity>
    </View>
    </View>

    <View style={{flex: 0.8, justifyContent: "flex-end"}}>
      <BottomTabView />
    </View>

      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0,0.7)',}}>
        <ActivityIndicator
          size={60}
          color="#FFF" />
        <Text style={{ fontSize: 18, color: '#FFF',}}>Please Wait</Text>
      </View>

    </Modal>

    </SafeAreaView>
    </ScrollView>
      );
    }