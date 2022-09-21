import {StyleSheet} from "react-native";

export default StyleSheet.create({
maincontainer: {
    flex: 1, 
    backgroundColor: "#fff"
},
content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
},
text: {
    color: "#047FB8", 
    fontSize: 15, 
    fontWeight: "400", 
    fontFamily: "PTC55F"
},
text1: {
    color: "#047FB8", 
    fontSize: 15, 
    fontWeight: "700", 
    fontFamily: "PTC75F"
},
mainview: {
    flex: 3, 
    flexDirection: "row", 
    justifyContent: "center",
    alignSelf: "center", 
    alignItems: "center",
},
maintext: {
    color: "#047FB8", 
    fontWeight: "700", 
    fontSize: 18, 
    fontFamily: "PTC55F",
    textAlign: "center"
}
})