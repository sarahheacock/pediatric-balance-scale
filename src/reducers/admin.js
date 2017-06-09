import * as AdminActionTypes from '../actiontypes/admin';


//==============================================================
//state={} is overwritten by initialState provided in index.js
export default function Admin(state={}, action){
  switch (action.type) {
    case AdminActionTypes.MAKE_MODAL: {
      return {
        ...state,
        modalVisible: !(state.modalVisible)
      }
    }

    case AdminActionTypes.FETCH_BLOG_SUCCESS: {
      const Data = {
        current: action.results
      }
      return {
        ...state,
        data: Data
      }
    }

    case AdminActionTypes.VERIFY_EMAIL_SUCCESS: {
      return {
        ...state,
        admin: action.results,
        errorMessage: {}
      }
    }

    case AdminActionTypes.VERIFY_EMAIL_FAIL: {
      return {
        ...state,
        errorMessage: action.results
      }
    }

    default:
      return state;
  }
}
