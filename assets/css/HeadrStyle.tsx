import { StyleSheet } from "react-native";

export default StyleSheet.create({
Maincontainer: {
    flex: 1, 
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
},
maintitle: {
    flex: 1.5, 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center",
},
titletxt: {
    fontSize: 16, 
    fontWeight: "700", 
    color: "#1765AD", 
    fontFamily: "Raleway-Black"
},
mainlogo: {
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    alignItems: "center", 
    alignSelf: "center", 
},
mainsearch: {
    flex: 0.5, 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    alignSelf: "center",
    left: 5
},
showinput: {
    flex: 6, 
    flexDirection: "row", 
    padding: 8, 
    alignSelf: "center", 
},
iconcolor: {
    tintColor: "#1765AD"
},
mainmodal: {
    flex: 0.1, 
    flexDirection: "row", 
    alignItems: "center", 
    alignSelf: "center"
},
input: {
    flex: 1.5,
    flexDirection: "row",
    alignSelf: "center",
    fontSize: 14,
    fontFamily: "PTC55F",
    width: "100%",
    borderWidth: 1,
    borderColor: "#079076",
    borderRadius: 50,
    color: "#1765AD",
    textAlign: "left",
    backgroundColor: "#FBFBFB"
},
btn_touch: {
    justifyContent: "center",
    right: 25
}   
})