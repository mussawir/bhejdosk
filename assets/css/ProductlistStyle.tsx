import {StyleSheet} from "react-native";

export default StyleSheet.create({
Maincontainer: {
    flex: 1,
    backgroundColor: "#FFF",
},
heading: {
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    alignSelf: "center",
    padding: 5,
    bottom: 3,
},
headtxt: {
    color: "#5675C6", 
    fontWeight: "400", 
    fontSize: 20, 
    fontFamily: "PTC55F"
},
mainsearch: {
    flex: 1, 
    flexDirection: "row", 
    alignSelf: "center", 
    justifyContent: "flex-end", 
    alignItems: "center", 
    borderWidth: 1, 
    width: "70%",
    borderColor: "#eee",
    bottom: 5
},
maintype: {
    flexDirection:"row",
    padding: 8,
    alignSelf:"center",
    width:"75%"
},
Productdetailcontainer: {
    flex: 1,
    flexDirection: "row",
    height: 85,
    width: "100%",
    alignSelf: "center",
},
pDetailmainSubCon2: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    width: "100%",
    height: "90%",
},
borderimg: {
    flex: 0.7,
    height: 62, 
    width: 62, 
    backgroundColor: "#ffffff",  
    borderWidth: 1.5, 
    borderColor: "#F2F2F2", 
    borderRadius: 5,  
    alignSelf: "center", 
    alignItems: "center", 
    justifyContent: "center",
    left: 3
},
ProductsubCon: {
    flex: 1.2,
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10
},
prodtxt: {
    fontSize: 14, 
    color: "#047FB8", 
    fontFamily: "PTS55F", 
    fontWeight: "700",
},
price: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
},
Pricetxt: {
    flexDirection: "row",
    fontFamily: 'PTS55F',
    fontSize: 12, 
    color: "#646465",
    fontWeight: "700",
    textDecorationLine: 'line-through'
},
Pricetxt1: {
    flexDirection: "row",
    fontFamily: 'PTS55F',
    fontSize: 14,
    color: "#047FB8",
    fontWeight: "700",
},
filt: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
},
Mainicon: {
    flex: 1, 
    flexDirection: "row", 
    alignSelf: "center",
    right: 3
},
btn: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1765AD",
    width: "85%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
},
icon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
},
input: {
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 17,
    fontFamily: "PTC55F",
    width: "100%",
    borderWidth:1,
    borderColor:"#079076",
    borderRadius:10,
    color: "#1765AD",
    textAlign: "left",
    backgroundColor:"#FBFBFB"
},
color: {
    tintColor: "#1765AD"
},
ProdImage:{
    width: "85%", 
    height: "85%"
},
// create a new shop item //
container: {
    flexDirection: "row",
    right: 5,
},
titleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
},
titleicon: {
    marginVertical: 5,
    tintColor: "#047FB8"
},
touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
    bottom: 10,
    backgroundColor: "#047FB8"
},
floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
},
});