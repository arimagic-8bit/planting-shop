import React from 'react';
import { Switch, Route } from "react-router-dom";

//import './App.css';

// components
import Shop from './Shop'
import Detail from './Detail';
import Order from './Order';

const App = () => {
        return (
            <Switch>
                <Route exact path="/" component={Shop}/>
                <Route exact path="/plant/:id" component={Detail} />
                <Route exact path="/order" component={Order} />
            </Switch>
          )
} 

export default App;