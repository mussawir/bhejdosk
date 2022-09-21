import * as React from 'react';
import { View, SafeAreaView, Text} from 'react-native';
import Style from '../assets/css/Style';

const ReturnsOrder = ({ navigation }) => {
  return (
    <SafeAreaView style={Style.Maincontainer}>
      <View style={Style.container2}>
        <Text style={Style.title}>Welcome To Return Order</Text>
      </View>
    </SafeAreaView>
  );
}
export default ReturnsOrder;