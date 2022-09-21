import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor:"#202124"
  },
  logo: {
    // bottom: 10,
    flexDirection:'row',
    // backgroundColor:"orange",
    flex: 1.4,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  titletxt: {
    // backgroundColor:"red",
    flexDirection:"row",
    justifyContent: "center",
  },
  textP: {
    color: "#047FB8",
    fontSize: 64,
    fontWeight: "300", 
    fontFamily: "Raleway-Light",
  },
  textC: {
    color: "#02A0C7",
    fontSize: 64,
    fontWeight: "700", 
    fontFamily: "Raleway-Black",
  },
  titletxt1: {
    // backgroundColor:"yellow",
    flexDirection:"row",
    justifyContent:"center",
  },
  textP1: {
    color: "#1765AD", 
    fontSize: 30, 
    fontWeight: "300", 
    fontFamily: "PTS56F"
  },
  textC1: {
    color: "#65A334", 
    fontSize: 30, 
    fontWeight: "700",
    fontFamily: "PTC55F"
  },
  titletxt2:{
    flex:1,
    justifyContent: "center",
    alignItems:"center",
    paddingBottom:5,
    top: "8.5%"
  },
  titletext1:{
    color: "#047FB8",
    fontSize: 43,
    fontWeight: "700", 
    fontFamily: "PTC55F",
  },
  titletext2:{
    color: "#02A0C7",
    fontSize: 43,
    fontWeight: "700", 
    fontFamily: "PTC55F",
  },
  titletxt3: {
    flex:0.3,
    // backgroundColor:"green",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-start",
    bottom:10
  },
  textP2: {
    color: "#65A334", 
    fontSize: 30, 
    fontWeight: "400", 
    fontFamily: "Raleway-Black",
  },
  home: {
    flexDirection: "row",
  }
});