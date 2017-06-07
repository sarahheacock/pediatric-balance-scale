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
      return {
        ...state,
        blog: action.results
      }
    }

    default:
      return state;
  }
}
