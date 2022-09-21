import {StyleSheet} from "react-native";

export default StyleSheet.create({
MainContainer: {
    flex: 1,
    backgroundColor: "#FFF"
},
Mainproduct: {
    flex: 0.3,
    width: "100%",
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "center", 
    backgroundColor: "#F3F3F3",
},
prodadd: {
    flexDirection: "row",
    width: 90,
    height: 90,
    marginHorizontal: 15
},
prodadd1: {
    width: 50,
    height: 50,
    marginBottom: 50
},
btn: {
    flex: 0.2,
    flexDirection: "column",
    backgroundColor: "#1765AD",
    width: "70%",
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    right: 8
},
btn1: {
    flex: 0.8,
    flexDirection: "column",
    backgroundColor: "#497FB1",
    width: "70%",
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    right: 8,
},
MainInput: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-end",
},
mainunderline: {
    flex: 0.1, 
    flexDirection: "column", 
    justifyContent: "center" 
},
underlineInput:{
    backgroundColor: "#A9C3ED", 
    color: "#A9C3ED", 
    width: "80%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    height: 0.5,
},
iconimg: {
    flex: 2.5,
    flexDirection: "column", 
    alignSelf: "center", 
    alignItems: "center",
    top: 4
},
icon: {
    flexDirection: "column", 
    alignSelf: "center", 
    tintColor: "#497FB1",
},
input1: {
    flexDirection: "row",
    fontWeight: "700",
    fontSize: 16,
    width: "100%",
    fontFamily: "PTC75F",
    margin: 3,
    top: 12
},
input2: {
    flex: 5,
    fontWeight: "700",
    fontSize: 16,
    color: "#1765AD",
    fontFamily: "PTC55F",
    top: 8
},
stock: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline",
    alignSelf: "flex-end",
    right: 10
},
stocktxt: {
    textAlign: "center", 
    fontSize: 14, 
    fontWeight: "700", 
    fontFamily: "PTC55F", 
    color: "#1765AD"
},
Mainbtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
},
btn2: {
    flex: 0.1,
    flexDirection: "row",
    width: "80%",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    top: 10
},
btn_touch: {
    justifyContent: "center",
    backgroundColor:"#1765AD",
    borderRadius: 30,
    width:"90%",
    height:50,
},
btn_touch1: {
    justifyContent: "center",
    width:"90%",
    height:90,
},
prodimg: {
    width: "150%",
    height: "150%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
},
prodimg1: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
}
});