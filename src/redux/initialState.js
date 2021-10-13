export const initialState = {
  user: {
    login: false,
    admin: false,
    data: {
      name: '',
      surname: '',
      email: '',
    },
  },
  posts: {
    userPosts: false,
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
