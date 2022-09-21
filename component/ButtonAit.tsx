import * as React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';

const ButtonAit = ({ navigation ,route,props}) => {
const name = props.name;
const fontsize = props.fontsize;
const fontweight = props.fontweight;

  return (
        
    <View>
      <Text style={{ textAlign: "center", fontFamily: "Raleway-Black", color: "#FFFFFF", fontWeight:fontweight,fontSize:fontsize}}>{name}</Text>
    </View>
    
  );
};

export default ButtonAit;
