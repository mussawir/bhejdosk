import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import {View, TouchableOpacity, Image,Text,ScrollView,SafeAreaView,ToastAndroid,ActivityIndicator,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonAit from './ButtonAit';
import { TabActions } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import Style from "../assets/css/UpdateGroupStyle";
import { State, TextInput } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import BottomTabView from "../tabView/BottomTabView";
import axios from 'react-native-axios';
import { useDispatch, useSelector } from 'react-redux';

let colors = ['#FBFBFB', '#FFFFFF'];
export default function UpdateGroup({props,route}) {
const navigation = useNavigation();
const [name, setname] = useState(null);
const [discription, setdiscription] = useState(null);
const shopInfo = useSelector(state => state.userReducer);
const shop_id = shopInfo.user.id;
const Shop_owner = shopInfo.user.shop_onwer;
const [singleFile, setSingleFile] = useState(null);
const [getOldImage, setOldImage] = useState(null);
const [extFile, setextFile] = useState(null);
const [filePath, setFilePath] = useState(null);
const [getLoader, setLoader] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
const group_id = route.params.id;
const group_image = route.params.image;
const group_discription = route.params.discription;
const group_name = route.params.name;


useEffect(() => {
    setname(group_name);
    setdiscription(group_discription);
    setOldImage(group_image);
},[]);
const CreateGroup = () =>{
  const formData = new FormData();
  console.log("singleFile.pathsingleFile.pathsingleFile.pathsingleFile.path",singleFile);
  console.log("singleFile.namesingleFile.namesingleFile.namesingleFile.namesingleFile.name",singleFile);
  formData.append(
    "shop_id", shop_id
  );
  formData.append(
    "name", name
  );
  formData.append(
    "discription", discription
  );

  if(singleFile == null){

    formData.append(
        'image',getOldImage
      );
  }else{
    formData.append('file_attachment', {
        uri: singleFile.path,
        type: 'image/jpeg', // or photo.type
        name: singleFile.name ,
      });   
  }

  axios({
    url: `https://bhejdo.net/api/v1/shopkeeper/edit/group/${group_id}`,
    method: 'POST',
    data: formData
  }).then(function (response) {
    console.log('thenthenthenthenthenthenthenthenthen', response);
            if (response.data.status == 200) {
              console.log('CreateGroupCreateGroupCreateGroupCreateGroup', response);
              showToast();
              setModalVisible(true);
            } else if (response.data.status == 300){
                // showToastAlreadyTaken();
              console.log('xxxxxxxxxxxxxxxxx', response);
            }
        
        }).catch((error) => {
            console.log(error);
        });
}
const showToast = () => {
  ToastAndroid.showWithGravity(
      "Group Has Been Updated Successfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
  );
  navigation.navigate('GroupList',{shop_id: shop_id, name: name, discription: discription, image: Image});
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
      <TouchableOpacity style={Style.btn_touch2} onPress={() => chooseFile()}>
        <Image source={{ uri: getOldImage }} style={Style.prodimg}/>
      </TouchableOpacity>
      ) : (
      <TouchableOpacity style={Style.btn_touch2}  onPress={() => chooseFile()}>
        <Image source={{ uri: singleFile.path }} style={Style.prodimg}/>
      </TouchableOpacity>
      )}
      </View>

      {/* <View style={Style.Mainbtn}>
      <View style={Style.btn}>
        <TouchableOpacity onPress={() => chooseFile()}>
          <ButtonAit props={{name:"ADD IMAGE",fontsize:12,fontweight:"700"}}></ButtonAit>
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
      placeholder="GROUP NAME"
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
      placeholder="GROUP DESCRIPTION"
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
    </View>



    <View style={Style.btn2}>
      <TouchableOpacity style={Style.btn_touch} onPress={()=>  CreateGroup()}>
        <ButtonAit props={{name:"Update GROUP",fontsize:16,fontweight:"700"}}></ButtonAit>
      </TouchableOpacity>
    </View>

    <View style={Style.btn3}>
      <TouchableOpacity style={Style.btn_touch1} onPress={()=> navigation.navigate("GroupList")}>
        <ButtonAit props={{name:"MANAGE ITEMS",fontsize:16,fontweight:"700"}}></ButtonAit>
      </TouchableOpacity>
    </View>

    {/* <View style={Style.btn2}>
      <TouchableOpacity style={Style.btn_touch} onPress={()=> AddExtImg()}>
        <ButtonAit props={{name:"ADD EXT ITEM",fontsize:16,fontweight:"700"}}></ButtonAit>
      </TouchableOpacity>
    </View> */}

    <View style={{flex: 0.4, justifyContent: "flex-end"}}>
      <BottomTabView />
    </View>

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
          color="#FFF"/>
        <Text style={{ fontSize: 18,color: '#FFF',}}>Please Wait</Text>
      </View>

    </Modal>

    </SafeAreaView>
    </ScrollView>
      );
    }