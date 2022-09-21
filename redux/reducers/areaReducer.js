import { SET_SEARCH_BAR,SET_MAUNALLY_SINGLECITY, SET_GEO_LOCATION, GET_CITY, SET_MAUNALLY_SUBAREA, GET_AREA, GET_SUBAREA ,SET_MAUNALLY_SINGLEAREA} from '../action/actions';

const initialState = {
  areaFromGeolocation: null,
  cityFromGeoLocation: null,
  selectManuallySingleCity: null,
  selectManuallyArea: null,
  selectManuallySubarea: null,
  selectManuallySingleArea: null,
  area: [],
  subarea: [],
  city:[],
  locationFromGeoLocation: null,
  searchBarStatus: false,
};

function areaReducer(state = initialState, action) {

  switch (action.type) {
    case GET_AREA:
      const area_data = action.payload.data;
      return {
        ...state,
        areas: state.area = area_data
      }
    
    case GET_SUBAREA:
      const subarea_data = action.payload.data;
      return {
        ...state,
        subareas: state.subarea = subarea_data
      };

    case GET_CITY:
      const city_data = action.payload.data;
      return {
        ...state,
        City: state.city = city_data
      };
    // case USER_IS_lOGGED:
    //   const users = action.payload;
    //   console.log("USER_IS_lOGGEDUSER_IS_lOGGEDUSER_IS_lOGGEDUSER_IS_lOGGED",users);
    //   return {
    //     ...state,
    //     isLogged: !state.isLogged,
    //     user: state.user = users
    //   };
    case SET_GEO_LOCATION:
      const location = action.payload;
      return {
        ...state,
        // areaFromGeolocation: location.fetchLati,
        cityFromGeoLocation: location.fetchcity,
        // locationFromGeoLocation: location.fetch.setGeoLocation,
      };
    
    // case SET_MAUNALLY_AREA:
    //   const areaArrCopy = state.area;
    //   const subareaArrCopy = state?.subarea;
    //   const Findindex = (subareaArrCopy || []).length > 0 && subareaArrCopy?.filter((item) => item?.area_id && item?.area_id === action?.payload)
      
    //   return {
    //     ...state,
    //     // selectManuallyArea: areaArrCopy,
    //     subarea: Findindex
    //   };
    case SET_MAUNALLY_SUBAREA:
      const subarea = action.payload;
      const Subarea = { name: subarea.sub_area, id: subarea.sub_area_id };
      return {
        ...state,
        selectManuallySubarea: Subarea,
      };
      case SET_MAUNALLY_SINGLEAREA:
      const getSingleArea = action.payload;
      const singleArea = { name: getSingleArea.area, id: getSingleArea.area_id };
      return {
        ...state,
        selectManuallySingleArea: singleArea,
      };
      case SET_MAUNALLY_SINGLECITY:
        const getSingleCity = action.payload;
        const singleCity = { name: getSingleCity.city, id: getSingleCity.city_id };
        console.log('ReducercityReducercityReducercityReducercityReducercity',singleCity);
        return {
          ...state,
          selectManuallySingleCity: singleCity,
        };

        case SET_SEARCH_BAR:
        const getsearchbarstatus = action.payload;
      return {
        ...state,
        searchBarStatus: state.searchBarStatus = getsearchbarstatus
      };

    default:
      return state;
  }
}

export default areaReducer;