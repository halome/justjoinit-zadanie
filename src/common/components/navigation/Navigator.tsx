import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OfferView } from '../../../views/offerView/OfferView';
import { HomeView } from '../../../views/homeView/HomeView';

interface Props {}

export const Navigator: React.FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route path='/offer/:id'>
          <OfferView />
        </Route>
        <Route path='/:skill?'>
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};
