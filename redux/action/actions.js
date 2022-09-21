import axios from 'react-native-axios';
export const GET_STORES = 'GET_STORES';
export const GET_CITY = 'GET_CITY';
export const GET_AREA = 'GET_AREA';
export const GET_SUBAREA = 'GET_SUBAREA';
export const SET_GEO_LOCATION = 'SET_GEO_LOCATION';
export const SET_MAUNALLY_AREA = 'SET_MAUNALLY_AREA';
export const SET_MAUNALLY_SUBAREA = 'SET_MAUNALLY_SUBAREA';
export const ADD_TO_CART = 'ADD_TO_CART';
export const EMPTY_ITEM = 'EMPTY_ITEM';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_ORDERS_DETAIL = 'REMOVE_FROM_CART';
export const USER_IS_lOGGED = 'USER_IS_lOGGED';
export const IS_USER_lOGIN = 'IS_USER_lOGIN';
export const SET_LOADER_TYPE = 'SET_LOADER_TYPE';
export const SET_MAUNALLY_SINGLEAREA = 'SET_MAUNALLY_SINGLEAREA';
export const SET_MAUNALLY_SINGLECITY = 'SET_MAUNALLY_SINGLECITY';
export const USER_IS_SET_ORDER = 'USER_IS_SET_ORDER';
export const SET_SEARCH_BAR = 'SET_SEARCH_BAR';
export const USER_IS_lOGOUT = 'USER_IS_lOGOUT';

// Define action creators

export const getStores = () => {
  try {
    return async dispatch => {
      const response = await axios.get('https://bhejdo.net/api/v1/shopkeeper/orders/list');
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_STORES,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getCity = () => {
  try {
    return async dispatch => {
      const response = await axios.get('https://bhejdo.net/api/v1/city/list');
      if (response.data) {
        dispatch({
          type: GET_CITY,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getArea = () => {
  try {
    return async dispatch => {
      const response = await axios.get('https://bhejdo.net/api/v1/area/list');
      if (response.data) {
        dispatch({
          type: GET_AREA,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getSubarea = () => {
  try {
    return async dispatch => {
      const response = await axios.get('https://bhejdo.net/api/v1/subarea/list');
      if (response.data) {
        dispatch({
          type: GET_SUBAREA,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const setGeoLocation = geolocation => dispatch => {
  dispatch({
    type: SET_GEO_LOCATION,
    payload: geolocation
  });
};

export const setSearchBar = (value) => {
  return{
    type: SET_SEARCH_BAR,
      payload: value
  }
};


export const setManuallyArea = area => dispatch => {
  dispatch({
    type: SET_MAUNALLY_AREA,
    payload: area
  });
};

export const setManuallySubArea = subarea => dispatch => {
  dispatch({
    type: SET_MAUNALLY_SUBAREA,
    payload: subarea
  });
};

export const setManuallySingleArea = area => dispatch => {
  dispatch({
    type: SET_MAUNALLY_SINGLEAREA,
    payload: area
  });
};

export const SetUserLoggin = user => dispatch => {
  console.log("SetIsOrderSetIsOrderSetIsOrderSetIsOrderSetIsOrder",user);
  dispatch({
    type: USER_IS_lOGGED,
    payload: user
  });
};

export const emptyuser = () => {
  dispatch({
    type: USER_IS_lOGOUT,
  });
};

export const SetIsOrder = status => dispatch => {
  dispatch({
    type: USER_IS_SET_ORDER,
    payload: status
  });
};

export const AddOrdersDetail = Data => dispatch => {
  dispatch({
    type: ADD_ORDERS_DETAIL,
    payload: Data
});
};

export const SetLoader = type => dispatch => {
  dispatch({
    type: SET_LOADER_TYPE,
    payload: type
  });
};

export const setManuallySingleCity = getCity => dispatch => {
  dispatch({
    type: SET_MAUNALLY_SINGLECITY,
    payload: getCity
  })
};

export const emptyitem = () => {
  dispatch({
    type: EMPTY_ITEM,
  });
};