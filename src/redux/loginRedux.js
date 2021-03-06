import axios from 'axios';

/* selectors */
export const getLoginStatus = ({user}) => user.login;
export const getUserData = ({user}) => user.data;

/* action name creator */
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const LOGIN = createActionName('LOGIN');
const LOGOUT = createActionName('LOGOUT');
const USER = createActionName('USER');

/* action creators */
export const createActionLogin = payload => ({ payload, type: LOGIN });
export const createActionLogout = payload => ({ payload, type: LOGOUT });
export const createActionUser = payload => ({ payload, type: USER });

/* thunk creators */
// export const createActionLoginWithGoogle = () => {
//   console.log('LOGIN WITH GOOGLE');
//   return (dispatch, getState) => {

//     axios
//       .get(`http://localhost:8000/auth/google`)
//       .then((req, res) => {
//         console.log('login google correct');
//         console.log(req.data);
//         console.log(res.data);
//         // dispatch(createActionEditPost(editedPost));
//       })
//       .catch(err => {
//         console.log('login google error');
//         console.log(err);
//       });
//   };
// };

export const createActionRegisterDB = (newUser) => {
  return () => {
    axios
      .post(`http://olx.webster2020.usermd.net/user/register`, newUser)
      // .post(`http://localhost:8000/user/register`, newUser)
      .then(res => {
        console.log('redux register OK');
        console.log(res.data);
      })
      .catch(err => {
        console.log('redux register ERROR');
        console.log(err);
      });
  };
};

export const createActionLoginDB = (user) => {
  return (dispatch, getState) => {

    axios
      .post(`http://olx.webster2020.usermd.net/user/login`, user)
      // .post(`http://localhost:8000/user/login`, user)
      .then(res => {
        console.log('redux login OK');
        console.log(res.data);
        dispatch(createActionUser(res.data));
      })
      .catch(err => {
        console.log('redux login ERROR');
        console.log(err);
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...statePart,
        login: action.payload,
      };
    }
    case USER: {
      return {
        ...statePart,
        data: action.payload,
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
