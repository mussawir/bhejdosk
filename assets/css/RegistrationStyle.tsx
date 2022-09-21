import { StyleSheet } from "react-native";

export default StyleSheet.create({
container: {
   flex: 1,
   backgroundColor:"#FFF",
   justifyContent: "center"
},
heading: {
   flex: 1,
   flexDirection: "column",
   justifyContent: "flex-end",
   top: 10,
},
mainhead: {
   flex: 0.2, 
   flexDirection: "column",
   justifyContent: "center"
},
heading_txt: {
   color: "#047FB8", 
   fontSize: 30, 
   fontWeight: "800", 
   fontFamily: "PTC75F",
   textAlign: "center"
},
heading_txt1:{
   color: "#047FB8",
   fontSize: 14, 
   fontWeight: "800", 
   fontFamily: "PTN77F",
   textAlign: "center",
},
heading_txt2:{
   color: "#3A5AB1", 
   fontSize: 14, 
   fontWeight: "300", 
   fontFamily: "PTC75F",
   textAlign: "center",
},
area: {
   flex: 1,
   justifyContent: "center",
   alignSelf: "center",
   top: 20,
},
mainarea: {
   flex: 1,
   justifyContent: "center",
   top: 10
},
inputfieldsview:{
   flex: 0,
   justifyContent: "center",
   padding: 20
},
inputfieldscontainer:{
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'flex-end',
   alignItems: 'flex-end',
   top: 7
},
data: {
   flex: 0,
   flexDirection: "column",
   // backgroundColor: "#FFF385",
   justifyContent:"center",
   alignItems: "center",
 },
ConfirmText :{
   flex: 1,
   color: "#047FB8",
   fontSize: 18,
   fontWeight: "700",
   fontFamily: "Nunito Sans",
   textAlign: "center",
 },
ConfirmText1 :{
   color: "#047FB8",
   fontSize: 18,
   fontWeight: "700",
   fontFamily: "Nunito Sans",
   textAlign: "center",
 },
 underlineInput1:{
   backgroundColor: "#A9C3ED", 
   color: "#A9C3ED", 
   width: "90%", 
   height: 0.5,
},
inputTxt:{
   flex: 1,
   fontSize: 18,
   fontFamily: "PTC75F",
   fontWeight: "700",
   color: "#047FB8",
   top: "4.5%",
   textAlign: "center",
   marginRight: 20
},
Mainphone: {
   flex: 1,
   justifyContent:"center",
   top: 15
},
phonetxt: {
   backgroundColor: "#F5FFF4",
   flexDirection: "row",
   justifyContent: "space-around",
   alignItems: "baseline",
   padding: 10,
},
phonetxtImage:{
   tintColor: '#047FB8',
   justifyContent: "flex-start",
},
phonetxt0:{
   flex: 0.7,
   color: "#359E51", 
   fontSize: 15, 
   fontFamily: "PTC55F", 
   alignSelf: "center",
},
btn: {
   padding:10,
   justifyContent:"center",
   alignItems: "center",
},

btn_touch: {
   justifyContent: "center",
   backgroundColor:"#1765AD",
   borderRadius: 30,
   width:"90%",
   height:50,
},
phonetxt1: {
   flex:1,
   flexDirection: "row",
   justifyContent:"center",
   alignItems:"flex-start",
},
icon:{
   tintColor: '#047FB8', 
   padding: 10,
   margin: 5,
   height: 25,
   width: 25,
   resizeMode : 'stretch',
   alignItems: 'center',
   top: 3
},
underlineInput:{
   backgroundColor: "#A9C3ED", 
   color: "#A9C3ED", 
   width: "100%", 
   height: 0.5,
   top: 7
},
underlineInput2:{
   backgroundColor: "#A9C3ED", 
   color: "#A9C3ED", 
   width: "90%", 
   height: 0.5,
   top: 7,
   alignSelf: "center"
},
bottomContainer:{
   flex:1,
   justifyContent:"center"
},
checkboxContainer:{
   flex: 1,
   justifyContent:"center",
   top: 10
},
checkboxTxt1:{
   color: "#A6A6A6", 
   fontSize: 10, 
   fontFamily: "PTC55F",
   textAlign: "center"
},
mainphone1: {
   flex: 1, 
   justifyContent: "center" 
},
phonetxt2: {
   flexDirection: "row",
   justifyContent: "space-evenly",
   alignItems: "center",
   alignSelf: "center",
   borderRadius: 30,
   borderColor: "#02A0C7",
   borderWidth: 1,
   width: 140,
   height: 40
 },
 phonetxtImage1:{
   tintColor: '#047FB8', 
   justifyContent:"flex-start",
 },
 content2_text1: {
   color: "#047FB8", 
   fontSize: 18, 
   fontFamily: "PTS55F", 
   fontWeight: "700",
 },
 info: {
   flex: 0.2,
   flexDirection: "column", 
   alignSelf: "center",
   justifyContent: "center"
},
infotxt: {
   color: "#FFB2BE", 
   fontFamily: "PTC55F", 
   fontWeight: "700", 
   fontSize: 15, 
   textAlign: "center" 
}
});