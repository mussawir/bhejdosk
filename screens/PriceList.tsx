import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import Messages from './Messages';

const PriceList = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Messages />
      </View>
    </SafeAreaView>
  );
}
export default PriceList;