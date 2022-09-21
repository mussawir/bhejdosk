import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    
//flatlist Css Start
Container: { 
    flex: 1,
    backgroundColor: "#FFF"
},

// Order-List Css Start
btnTouch: {
    justifyContent: "center",
    width: "95%", 
    height: "80%",
},
shop: {
    flex: 1,
},
ProductcattitleCon2: {
    flex: 1,
    marginVertical: 10
},
textP: {
    flex: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    alignContent: "center",
},
textP3: {
    flex: 1, 
    marginLeft: "35%",
    position: "absolute",
    marginVertical: 7
},
item: {
    flex: 1.5,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center',
    alignContent: "center",
},
pDetailmainSubCon2: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    width: "100%",
    height: "90%",
},
borderimg: {
    backgroundColor: "#ffffff",  
    borderWidth: 1.5, 
    borderColor: "#F2F2F2", 
    borderRadius: 5,  
    alignSelf: "center", 
    alignItems: "center", 
    justifyContent: "center",
    left: 5
},
shoptxt: {
    fontFamily: 'Raleway-Black',
    fontSize: 14,
    color: "#047FB8",
    alignSelf: "center",
    fontWeight: "400",
    marginHorizontal: 10
},
shoptxt1: {
    fontFamily: 'Raleway-Black',
    fontSize: 24,
    color: "#047FB8",
    alignSelf: "center",
    fontWeight: "700",
    marginHorizontal: 10
},
shoptxt2: {
    fontFamily: 'PTS55F',
    fontSize: 12,
    color: "#047FB8",
    fontWeight: "400",
    alignSelf: "center",
    marginHorizontal: 10,
    top: 5
},
shoptxt3: {
    flexDirection: "row",
    fontFamily: 'PTS55F',
    fontSize: 12,
    color: "#000000",
    fontWeight: "400",
},
rect: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    top: 3,
    right: 10,
},
rect1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    right: 10
},
rectxt: {
    tintColor: "#FFF",
    alignSelf: "center",
},
rectxt1: {
    tintColor: "#FFF",
    alignSelf: "center",
},

// Order-details-List Css Start
Maincontainer: {
    flex: 1,
    backgroundColor: "#FFF"
},
mainviewadd1: {
    justifyContent: "space-around",
    borderColor: "#F8F8F8",
    width: "100%",
    padding: 10,
    backgroundColor: "#F5FFF4",
},
total1:{
    flexDirection: "row",
    justifyContent: "center",
},
totaltxt: {
    textAlign: "center", 
    fontSize: 15, 
    color: "#CFD7DE", 
    fontFamily: "PTS55F", 
    fontWeight: "400",
},
totalprice1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline"
},
totaltxt1: {
    textAlign: "center", 
    fontSize: 20, 
    color: "#1765AD", 
    fontFamily: "PTS55F", 
    fontWeight: "700",
},
totaltxt2: {
    textAlign: "center", 
    fontSize: 20, 
    color: "#079076", 
    fontFamily: "PTS55F", 
    fontWeight: "700",
},
address: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    height: "10%"
},
addresstxt: {
    textAlign: "center", 
    fontSize: 12, 
    color: "#A1AFBB", 
    fontFamily: "PTC75F", 
    fontWeight: "700"
},
heading: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
},
headingtxt: {
    textAlign: "center", 
    fontSize: 16, 
    color: "#1765AD", 
    fontFamily: "PTC75F", 
    fontWeight: "700",
},
Productdetailcontainer: {
    flexDirection: "column",
    backgroundColor: "#F6F6F6",
    height: 85,
    width: "100%",
    alignSelf: "center",
},
pDetailmainSubCon1: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    width: "100%",
    height: "90%",
},
borderimg1: {
    backgroundColor: "#ffffff",  
    borderWidth: 1.5, 
    borderColor: "#F2F2F2", 
    borderRadius: 5,  
    alignSelf: "center", 
    alignItems: "center", 
    justifyContent: "center",
    left: 5
},
ProductsubCon2: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    padding: 12
},
prodtxt: {
    fontFamily: 'PTS55F',
    fontSize: 18,
    color: "#1765AD",
    fontWeight: "700",
    alignSelf: "center",
    alignItems: "baseline",
    justifyContent: "center"
},
quantity: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    left: 5
},
textP2: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
},
textP1: {
    flexDirection: "row",
    alignSelf: "center",
    right: 5
},
btn: {
    flexDirection: "row",
    backgroundColor: "#1765AD",
    width: "85%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
},
btn_touch: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "baseline",
    flex: 0.2
},
checkbox: {
    flex: 0.2,
    justifyContent: "center",
},

shopSubContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:"center",
},
shopImageContainer: {
    height: "70%",
    width: "80%",
    backgroundColor: "#ffffff",  
    // backgroundColor: "red",
    borderWidth: 1.5,
    borderColor: "#F2F2F2",
    borderRadius: 5,  
    alignItems: "center",
    justifyContent: "center",
},
ImageMainContainer:{
    flex:2,
    // backgroundColor:"yellow",
    justifyContent:"center",
    alignItems:"center"
},
shopImage:{
    height: "80%",
    width: "95%"
},
shopDetailsContainer: {
    flex:8,
    alignContent:"space-around"
},
shopDetails: {
    flex:5,
    // backgroundColor:"red",
    // display:"flex",
    // alignItems:"stretch"
    justifyContent:"center"
    // flexDirection: "column",
    // left:0
},
ShopAddressView:{
    flex:6,
    // backgroundColor:"green",
    justifyContent:"space-around"

},
ShopTypeView:{
    flex:6,
    // backgroundColor:"orange",
    justifyContent:"center"

},
ShopTypeContainer:{
    flex:3,
    flexDirection:"row"
},
shopName: {
    fontFamily: 'PTS55F',
    fontSize: 18,
    color: "#1765AD",
    fontWeight: "700",
    // left:6
    // width: 290
},
shopAddress: {
    fontFamily: 'PTS55F',
    fontSize: 12,
    color: "#9d9d9d",
    fontWeight: "400",
    // left:6
},
shopSalesType: {
    fontFamily: 'PTS55F',
    fontSize: 12,
    color: "#079076",
    fontWeight: "400",
    // left:6
},
ProdAddBtnContanier: {
    justifyContent: 'center', 
    backgroundColor: '#047FB8', 
    width: 35, 
    height: 46,
    borderRadius: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 1, height: 1 }, 
    shadowOpacity:  0.4, 
    elevation: 3,
},
ProdAddBtn: {
    alignSelf: 'center',  
    alignItems: "center",
},
ProdAddBtnImage:{
    tintColor: "#FFFFFF"
},
ProdAddRemovBtnContanier1: {
    flex:1,backgroundColor:"red",padding:10,justifyContent:"center"
},
btn_touch1: {
    justifyContent: "center",
    alignSelf: "flex-end",
    backgroundColor: "#E2E2E2",
    height: 28,
    width: 40,
    borderRadius: 5
},
btn_touch2: {
    justifyContent: "center",
    alignSelf: "flex-end",
    backgroundColor: "#047FB8",
    height: 40,
    width: 40,
    borderRadius: 5
},
});