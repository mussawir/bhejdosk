import React, { useEffect, useState} from 'react';
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../assets/css/Style";
import axios from 'react-native-axios';
import { AddOrdersDetail, SELECTED_ORDERS } from '../redux/action/actions';

export default function Orderdetails({ route }) {
  let colors = ['#FBFBFB', '#FFFFFF'];
  const dispatch = useDispatch();
  const rdxOrdersDetail = useSelector(state => state.storesReducer);
  const FillFlatList = rdxOrdersDetail.orders;
  const rdxSelectedOrders = rdxOrdersDetail.selectedOrders;
  console.log('rdxSelectedOrdersrdxSelectedOrdersrdxSelectedOrdersrdxSelectedOrders',rdxSelectedOrders);
  const OrderMasterID = route.params.OrderDeatilId;
  const [OrdersDetail, setOrdersDetail] = useState(null);
  const addToReduxORSD = Data => dispatch(AddOrdersDetail(Data));

  useEffect(() => {
    axios.get(`https://bhejdo.net   /api/v1/shopkeeper/orders/details/${OrderMasterID}`).then(async (res) => {
      const response = await res.data.data;
      if (res.data.data == null) {
        setOrdersDetail(null);
      }
      else {
        const Data = res?.data?.data?.map(pd => ({ ...pd, isSelected: false }));
        addToReduxORSD(Data);
        setOrdersDetail(response);
      }
    });
  }, []);

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#FFF" }}>
      <View style={styles.addres}>
        <Text style={{ textAlign: "center", fontSize: 12, color: "#A1AFBB", fontFamily: "PTC75F", fontWeight: "700" }}>ALI AHMED H# F242 STREET 18 BLOCK B 0132123456</Text>
      </View>
      <View style={styles.addres1}>
        <Text style={{ textAlign: "center", fontSize: 16, color: "#1765AD", fontFamily: "PTC75F", fontWeight: "700", right: 10 }}>Item</Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "#1765AD", fontFamily: "PTC75F", fontWeight: "400", left: 40 }}>Qty</Text>
      </View>
      <View style={{ height: "77%" }}>
        <FlatList
          data={FillFlatList}
          numColumns={1}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              <View style={styles.Productdetailcontainer}>
                <View style={styles.pDetailmainSubCon1}>
                  <Image
                    style={styles.productdetailImg1}
                    source={require('../assets/Orderdetails/box.png')}
                  />
                  <View style={{ paddingVertical: 15, backgroundColor: colors[index % colors.length], width: "100%" }}>
                    <View style={styles.ProductsubCon2}>
                      <Text style={{ fontSize: 18, color: "#1765AD", fontFamily: "PTS55F", fontWeight: "700" }}>{item.title}</Text>
                    </View>

                    <View style={styles.time1}>
                      <Text style={{ fontSize: 20, color: "#1765AD", fontFamily: "PTS55F", fontWeight: "700" }}>{item.quantity}</Text>
                    </View>
                    {item?.isSelected ? 
                    <TouchableOpacity style={{ backgroundColor: "white", paddingVertical: "7%", paddingHorizontal: "5%", width: 100, height: 40, borderRadius: 20, borderStyle: "solid", borderColor: "#ec4137", borderWidth: 1, }} onPress={() => { dispatch({ type: SELECTED_ORDERS, index, id: item.id })}}>
                      <Text style={{ color: "#ec4137", alignItems: "center", fontWeight: "bold", textAlign: "center", top: 3,}}>Remove</Text>
                    </TouchableOpacity>
                    : 
                    <TouchableOpacity style={{ backgroundColor: "#ec4137", paddingVertical: "8%", paddingHorizontal: "10%", width: 100, height: 40, borderRadius: 20, borderStyle: "solid", borderColor: "red", borderWidth: 1, }} onPress={() => { dispatch({ type: SELECTED_ORDERS, index, id: item.id }) }}>
                      <Text style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center", top: 3}}>Add</Text>
                    </TouchableOpacity>
                    }
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>

  );
}