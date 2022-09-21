import { StyleSheet } from "react-native";

export default StyleSheet.create({
container: {
  flexDirection: "row", 
  justifyContent: "center", 
  alignSelf: "center",
  width: "90%",
},
  Regdropdown: {
    flex: 1,
    fontFamily: "PTS55F",
    alignSelf: "flex-end",
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