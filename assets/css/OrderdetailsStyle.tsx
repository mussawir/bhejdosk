import { StyleSheet} from "react-native";

export default StyleSheet.create({
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
    // justifyContent: "",
    alignSelf: "center",
    alignItems: "center",
    height: "12%"
},
addresstxt: {
    textAlign: "center", 
    fontSize: 14, 
    color: "#047FB8", 
    fontFamily: "PTC75F", 
    fontWeight: "300"
},
addresstxt2: {
    textAlign: "center", 
    fontSize: 16, 
    color: "#047FB8", 
    fontFamily: "PTC75F", 
    fontWeight: "700"
},
addresstxt1: {
    textAlign: "center", 
    fontSize: 12, 
    color: "#000000", 
    fontFamily: "PTC75F", 
    fontWeight: "700"
},
address1: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline"
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
    height: 95,
    alignSelf: "center",
},
pDetailmainSubCon1: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    width: "100%",
    height: "90%",
},
borderimg1: {
    flex: 0.3,
    height: 70, 
    width: 70, 
    alignSelf: "center", 
    alignItems: "center", 
    justifyContent: "center",
    top: 5
},
ProductsubCon2: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10
},
prodtxt: {
    fontFamily: 'PTS55F',
    fontSize: 18,
    color: "#047FB8",
    fontWeight: "700",
},
prodtxt1: {
    fontFamily: 'PTS55F',
    fontSize: 18,
    color: "#047FB8",
    fontWeight: "700",
    marginVertical: 5
},
quantity: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "baseline",
},
textP: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
},
textP1: {
    flex: 0.2,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "baseline"
},
textP2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    alignContent: "center",
},
btn: {
    flexDirection: "row",
    backgroundColor: "#1765AD",
    width: "60%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    bottom: 5
},
btn_touch: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "baseline",
},
checkbox: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "baseline",
    top: 2,
},
ProdImage:{
    width: "85%", 
    height: "85%"
},
list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#192338',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
},
shoptxt1: {
    fontFamily: 'Raleway-Black',
    fontSize: 14,
    color: "#505050",
    alignSelf: "center",
    fontWeight: "400",
},
selected: {backgroundColor: '#FA7B5F'},
Mainbtn: {
    flex: 0.1,
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    right: 5
},
backview: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#F06A6A",
    borderRadius: 5,
    width: 50,
    height: 35,
    right: 12
},
backview1: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center", 
    backgroundColor: "#65A334", 
    width: 50, 
    height: 35, 
    borderRadius: 5,
    right: 6,
},
backview2: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "flex-end", 
    backgroundColor: "#E80000",
    width: 50, 
    height: 35, 
    borderRadius: 5,
},
button: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
},
btntext: {
    fontSize: 14, 
    color: "#FFF", 
    fontFamily: "PTS55F", 
    fontWeight: "700",
},
});