import {StyleSheet} from "react-native";

export default StyleSheet.create({
Mainheader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
},
heading: {
    flex: 1.7,
    flexDirection: "row",
},
headtxt: {
    fontSize: 17, 
    fontWeight: "400", 
    color: "#047FB8",
    // color: "#FFA500",
    fontFamily: "Raleway-Black"
},
headtxt1: {
    fontSize: 17, 
    fontWeight: "700", 
    color: "#02A0C7", 
    fontFamily: "PTC55F"
},
logo: {
    flex: 5,
    flexDirection: "row", 
    alignItems: "center",
    alignSelf: "center", 
    justifyContent: "center",
},
searchicon: {
    flex: 1, 
    flexDirection: "row", 
    alignSelf: "center", 
    justifyContent: "center",
    alignItems: "center"
},
textinput: {
    flexDirection:"row",
    padding: 8,
    alignSelf:"center",
    width:"75%"
},
input: {
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "PTC55F",
    borderWidth:1,
    borderColor:"#079076",
    borderRadius:50,
    width: "100%",
    color: "#1765AD",
    textAlign: "center",
    backgroundColor:"#FBFBFB"
},
crossTouch: {
    justifyContent:"center",
    right: 30
},
color: {
    tintColor: "#1765AD"
},
modal: {
    flexDirection: "row", 
    alignItems: "center", 
    alignSelf: "center",
    justifyContent: "center",
    right: 5
}
});