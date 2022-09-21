import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Style from "../assets/css/PickerCityStyle";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import Axios from 'react-native-axios';
import { useDispatch, useSelector } from 'react-redux';
import { setManuallySingleCity } from '../redux/action/actions';

const PickerCity = ({ cities }) => {

    const dispatch = useDispatch();
    const SelectManuallySingleCity = singleCity => dispatch(setManuallySingleCity(singleCity));
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
                data={cities}
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
                placeholder="SELECT MAIN CITY"
                value={null}
                onChange={(item) => {
                    if(item){
                        const singlecity = { city: item.value, city_id: item.id };
                        // console.log('selected 1111', singlecity);
                        SelectManuallySingleCity(singlecity);
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
            <View style={Style.content}>
                <Text style={Style.content_text}></Text>
            </View>
        </View>
    );
};

export default PickerCity;