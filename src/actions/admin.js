import * as AdminActionTypes from '../actiontypes/admin';
import axios from 'axios';

const url = "https://peaceful-shelf-12195.herokuapp.com/content";


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

    return axios.get(`${url}/59399feaefe6720749151ab0/${data}`)
      .then(response => {
        console.log("response data", response.data);
        dispatch(fetchBlogSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
};
