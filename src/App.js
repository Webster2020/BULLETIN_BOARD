import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Post } from './components/views/Post/Post';
import { PostEdit } from './components/views/PostEdit/PostEdit';
import { PostEdited } from './components/views/PostEdited/PostEdited';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { PostAdded } from './components/views/PostAdded/PostAdded';
import { PostDel } from './components/views/PostDel/PostDel';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/post/add' component={PostAdd} />
              <Route exact path='/postadded' component={PostAdded} />
              <Route exact path='/post/del' component={PostDel} />
              <Route exact path='/post/:id' component={Post} />
              <Route exact path='/post/:id/edit' component={PostEdit} />
              <Route exact path='/postedited' component={PostEdited} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
