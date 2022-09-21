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
    fontSize: 18, 
    color: "#079076", 
    fontFamily: "PTS55F", 
    fontWeight: "700",
},
Productdetailcontainer: {
    flex: 1,
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
borderimg: {
    flex: 0.2,
    height: 60, 
    width: 60, 
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
    fontSize: 17,
    color: "#1765AD",
    fontWeight: "700",
    alignSelf: "center",
    alignItems: "baseline",
    justifyContent: "center",
},
quantity: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
},
textP: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
},
btn: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#1765AD",
    width: "85%",
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
ProdImage:{
    width: "100%", 
    height: "100%"
},
});