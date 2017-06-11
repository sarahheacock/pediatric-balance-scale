import * as AdminActionTypes from '../actiontypes/admin';
import axios from 'axios';

const url = "https://peaceful-shelf-12195.herokuapp.com/content";
const blogID = "593c0109b4dc481940c61cb2";


export const makeModal = (vis) => {
  return {
    type: AdminActionTypes.MAKE_MODAL,
    vis
  }
}

export const selectEdit = (data) => {
  return {
    type: AdminActionTypes.SELECT_EDIT,
    data
  }
}

export const selectAdd = (data) => {
  return {
    type: AdminActionTypes.SELECT_ADD,
    data
  }
}

export const fail = (results) => {
  return {
    type: AdminActionTypes.FAIL,
    results
  };
};

//===============MESSAGING===============================================
export const sendMessageSuccess = (results) => {
  return {
    type: AdminActionTypes.SEND_MESSAGE_SUCCESS,
    results
  };
};


export const sendMessage = (data) => {
  return (dispatch) => {
    console.log(data);
    return dispatch(sendMessageSuccess(data));
    // return axios.get(`${url}/admin/${data.username}/${data.password}`)
    //   .then(response => {
    //     console.log("response data", response.data);
    //     dispatch(sendMessage(response.data));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     dispatch(fail({"error": "Message unable to send"}));
    //     //throw(error);
    //   });
  }
};


//=====================PAGE LOADING==========================================
export const fetchBlogSuccess = (results) => {
  return {
    type: AdminActionTypes.FETCH_BLOG_SUCCESS,
    results
  };
};

export const fetchBlog = (data) => {
  return (dispatch) => {

    return axios.get(`${url}/${blogID}/${data}`)
      .then(response => {
        console.log("response data", response.data);
        dispatch(fetchBlogSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
};

export const editBlog = (data) => {
  return (dispatch) => {

    return axios.put(`${url}/${blogID}/${data.section}/${data.sectionID}`, {...data.input})
      .then(response => {
        console.log("response data", response.data);
        dispatch(fetchBlogSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
};

export const addBlog = (data) => {
  return (dispatch) => {

    return axios.post(`${url}/${blogID}/${data.section}`, {...data.input})
      .then(response => {
        console.log("response data", response.data);
        dispatch(fetchBlogSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
};

export const deleteBlog = (data) => {
  return (dispatch) => {

    return axios.delete(`${url}/${blogID}/${data.section}/${data.sectionID}`)
      .then(response => {
        console.log("response data", response.data);
        dispatch(fetchBlogSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
};


//=================AUTHENTICATION==================================================
export const logout = () => {
  return {
    type: AdminActionTypes.LOGOUT,
  };
};

export const verifyEmailSuccess = (results) => {
  return {
    type: AdminActionTypes.VERIFY_EMAIL_SUCCESS,
    results
  };
};

// export const verifyEmailFail = (results) => {
//   return {
//     type: AdminActionTypes.VERIFY_EMAIL_FAIL,
//     results
//   };
// };

export const verifyEmail = (data) => {
  return (dispatch) => {

    return axios.get(`${url}/admin/${data.username}/${data.password}`)
      .then(response => {
        console.log("response data", response.data);
        dispatch(verifyEmailSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(fail({"error": "username and/or password not found"}));
        //throw(error);
      });
  }
};
