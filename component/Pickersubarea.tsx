import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Style from "../assets/css/SubAreaPickerStyle";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setManuallySubArea } from '../redux/action/actions';
import Axios from 'react-native-axios';

const Pickersubarea = ({ subAreaData }) => {

    console.log('subAreaData', subAreaData);

    const dispatch = useDispatch();
    const [subarea, setSubArea] = useState(null);

    const [sub_area, setSub_areaAll] = useState([]);
    const setManuallysubArea = area => dispatch(setManuallySubArea(area));
    const getsubareasfromrdx = useSelector(state => state.userReducer);
    // console.log('subareasubareasubareasubareasubarea',getsubareasfromrdx.subarea);
    const subareas = getsubareasfromrdx?.subarea;
    // console.log("subareassubareassubareassubareassubareassubareas",getsubareasfromrdx.subareas);
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
                data={subAreaData}
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
                placeholder="SELECT SUB AREA"
                value={subarea}
                onChange={item => {
                    setSubArea(item?.value);
                    const subarea = { sub_area: item.value, sub_area_id: item.id };
                    setManuallysubArea(subarea);
                    console.log('selected 1111', subarea);
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

export default Pickersubarea;
