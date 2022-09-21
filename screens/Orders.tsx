import * as React from 'react';
import { View, SafeAreaView, Text, Image} from 'react-native';
import Orderlist from "../component/Orderlist";
import Style from '../assets/css/Style';
import BottomTabView from "../tabView/BottomTabView";

const Orders = ({ navigation }) => {
  return (
    <SafeAreaView style={Style.Maincontainer}>
      
      <View style={Style.container1}>
        <Orderlist />
      </View>

      <View style={Style.order}>
        <Text style={Style.ordertxt}>1000 points left, please buy more points and keep selling</Text>
      </View>

      <View style={Style.mainbottom}>
        <BottomTabView />
      </View>
      
    </SafeAreaView>
  );
}
export default Orders;