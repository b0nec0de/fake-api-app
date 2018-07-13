import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
	NavLink,
	HashRouter
} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import User from './pages/User';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function App () {
   return (
      <HashRouter>
         <div className="App">
            <h2>Fake-API-Output</h2>
            <ul className="header">
               <li><NavLink exact to="/">Home</NavLink></li>
               <li><NavLink to="/detail">Detail</NavLink></li>
               <li><NavLink to="/user">User</NavLink></li>
            </ul>
            <div className="content">
               <Route exact path="/" component={Home} />
               <Route path="/detail" component={Detail} />
               <Route path="/user" component={User} />
            </div>
         </div>
      </HashRouter>  
   );
}
   
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if(module.hot) {
   module.hot.accept()
}
