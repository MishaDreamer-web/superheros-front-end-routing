import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';

import HomeView from './views/HomeView';
import SuperherosListView from './views/SuperherosListView';
import SuperheroView from './views/SuperheroView';
import NotFoundView from './views/NotFoundView';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/superheros" exact>
          <SuperherosListView />
        </Route>

        <Route path="/superheros/:nickName" exact>
          <SuperheroView />
        </Route>

        <Route path="/">
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
