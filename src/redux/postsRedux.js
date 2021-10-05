import axios from 'axios';

/* selectors */
export const getAll = ({posts}) => {
  console.log('>>>>>>>>>>>>>>');
  console.log('GET ALL');
  console.log(posts.data);
  console.log('>>>>>>>>>>>>>>');
  return posts.data;
};
// export const getPostById = ({posts}, postId) => {
//   return posts.data.find(post => post._id === postId);
// };
export const getPostByUser = ({posts}, user) => {
  return posts.data.filter(post => post.author === user);
};
export const getPostsState = ({posts}) => posts.userPosts;
export const getFetchStatus = ({posts}) => posts.loading.active;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const DEL_SUCCESS = createActionName('DEL_SUCCESS');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const SWITCH_POSTS = createActionName('SWITCH_POSTS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const delSuccess = payload => ({ payload, type: DEL_SUCCESS });
export const createActionAddPost = payload => ({ payload, type: ADD_POST });
export const createActionEditPost = payload => ({ payload, type: EDIT_POST });
export const createActionSwitchPosts = payload => ({ payload, type: SWITCH_POSTS });

/* thunk creators */
export const createActionFetchPosts = (posts, refetch, activeFetch) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    if(!refetch) {
      if(posts.length < 1 && !activeFetch) {
        console.log('first fetch');
        axios
          .get('http://localhost:8000/api/posts')
          .then(res => {
            dispatch(fetchSuccess(res.data));
          })
          .catch(err => {
            dispatch(fetchError(err.message || true));
          });
      }
    } else {
      console.log('refetch');
      axios
        .get('http://localhost:8000/api/posts')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const createActionFetchPostById = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    axios
      .get(`http://localhost:8000/api/posts/${id}`)
      .then(res => {
        console.log('--------------------------');
        console.log('POST BY ID FROM SERVER');
        console.log(res.data);
        console.log('--------------------------');
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        console.log('error');
        dispatch(fetchError(err.message || true));
      });
  };
};

export const createActionPostNewPost = (newPost) => {
  console.log('POSTING NEW POST');
  console.log(newPost);
  return (dispatch, getState) => {

    axios
      .post(`http://localhost:8000/api/posts`, newPost)
      .then(res => {
        console.log(res.data);
        dispatch(createActionAddPost(res.data));
      })
      .catch(err => {
        console.log('tu error');
        console.log(err);
      });
  };
};

export const createActionPutEditPost = (id, editedPost) => {
  console.log('PUTTING EDITED POST');
  console.log(editedPost);
  return (dispatch, getState) => {

    axios
      .put(`http://localhost:8000/api/posts/${id}`, editedPost)
      .then(res => {
        console.log(res.data);
        dispatch(createActionEditPost(editedPost));
      })
      .catch(err => {
        console.log('tu error');
        console.log(err);
      });
  };
};

export const createActionDeletePost = (id) => {
  console.log('DELETING POST');
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    axios
      .delete(`http://localhost:8000/api/posts/${id}`)
      .then(res => {
        console.log(res.data);
        dispatch(delSuccess(true));
      })
      .catch(err => {
        console.log('tu error');
        console.log(err);
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_POST: {
      console.log(action.payload);
      return {
        ...statePart,
        data: [
          ...statePart.data,
          action.payload,
        ],
      };
    }
    case EDIT_POST: {
      console.log(action.payload);
      return {
        ...statePart,
        data: action.payload,
        // data: statePart.data.map(
        //   (post) => post._id === action.payload._id ? action.payload : post
        // ),
      };
    }
    case DEL_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case SWITCH_POSTS: {
      return {
        ...statePart,
        userPosts: action.payload,
      };
    }
    default:
      return statePart;
  }
};
