/* selectors */
export const getLoginStatus = ({user}) => user.login;
export const getUserData = ({user}) => user.data;

/* action name creator */
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const LOGIN = createActionName('LOGIN');
const LOGOUT = createActionName('LOGOUT');

/* action creators */
export const createActionLogin = payload => ({ payload, type: LOGIN });
export const createActionLogout = payload => ({ payload, type: LOGOUT });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...statePart,
        login: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...statePart,
        login: action.payload,
      };
    }
    default:
      return statePart;
  }
};
