import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Style from "../assets/css/Areapicker";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { useDispatch } from 'react-redux';
import { setManuallySingleArea } from '../redux/action/actions';
import { styles } from 'react-native-element-dropdown/src/TextInput/styles';

const Pickerarea = ({ areas, updateSubAreaData }) => {

    const dispatch = useDispatch();
    const setManuallysingleArea = singlearea => dispatch(setManuallySingleArea(singlearea));
    const _renderItem = item => {
        return (
            <View style={Style.item}>
                <Text style={Style.textItem}>{item.value}</Text>
            </View>
        );
    };


    return (
        <View style={Style.container}>
            <Dropdown
                style={Style.Regdropdown}
                data={areas}
                placeholderStyle={{
                    color: '#047FB8',
                    fontSize: 18,
                    fontFamily: "PTC75F",
                    fontWeight: "700",
                    textAlign: "center"
                }}
                search
                searchPlaceholder="Search"
                labelField="label"
                valueField="value"
                iconColor="#E6E6E7"
                placeholder="SELECT MAIN AREA"
                value={null}
                onChange={(item) => {
                    if(item){
                        updateSubAreaData(item?.id);
                        const singlearea = { area: item.value, area_id: item.id };
                        console.log('selected 1111', singlearea);
                        setManuallysingleArea(singlearea);
                    }
                }}
                selectedTextStyle={{
                    fontSize: 18,
                    fontWeight: "700",
                    color: '#047FB8',
                    textAlign: "center"
                }}
                renderItem={item => _renderItem(item)}
            // textError="Error"
            />
        </View>
    );
};

export default Pickerarea;