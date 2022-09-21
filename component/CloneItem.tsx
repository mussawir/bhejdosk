import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import {View, TouchableOpacity, Image,Text,ScrollView,SafeAreaView,ToastAndroid,ActivityIndicator,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from './ButtonAit';
import ImagePicker from 'react-native-image-crop-picker';
import Style from "../assets/css/CloneAddStyle";
import { State, TextInput } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import BottomTabView from "../tabView/BottomTabView";
import axios from 'react-native-axios';
import { useDispatch, useSelector } from 'react-redux';

let colors = ['#FBFBFB', '#FFFFFF'];
export default function CloneItem({route}) {
const navigation = useNavigation();
const [checked, setChecked] = React.useState(false);
const [name, setname] = useState(null);
const [discription, setdiscription] = useState(null);
const [discount, setdiscount] = useState(null);
const [price, setprice] = useState(null);
const shopInfo = useSelector(state => state.userReducer);
const shop_id = shopInfo.user.id;
const Shop_owner = shopInfo.user.shop_onwer;
const id = route.params.item_id;
const clonename = route.params.item_name;
const clonediscription = route.params.item_discription;
const cloneprice = route.params.item_price;
const clonediscount = route.params.item_discount;
const main_image = route.params.item_image;
const [singleFile, setSingleFile] = useState(null);
const [extFile, setextFile] = useState(null);
const [filePath, setFilePath] = useState(null);
const [getLoader, setLoader] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const [getcloneitem, setcloneItem] = useState(null);

useEffect(() => {
  setname(clonename);
  setdiscription(clonediscription);
  setprice(cloneprice);
  setdiscount(clonediscount);
  setcloneItem(main_image);
},[]);

const AddCloneItem = () =>{
  const formData = new FormData();
  console.log("formDataformDataformDataformDataformData",formData);
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
  if(singleFile == null){
  formData.append(
    "image", getcloneitem
  );
  }else{
  formData.append('file_attachment', {
    uri: singleFile.path,
    type: 'image/jpeg', // or photo.type
    name: singleFile.name ,
  });
  }
  
  axios({
    url: `https://bhejdo.net/api/v1/shopkeeper/add/clone/item/${id}`,
    method: 'POST',
    data: formData
  }).then(function (response) {
    console.log('200 xxxxxxxxxxxxxxxx', response);
            if (response.data.status == 200) {
              showToast();
            }
            else{
              showToastAlready();
            }
        }).catch((error) => {
            console.log(error);
        });
}
const showToast = () => {
  ToastAndroid.showWithGravity(
      "Shopkeeper Add Clone Item Successfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
  // navigation.navigate('Home');
};
const showToastAlready = () => {
    ToastAndroid.showWithGravity(
        "You Have Already Item Name!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
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
      {singleFile == null  ? (
        <TouchableOpacity style={Style.btn_touch1} onPress={() => chooseFile()}>
          <Image source={{ uri: getcloneitem }} style={Style.prodimg}/>
        </TouchableOpacity>
        ) : (
        <TouchableOpacity style={Style.btn_touch1} onPress={() => chooseFile()}>
          <Image source={{ uri: singleFile.path }} style={Style.prodimg} />
        </TouchableOpacity>
      )}
      </View>

      {/* <View style={Style.Mainbtn}>
      <TouchableOpacity style={Style.btn_touch1} onPress={() => chooseFile()}>
      <View style={Style.btn}>
          <ButtonAit props={{name:"ADD MAIN IMAGE",fontsize:12,fontweight:"700"}}></ButtonAit>
      </View>
      </TouchableOpacity>
      </View> */}

      </View>
     
    <View style={Style.MainInput}>

    <View style={Style.input1}>
      <View style={Style.iconimg}>
        <Image source = {require("../assets/icons/setmeal.png")} style={Style.icon} />
      </View>
    <TextInput
      style={Style.input2}
      placeholder="ITEM NAME"
      placeholderTextColor="#1765AD"
      keyboardType="default"
      maxLength={20}
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
      maxLength={20}
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
      <TouchableOpacity style={Style.btn_touch} onPress={()=>  AddCloneItem()}>
        <ButtonAit props={{name:"ADD CLONE ITEM",fontsize:16,fontweight:"700"}}></ButtonAit>
      </TouchableOpacity>
    </View>

    {/* <View style={Style.btn2}>
      <TouchableOpacity style={Style.btn_touch} onPress={()=> AddExtImg()}>
        <ButtonAit props={{name:"ADD EXT ITEM",fontsize:16,fontweight:"700"}}></ButtonAit>
      </TouchableOpacity>
    </View> */}

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