import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './pages/Menu';
import Player from './pages/Player';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/player" exact component={Player} />
            </Switch>
        </BrowserRouter>
    );
}