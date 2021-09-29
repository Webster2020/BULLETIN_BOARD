/* selectors */
export const getAll = ({posts}) => posts.data;
export const getPostById = ({posts}, postId) => {
  return posts.data.find(post => post.postId === postId);
};
export const getPostByUser = ({posts}, userId) => {
  console.log('REDUX:');
  console.log(userId);
  console.log(posts);
  console.log('---------');
  return posts.data.find(post => {
    console.log(post);
    console.log('---------');
    return post.authorId === userId;
  });
};
export const getPostsState = ({posts}) => posts.userPosts;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const SWITCH_POSTS = createActionName('SWITCH_POSTS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const createActionAddPost = payload => ({ payload, type: ADD_POST });
export const createActionEditPost = payload => ({ payload, type: EDIT_POST });
export const createActionSwitchPosts = payload => ({ payload, type: SWITCH_POSTS });

/* thunk creators */

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
      return {
        ...statePart,
        data: statePart.data.map(
          (post) => post.postId === action.payload.postId ? action.payload : post
        ),
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
