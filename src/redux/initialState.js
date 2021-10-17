export const initialState = {
  user: {
    login: false,
    admin: false,
    data: {
      name: '',
      email: '',
      password: '',
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
