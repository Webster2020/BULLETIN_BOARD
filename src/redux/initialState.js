export const initialState = {
  user: {
    login: false,
    admin: false,
    data: {
      id: '1',
      name: 'Bill',
      surname: 'Gates',
      email: 'billgates@gmail.com',
    },
  },
  posts: {
    data: [
      // {
      //   postId: 1,
      //   authorId: 1,
      //   author: 'Bill Gates',
      //   title: 'Book',
      //   content: 'I want to sell book. I want to sell book. I want to sell book',
      //   date: '20.09.2021',
      //   update: '25.09.2021',
      //   email: 'billgates@gmail.com',
      //   status: 'published', //draft, closed
      //   image: 'https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      //   price: '20.00$',
      //   phone: '123456789',
      //   localization: 'New York',
      // },
      // {
      //   postId: 2,
      //   authorId: 1,
      //   author: 'Bill Gates',
      //   title: 'Sport',
      //   content: 'I want to sell ball. I want to sell ball. I want to sell ball.',
      //   date: '18.09.2021',
      //   update: '23.09.2021',
      //   email: 'billgates@gmail.com',
      //   status: 'closed', //draft, closed
      //   image: 'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      //   price: '15.00$',
      //   phone: '012345678',
      //   localization: 'Paris',
      // },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
