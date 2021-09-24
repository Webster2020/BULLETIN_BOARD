export const initialState = {
  user: {
    login: false,
    admin: false,
    data: {
      name: 'Bill',
      surname: 'Gates',
    },
  },
  posts: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
};
