import React, {useState} from 'react';
import { View, Text,} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../assets/css/Style";


const data = [
    {label: '  Rice Banaspati Rs:200', value: '1'},
    {label: '  Cooking Oil, Ghee Rs:500', value: '2'},
    {label: '  Sugar, Salt, Pepper Rs:600', value: '3'},
    {label: '  Colddrink, Juices All Flavours Rs:250', value: '4'},
    {label: '  Bread, Rusk, Butter Rs:400', value: '5'},
    {label: '  Dairy & Eggs Rs:700', value: '6'},
    {label: '  Honey & Vinegar Rs:650', value: '7'},
    {label: '  All Types Masala Rs:800', value: '8'},
];

const Dropdownscreen = _props => {
    const [dropdown, setDropdown] = useState(null);
    const [selected, setSelected] = useState([]);

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            <Icon name="check-circle-o" size={18} style={styles.icon1} />
        </View>
        );
    };

    return (
        <View style={{ height: 60, width: 460, backgroundColor: "#fafbfd", alignSelf: "center", left: "2%"}}>
        <View style={styles.Picker}>
            <Dropdown
                style={styles.dropdown}
                data={data}
                placeholderStyle={{
                    color: '#fff',
                    fontFamily: "PTS55F",
                    fontWeight: "700",
                    backgroundColor: "#3A5AB1"
                  }}
                search
                searchPlaceholder="Search"
                labelField="label"
                valueField="value"
                iconColor="#FFFFFF"
                fontFamily= "PTS55F"
                placeholder="PRICE LIST"
                value={dropdown}
                onChange={item => {
                setDropdown(item.value);
                    console.log('selected', item);
                }}
                // renderLeftIcon={() => (
                //     <Entypo name="shop" color="black" size={30} style={styles.icon2}/>
                // )}
                renderItem={item => _renderItem(item)}
                textError="Error"
            />
        </View>
       
        </View>
    );
};

export default Dropdownscreen;
