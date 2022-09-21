import { StyleSheet } from "react-native";

export default StyleSheet.create({
container: {
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "center", 
  alignSelf: "center",
  width:"80%"
},
content: {
    position: "absolute",
    width: "70%", 
    alignItems: "center", 
    top: "75%", 
    alignSelf: "center",
},
content_text: {
    backgroundColor: "#E6E6E7", 
    color: "#E6E6E7", 
    width: "120%", 
    height: 0.5,
  },
  Regdropdown: {
    flex: 1,
    fontFamily: "PTS55F",
    alignSelf: "flex-end",
    width: "83%",
    height: 50,
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "PTS55F",
  },
  textItem: {
    flex: 1,
    fontSize: 14,
    fontFamily: "PTS55F",
    color: "#047FB8",
    textAlign: "center"
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
});