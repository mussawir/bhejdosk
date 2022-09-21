import {StyleSheet} from "react-native";

export default StyleSheet.create({
footerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: '#fff',
    alignItems: "center",
    height: 55
},
mainicon: {
    flex: 1, 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: 'center',
},
mainicontxt: {
    color: '#B3B4B6', 
    fontWeight: "700", 
    fontSize: 12, 
    fontFamily: "PTC75F", 
    top: 5
},
mainiconimg: {
    alignSelf: "center",
    tintColor: "#B3B4B6",
}
})