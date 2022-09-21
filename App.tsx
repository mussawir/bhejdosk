// React Native Tab
// https://aboutreact.com/react-native-tab/
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, Header} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { View, Image, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';
import Splashscreen from "./screens/Splashscreen";
import ShopRegistration from "./screens/ShopRegistration";
import Shopregistrationmessage from "./screens/Shopregistrationmessage";
import Shopregistrationapprovemessage from "./screens/Shopregistrationapprovemessage";
import ShopOwnerLogin from "./screens/ShopOwnerLogin";
import Modal from "./component/Modal";
import Orders from "./screens/Orders";
import OrderHistory from './screens/OrderHistory';
import City from "./screens/City";
import ReadyOrders from './screens/ReadyOrders';
import Header1 from './component/Header1';
import Headr from "./component/Headr";
import CategoryList from './component/CategoryList';
import ItemsList from './component/ItemsList';
import FinishOrder from './component/FinishOrder';
import ReturnsOrder from './screens/ReturnsOrder';
import CancelOrder from './screens/CancelOrder';
import Orderdetails from './screens/Orderdetails';
import AddItem from './component/AddItem';
import EditItem from "./component/EditItem";
import Pickerarea from './component/Pickerarea';
import Pickersubarea from './component/Pickersubarea';
import AddGroup from './component/AddGroup';
import EditGroup from './component/EditGroup';
import Grouplist from './component/GroupList';
import GroupDetails from './component/GroupDetails';
import AddProductToGroup from './component/AddItemsToGroup';
import AddItemsToGroup from './component/AddItemsToGroup';
import UpdateGroup from './component/UpdateGroup';
import DeleteGroup from './component/DeleteGroup';
import CloneItem from './component/CloneItem';
import LocationIndicator from "./screens/LocationIndicator";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#079076',
        tabBarInactiveTintColor: '#1765AD',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontFamily: "PTC55F",
          fontWeight: "bold",
          fontSize: 16,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#079076',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
          tabBarLabel: 'ODRS',
        }}  />
         <Tab.Screen
          name="ReadyOrders"
          component={ReadyOrders}
          options={{
          tabBarLabel: 'RDY ORD',
        }} />
        <Tab.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{
          tabBarLabel: 'HSTRY',
        }} />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          // paddingHorizontal: 8,
        }}>

        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Pickerarea"
          component={Pickerarea}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Pickersubarea"
          component={Pickersubarea}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ShopRegistration"
          component={ShopRegistration}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Shopregistrationmessage"
          component={Shopregistrationmessage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Shopregistrationapprovemessage"
          component={Shopregistrationapprovemessage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ShopOwnerLogin"
          component={ShopOwnerLogin}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Orderdetails"
          component={Orderdetails}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"ORDER DETAILS"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

        <Stack.Screen
          name="CategoryList"
          component={CategoryList}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"CATEGORY LIST"}} />,
            headerLeft: () => null,
            headerTintColor: '#1765AD',
          })}  
        />

        <Stack.Screen
          name="ItemsList"
          component={ItemsList}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"PRODUCT LIST"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"ADD ITEM"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

        <Stack.Screen
          name="EditItem"
          component={EditItem}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"EDIT ITEM"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

      <Stack.Screen
          name="GroupDetail"
          component={GroupDetails}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"GROUP DETAILS"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

    <Stack.Screen
          name="AddItemsToGroup"
          component={AddItemsToGroup}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"ADD GROUP ITEMS"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

    <Stack.Screen
          name="AddGroup"
          component={AddGroup}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"ADD GROUP"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

     <Stack.Screen
          name="GroupList"
          component={Grouplist}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"GROUPS LIST"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

       <Stack.Screen
          name="UpdateGroup"
          component={UpdateGroup}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"UPDATE GROUP"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

        <Stack.Screen
          name="DeleteGroup"
          component={DeleteGroup}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"DELETE GROUP"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

      <Stack.Screen
          name="CloneItem"
          component={CloneItem}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Headr props={{navigation,name:"CLONE AN ITEM"}} />,
            headerTintColor: '#1765AD',
          })}  
        />

        <Stack.Screen
          name="ReturnsOrder"
          component={ReturnsOrder}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Header1 navigation={navigation} />,
            headerTintColor: '#1765AD',
        })}
        />

        <Stack.Screen
          name="CancelOrder"
          component={CancelOrder}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Header1 navigation={navigation} />,
            headerLeft: () => null,
        })}
        />

        
        <Stack.Screen
          name="LocationIndicator"
          component={LocationIndicator}
          options={{headerShown: false}}
        />

        
        <Stack.Screen
          name="City"
          component={City}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={TabStack}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Header1 navigation={navigation} />,
            headerLeft: () => null,
        })}
        />
{/* 
        <Stack.Screen
          name="Orders"
          component={App1}
        /> */}

        <Stack.Screen
          name="FinishOrder"
          component={FinishOrder}
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: '#fff'},
            headerTitle: () => <Header1 navigation={navigation} />,
            headerLeft: () => null,
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;