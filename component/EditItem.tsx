import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import {View, TouchableOpacity, Image,Text,ScrollView,SafeAreaView,ToastAndroid,ActivityIndicator,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from './ButtonAit';
import { TabActions } from '@react-navigation/native';
import Style from "../assets/css/EditproductStyle";
import { TextInput } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import BottomTabView from "../tabView/BottomTabView";
import axios from 'react-native-axios';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';

let colors = ['#FBFBFB', '#FFFFFF'];
export default function EditItem(props) {
  
const navigation = useNavigation();
const [checked, setChecked] = React.useState(false);
const [name, setname] = useState(null);
const [discription, setdiscription] = useState(null);
const [discount, setdiscount] = useState(null);
const [price, setprice] = useState(null);
const shopInfo = useSelector(state => state.userReducer);
const shop_id = shopInfo.user.id;
const Shop_owner = shopInfo.user.shop_onwer;
const id = props.route.params.item_id;
const [singleFile, setSingleFile] = useState(null);
const [filePath, setFilePath] = useState(null);
const [getLoader, setLoader] = useState(false);
const [getEditItem, setEditItem] = useState(null);
const [modalVisible, setModalVisible] = useState(true);
// console.log("ididididididididididididididid",id);
useEffect(() => {
  axios.get(`https://bhejdo.net/api/v1/shopkeeper/item/${id}`).then(async (res) => {
    console.log("useEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffect",typeof(res.data.data));
      const response = await res.data.data;
      if (res.data.data == null) {
        setEditItem(null);
      } else {
        setname(response.name);
        setdiscription(response.discription);
        setprice(response.price);
        setdiscount(response.discount);
        setEditItem(response);
        setModalVisible(false);
      }
  });
},[]);

const UpdateItem = () =>{
const formData = new FormData();

  formData.append(
    "shop_id", shop_id
  );
  formData.append(
    "name", name
  );
  formData.append(
    "discription", discription
  );
  formData.append(
    "price", price
  );
  formData.append(
    "discount", discount
  );
  formData.append(
    "image", getEditItem.main_image
  );
  if(singleFile != null){
    formData.append('file_attachment', {
      uri: singleFile.path,
      type: 'image/jpeg', // or photo.type
      name: singleFile.name ,
    });
  }
  

  axios({
    url: `https://bhejdo.net/api/v1/shopkeeper/update/item/${id}/${Shop_owner}`,
    method: 'POST',
    data: formData
  }).then(function (response) {
            if (response.data.status == 200) {
                console.log('xxxxxxxxxxxxxxxxx200200200200200200', response);
            } else {
                console.log('xxxxxxxxxxxxxxxxx', response);
            }
          showToast();
        }).catch((error) => {
            console.log(error);
        });
}
const showToast = () => {
  ToastAndroid.showWithGravity(
      "Shopkeeper UpdatedItem Successfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
  navigation.navigate('Home');
};

const chooseFile = async () => {
  try {
    const res = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    })
    .then(image => {
      setLoader(true);
      let name = image.path.substring(image.path.lastIndexOf('/') + 1, image.path.length);
      let mergarr = {...image,name}
   setSingleFile(mergarr);
   });
    // setSingleFile(res);
  } catch (err) {
    setSingleFile(null);
    // Handling any exception (If any)
    alert('Canceled');
  }
};



  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
    <SafeAreaView style={Style.MainContainer}>
  
      <View style={Style.Mainproduct}>
    
      <View style={Style.prodadd}>
      {getEditItem?.main_image == null  ?
      <TouchableOpacity style={Style.btn_touch1} onPress={() => chooseFile()}>
        <Image source={require("../assets/icons/image1.png")} style={Style.prodimg} />
      </TouchableOpacity>
      :
      singleFile != null ?
      <TouchableOpacity style={Style.btn_touch1} onPress={() => chooseFile()}>
        <Image source={{ uri: singleFile.path }} style={Style.prodimg} />
      </TouchableOpacity>
      :
      <TouchableOpacity style={Style.btn_touch1} onPress={() => chooseFile()}>
        <Image source={{ uri: getEditItem.main_image }} style={Style.prodimg} />
      </TouchableOpacity>
      }
      </View>
    
      {/* <View style={Style.Mainbtn}>
      <View style={Style.btn}>
        <TouchableOpacity onPress={() => chooseFile()}>
          <ButtonAit props={{name:"CHANGE MAIN IMAGE",fontsize:12,fontweight:"700"}}></ButtonAit>
        </TouchableOpacity>
      </View>
      </View> */}

      </View>
    <View style={Style.MainInput}>
      
    <View style={Style.input1}>
    <View style={Style.iconimg}>
      <Image source = {require("../assets/icons/setmeal.png")} style={Style.icon} />
    </View>
    <TextInput
      style={Style.input2}
      placeholder="ITEM KA NAME"
      placeholderTextColor="#1765AD"
      keyboardType="default"
      maxLength={30}
      value={name}
      onChangeText={value=> {setname(value);
      }}
    />
    </View>
    <View style={Style.mainunderline}>
      <Text style={Style.underlineInput}></Text>
    </View>

    <View style={Style.input1}>
    <View style={Style.iconimg}>
      <Image source = {require("../assets/icons/postadd.png")} style={Style.icon} />
    </View>
    <TextInput
      style={Style.input2}
      placeholder="ITEM DESCRIPTION"
      placeholderTextColor="#1765AD"
      keyboardType="default"
      maxLength={30}
      value={discription}
      onChangeText={value=> {setdiscription(value);
      }}
    />
    </View>
    <View style={Style.mainunderline}>
      <Text style={Style.underlineInput}></Text>
    </View>

    <View style={Style.input1}>
    <View style={Style.iconimg}>
      <Image source = {require("../assets/icons/monetization.png")} style={Style.icon} />
    </View>
    <TextInput
      style={Style.input2}
      placeholder="PRICE"
      placeholderTextColor="#1765AD"
      keyboardType="decimal-pad"
      maxLength={20}
      value={price}
      onChangeText={value=> {setprice(value);
      }}
    />
    </View>
    <View style={Style.mainunderline}>
      <Text style={Style.underlineInput}></Text>
    </View>

    <View style={Style.input1}>
    <View style={Style.iconimg}>
      <Image source = {require("../assets/icons/money.png")} style={Style.icon} />
    </View>
    <TextInput
      style={Style.input2}
      placeholder="DISCOUNT"
      placeholderTextColor="#1765AD"
      keyboardType="decimal-pad"
      maxLength={20}
      value={discount}
      onChangeText={value=> {setdiscount(value);
      }}
    />
    </View>
    <View style={Style.mainunderline}>
      <Text style={Style.underlineInput}></Text>
    </View>
    </View>

  <View style={Style.stock}>
    <Text style={Style.stocktxt}>IN STOCK</Text>
       <Checkbox
        uncheckedColor="#079076"
        color="#079076"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
        setChecked(!checked);
      }}
    />
  </View>

    <View style={Style.btn2}>
      <TouchableOpacity onPress={() => {setModalVisible(true), UpdateItem()}}>
        <ButtonAit props={{name:"UPDATE ITEM",fontsize:16,fontweight:"700"}}></ButtonAit>
      </TouchableOpacity>
    </View>

    <View style={{flex: 0.3, justifyContent: "flex-end"}}>
      <BottomTabView />
    </View>

    {modalVisible == true ? 
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
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

    </SafeAreaView>
    </ScrollView>
      );
    }



