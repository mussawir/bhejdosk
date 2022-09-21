import {
  GET_STORES,
  ADD_TO_BOOKMARK_LIST,
  REMOVE_FROM_BOOKMARK_LIST,
  QrScanner,
  QrScannerF,
  OrderStatusC,
  ADD_ORDERS_DETAIL,
  SELECTED_ORDERS,
  EMPTY_ITEM
} from '../action/actions';

const initialState = {
  store: [],
  bookmarks: [],
  qrScannerTNF: false,
  OrderSC: 0,
  OrderID: null,
  orders: [],
  selectedOrders: [],
};

function storeReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_ORDERS_DETAIL:
      // console.log('In Redux....................',action.payload);
      return {
        ...state,
        orders: action.payload
      };
    case SELECTED_ORDERS:
      // find index from flatlist and add Selected Tag.
      const pdArrCopy = [...state.orders];
      const Findindex = pdArrCopy.findIndex(Findindex => Findindex.id == action.id);
      pdArrCopy[Findindex].isSelected = !pdArrCopy[Findindex].isSelected;
      // get data of selected item and push in obj.
      const selected = pdArrCopy[Findindex];
      const customerId = selected.customer_id;
      const id = selected.id;
      const isSelected = selected.isSelected;
      const Item_id = selected.item_id;
      const orderMasterId = selected.order_master_id;
      const qty = selected.qty;
      const prodShop_id = selected.shop_id;
      const total_price = selected.total_price;
      let updatedOrAddNewSelectedOrder;
      if (pdArrCopy[Findindex].isSelected == true) {
        // push to obj selected item
        updatedOrAddNewSelectedOrder = {
          customer_id: customerId,
          id: id,
          isSelected: isSelected,
          item_id: Item_id,
          order_master_id: orderMasterId,
          qty: qty,
          shop_id: prodShop_id,
          total_price: total_price
        }
      }
      // check if selected item exist in state .
      if (state.selectedOrders[id]) {
        const removeUnSelectedItems = { ...state.selectedOrders };
        delete removeUnSelectedItems[id];
        return {
          ...state,
          orders: pdArrCopy,
          selectedOrders: removeUnSelectedItems
        };
      }
      return {
        ...state,
        orders: pdArrCopy,
        selectedOrders: { ...state.selectedOrders, [id]: updatedOrAddNewSelectedOrder }

      };
      case EMPTY_ITEM:
        return {
          ...state,
          orders: state.orders = null
        };
    default:
      return state;
  }
}

export default storeReducer;

