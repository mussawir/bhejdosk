import React, {useState,useEffect,useLayoutEffect} from 'react';
import {View, SafeAreaView,Modal,ActivityIndicator,Text,BackHandler} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'react-native-axios';
import Flatlist from "./Flatlist";
import Style from "../assets/css/FlatlistStyle";
import { useDispatch, useSelector } from 'react-redux';
import { SetIsOrder } from '../redux/action/actions';
import { useFocusEffect } from '@react-navigation/native';
import BottomTabView from '../tabView/BottomTabView';

const Grouplist = ({navigation,route}) => {
// const navigation = useNavigation(); 
const [getGrouplist ,setGrouplist] = useState(null);
const [orderid,setOrderid]= useState('');
const [getLoader, setLoader] = useState(true);
// const dispatch = useDispatch();
const shopInfo = useSelector(state => state.userReducer);
const shop_id = shopInfo.user.id;
console.log("user_Infouser_Infouser_Infouser_Infouser_Infouser_Info",shop_id);
useEffect(() => {
    axios.get(`https://bhejdo.net/api/v1/shopkeeper/group/list/${shop_id}`).then(async (res) => {
        const response = await res.data.data;
        if (res.data.data == null) {
          setGrouplist(null);
        } else {
          setGrouplist(response);
          setLoader(false);
        }
    });
},[route]);

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

    <SafeAreaView style={Style.Container}>
    {getGrouplist == null ? (
      <View></View>
      ):(
      <Flatlist props={{sdata: getGrouplist,com:'Grouplist'}}></Flatlist>
    )}

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
    </SafeAreaView>
  );
};
export default Grouplist;
