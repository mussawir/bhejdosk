import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Image, Button, ActivityIndicator, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { v4 as uuid } from 'uuid';
import DocumentPicker from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import fire from '../Databasecon/config';
import ImagePicker from 'react-native-image-crop-picker';
const StartLive = ({ props, navigation, route }) => {

  var RandomID = Math.floor(1000 + Math.random() * 9000);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [getLoader, setLoader] = useState(false);
  const [filePath, setFilePath] = useState(null);
  const [setState, uploadState] = useState('No upload currently active.');
  const [title, setttitle] = useState('');
  const [databaseEntryState, setdatabaseEntryState] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [randomNo, setRandomno] = useState(0);
  const [singleFile, setSingleFile] = useState(null);
  const uuid = route.params.uuid;
  let getchannelName = uuid;
  let channelName = getchannelName;
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
     

        
        // const fileToUpload = singleFile;
      const data = new FormData();
      data.append('file_attachment', {
        uri: mergarr.path,
        type: 'image/jpeg', // or photo.type
        name: name ,
  
           });
      // Please change file upload URL
      fetch('https://aalivemall.mylivemall.com/sso/api/broadcaster/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setSingleFile(mergarr);
          setLoader(false);
        })
        .catch((error) => {
          console.log("llllllllllllll",error);
        });
      });
      

      // setSingleFile(res);s
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      alert('Canceled');
    }
  };

  async function authentication() {
    try {
      await fire.app.auth().signInAnonymously;
    } catch (e) {
      switch (e.code) {
        case 'auth/operation-not-allowed':
          console.log('Enable anonymous in your firebase console.')
          break
        default:
          console.error("e", e)
          break
      }
    }
  }

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground source={require("../assets/videos/video_4_poster.jpg")} style={styles.image}>
            <View style={styles.cenCon}>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "rgba(0,0,0,0.4)", padding: 5, borderRadius: 150 / 2, height: 40 }}>
                  <View style={{ backgroundColor: "#ffffff", borderRadius: 22, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", right: 10 }}>
                    <TouchableOpacity>
                      <Image
                        style={styles.circleimage}
                        source={require("../assets/videos/video_4_poster.jpg")}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ paddingHorizontal: 5, right: 10 }}>
                    <Text style={{ color: "#ffffff", fontStyle: "normal", fontSize: 12 }}>Malaysia</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: 150 / 2, width: 50, height: 35 }}>
                      {/* <Feather name="x" color="#FFFFFF" size={25} onPress={() => navigation.goBack()} /> */}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredmView}>
                <View style={styles.cmodalView}>
                  <Text style={styles.centermtxt}>By turning off this
                    Location Service, your
                    Live broadcast will not
                    indicate country that you
                    located, instead will only
                    show Other with LMG
                    icon. Confirm to turn
                    off?</Text>
                  <View>
                    <View style={styles.mbbuttons}>
                      <Pressable onPress={() => setModalVisible(false)}>
                        <View>
                          <Text style={styles.closeText}>Cancel</Text>
                        </View>
                      </Pressable>
                      <View style={styles.mbleftbd}>
                        <Text style={styles.tfText}>Turn-off</Text></View>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <View style={styles.modalVCenter}>
              {/* <View style={styles.modalView}> */}
              <View style={{ height: "100%", width: "100%", flexDirection: "column", top: "15%" }}>
                <View style={{ height: "100%", width: "100%", flexDirection: "row", }}>
                  <TouchableOpacity onPress={() => chooseFile()}>
                    {singleFile == null ? (
                      <View style={styles.square}>
                        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                          <Feather name="plus" color="#FFFFFF" size={35} />
                        </View>
                        <View style={{ bottom: "5%", alignItems: "center" }}>

                          <Text style={{ color: "white", fontSize: 12 }}>Live Cover</Text>
                        </View>
                      </View>
                    ) : (
                      <View style={styles.square}>
                        <Image
                          source={{ uri: singleFile.path }}
                          style={styles.imageStyle}
                        />
                       {/* <Text>{singleFile.name}</Text> */}
                      </View>
                    )}
                  </TouchableOpacity>
                  <View style={{ left: "5%" }}>
                    <View style={{ top: "5%" }}>
                      <Text style={{ color: "white", fontSize: 15, display: "flex", }}>
                        Live Stream Title
                      </Text>
                    </View>
                    <View style={styles.atutext}>
                      <TextInput
                        style={styles.input}
                        onChangeText={title => setttitle(title)}
                        value={title}
                        name="title"
                        type="text"
                        placeholder="Enter Title..."
                        placeholderTextColor="#FFF"
                      />
                      {/* <View style={{ top: 50, justifyContent: "center", alignItems: "center", right: "5%"}}>
                        <Text style={{ backgroundColor: "red", color: "white", width: "210%", height: 0.5 }}></Text>
                      </View> */}
                    </View>
                  </View>
                </View>
                <View style={{ height: "100%", alignItems: "center" }}>
                  {/* {singleFile != null && title != '' ? */}
                  {title != '' ?
                    <View style={styles.btn}>

                      {/* <TouchableOpacity onPress={() => { navigation.navigate("LiveVideoStreaming", { title: title, type: 'create', user: 'broadcaster', streaming: 'join', RandomID: RandomID, channel: channelName }), authentication(),handleUploadPhoto(), dispatch({ type: "DELETE_CART_ITEM" }) }}> */}
                      {singleFile != null ? 
                      <TouchableOpacity onPress={() => { navigation.navigate("LiveVideoStreaming", { uri: singleFile.name, title: title, type: 'create', user: 'broadcaster', streaming: 'join', RandomID: RandomID, channel: channelName }), authentication(), dispatch({ type: "DELETE_CART_ITEM" }) }}>
                      <View>
                        <Image style={styles.txticn} source={require("../assets/icons/SmallShopIcon.png")} />
                      </View>
                      <View style={styles.txtbtn}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15, textAlign: "center", fontWeight: "normal" }}>
                          Add Product
                        </Text>
                      </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => { navigation.navigate("LiveVideoStreaming", { uri: null, title: title, type: 'create', user: 'broadcaster', streaming: 'join', RandomID: RandomID, channel: channelName }), authentication(), dispatch({ type: "DELETE_CART_ITEM" }) }}>
                    {/* // <TouchableOpacity onPress={() => { navigation.navigate("LiveVideoStreaming", { uri: null, title: title, type: 'create', user: 'broadcaster', streaming: 'join', RandomID: RandomID, channel: channelName }), authentication(), handleUploadPhoto(), dispatch({ type: "DELETE_CART_ITEM" }) }}> */}
                        <View>
                          <Image style={styles.txticn} source={require("../assets/icons/SmallShopIcon.png")} />
                        </View>
                        <View style={styles.txtbtn}>
                          <Text style={{ color: "#FFFFFF", fontSize: 15, textAlign: "center", fontWeight: "normal" }}>
                            Add Product
                          </Text>
                        </View>
                      </TouchableOpacity>
                    }

                    </View>
                    : null}

                </View>
              </View>
              {/* </View> */}
            </View>
            <View style={{ position: "absolute", width: "100%", justifyContent: "center", alignItems: "center", bottom: "0.5%" }}>
              <Text style={{ backgroundColor: "white", color: "white", width: "32%", height: 4, borderRadius: 150 / 2 }}></Text>
            </View>

            <Modal
        animationType="slide"
        transparent={true}
        visible={getLoader}
      >
        <View style={{flex: 1,justifyContent: "center",alignItems: "center",backgroundColor: 'rgba(0,0,0,0.7)',}}>

          <ActivityIndicator
            size={60}
            color="#FFF"
          />
          <Text style={{fontSize: 18,color: '#FFF',}}>Please Wait</Text>
        </View>

      </Modal>

          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  txticn: {
    tintColor: "#FFFFFF",
    justifyContent: "center",
    height: 15,
    width: 20,
    top: 18,
  },
  txtbtn: {
    paddingLeft: "23%",
    height: "95%"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    display: "flex"
  },
  modalVCenter: {
    justifyContent: 'center',
    alignItems: "center",
    height: 130,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "92%",
    display: "flex",
    left: "4%",
    bottom: "10%"
  },
  chacontanir: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    display: "flex"
  },
  righticon: {
    top: 4,
    right: 5,
    display: "flex",
    flexDirection: "row"
  },
  righttxt: {
    color: 'white',
    fontSize: 15,
    right: 10,
    display: "flex"
  },
  atutext: {
    right: "5%",
    top: "3%",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginVertical: 5,
    height: 52,
    borderColor: 'gray',
    padding: 15,
    color: "#FFF",
    fontSize: 16
  },
  subtext: {
    bottom: "18%",
    left: "5%",
    alignItems: "flex-start",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-start",
    width: "80%"
  },
  faceicon: {
    left: "10%",
    display: "flex",
    flexDirection: "row",
    width: "25%",
  },
  instaicon: {
    display: "flex",
    flexDirection: "row",
    width: "15%"
  },
  chaticon: {
    display: "flex",
    flexDirection: "row"
  },
  btn: {
    justifyContent: "center",
    top: "10%",
    height: 40,
    width: "50%",
    borderWidth: 0.5,
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  btn1: {
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "50%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  beauty: {
    flexDirection: "row",
    display: "flex",
    width: "30%",
    top: "7%"
  },
  square: {
    width: 100,
    height: 80,
    backgroundColor: "rgba(0,0,0,0.7)",
    top: "1%",
    left: "5%",
    display: "flex",
    flexDirection: "column"
  },
  circleimage: {
    width: wp('12%'),
    height: 40,
    borderRadius: 150 / 2,
    overflow: "hidden",
    display: "flex"
  },
  cenCon: {
    width: "100%",
    position: 'absolute',
    top: "5%",
    height: "100%",
    paddingHorizontal: 10,
    display: "flex"
  },
  centeredmView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: "flex",
  },
  cmodalView: {
    backgroundColor: "white",
    height: '25.5%',
    width: wp('65%'),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: "5%",
    display: "flex"
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    display: "flex"
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    display: "flex"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    display: "flex"
  },
  centermtxt: {
    marginBottom: "10%",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row"
  },
  mbbuttons: {
    flexDirection: 'row',
    display: 'flex',
    color: '#00479e',
    textAlign: 'left',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  mbleftbd: {
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    paddingHorizontal: 10,
    display: "flex"

  },
  closeText: {
    fontSize: 16,
    color: '#00479e',
    paddingVertical: 10,
    display: "flex"
  },
  tfText: {
    fontSize: 16,
    color: 'red',
    paddingVertical: 10,
    display: "flex",
    left: 15
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  selectImage: {
    width: wp('27%'),
    height: 80,
    overflow: "hidden",
    display: "flex"
  }
})


export default StartLive;