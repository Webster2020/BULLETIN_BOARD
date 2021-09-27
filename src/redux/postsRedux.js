/* selectors */
export const getAll = ({posts}) => posts.data;
export const getPostById = ({posts}, postId) => posts.data.filter(post => post.postId === Number(postId));

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const EDIT_POST = createActionName('EDIT_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const createActionEditPost = payload => ({ payload, type: EDIT_POST });

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
    case EDIT_POST: {
      console.log(action.payload);
      return {
        ...statePart,
        data: statePart.data.map(
          (post) => post.postId === action.payload.postId ? action.payload : post
        ),
      };
    }
    // case SOME_ACTION: {
    //   return { 
    //     ...state, 
    //     contents: state.contents.map(
    //       (content, i) => i === 1 ? {...content, text: action.payload} : content
    //     )
    //   }
    // }
    default:
      return statePart;
  }
};
