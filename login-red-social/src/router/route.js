import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from '../views/login'
import Home from '../views/Home'

export default function AppRouter()
{
    return(
            <Router>
                <Switch>
                    <Route exact path="/" component={ Login }/>
                    <Route path="/home" component={Home}/>                                                         
                    <Route  path="*" component={() => <h1 style={{marginTop:200}}>404 <br/>Página no Encontrada</h1>}/>1
                </Switch>                
            </Router>
    );
}