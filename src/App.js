import React, { Suspense, lazy, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from './UserContext';
import './App.css';
import Footer from './js/components/Footer/Footer';
import Navbar from './js/components/Navbar/Navbar';
import Loading from './js/components/Loading/Loading';

const NotFound = lazy(() => import('./js/views/NotFound/NotFound'));
const Home = lazy(() => import('./js/views/Home/Home'));
const Demo = lazy(() => import('./js/views/Demo/demo'));

function App() {

  const [backen_url] = useState('https://iwash-backend.herokuapp.com/');

  const providerValue = useMemo(() => ({ 
      backen_url
    }), [
      backen_url
    ]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<Loading/>}>
          <Navbar/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/demo" component={Demo} />
                <Route render={() => <NotFound/>} />
              </Switch>
          <Footer/>
        </Suspense>
      </UserContext.Provider>
    </Router> 
  );
}

export default App;
