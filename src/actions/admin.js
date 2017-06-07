import * as AdminActionTypes from '../actiontypes/admin';
import axios from 'axios';



export const makeModal = () => {
  return {
    type: AdminActionTypes.MAKE_MODAL,
  }
}

//===============================================================
export const fetchBlogSuccess = (results) => {
  return {
    type: AdminActionTypes.FETCH_BLOG_SUCCESS,
    results
  };
};

export const fetchBlog = (data) => {
  return (dispatch) => {
    return dispatch(fetchBlogSuccess(data))
  }
};
