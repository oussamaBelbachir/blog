import React from 'react'
import './app.scss';

import {Switch , Route} from 'react-router-dom';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.page';
import Articlepage from './pages/articlepage/articlepage.page';

function App() {
    
    return (
        <div>

        <Header /><div className="height"></div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/:category/:slug" component={Articlepage}/>
        </Switch>
            
        </div>
    )
}

export default App
