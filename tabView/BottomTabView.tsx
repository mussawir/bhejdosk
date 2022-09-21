import React, { useState, useLayoutEffect } from "react";
import { View, TouchableOpacity, Image, Modal, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from "../assets/css/TabviewStyle";

const BottomTabView = () => {
const navigation = useNavigation();
const [getModalVisible, setModalVisible] = useState(false);

return (
<View style={Style.footerContainer}>

    <View style={Style.mainicon}>
        <TouchableOpacity onPress = {() => navigation.navigate("Home")}>
            <Image  source = {require("../assets/icons/neworder.png")} style={Style.mainiconimg} />
            <Text style={Style.mainicontxt}>NEW ODERS</Text>
        </TouchableOpacity>
    </View>

    <View style={Style.mainicon}>
        <TouchableOpacity>
            <Image source = {require("../assets/icons/Shops.png")} style={Style.mainiconimg} />
            <Text style={Style.mainicontxt}>SHOP SALE</Text>
        </TouchableOpacity>
    </View>

    <View style={Style.mainicon}>
        <TouchableOpacity>
            <Image source = {require("../assets/icons/customer.png")} style={Style.mainiconimg} />
            <Text style={Style.mainicontxt}>CUSTOMERS</Text>
        </TouchableOpacity>
    </View>

    <View style={Style.mainicon}>
        <TouchableOpacity onPress = {() => navigation.navigate("ItemsList")}>
            <Image source = {require("../assets/icons/product.png")} style={Style.mainiconimg} />
            <Text style={Style.mainicontxt}>ITEMS</Text>
        </TouchableOpacity>
    </View>

    
    {getModalVisible == true ? 
      <Modal
      animationType="slide"
      transparent={true}
      visible={getModalVisible}
    >
      <View style={{flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.7)',}}>

        <ActivityIndicator
          size={60}
          color="#FFF"
        />
        <Text style={{ fontSize: 18,
  color: '#FFF',}}>Please Wait</Text>
      </View>

    </Modal>
    :
<View></View>
    }

</View>

    )
}

export default BottomTabView;