import React, { Suspense, lazy, useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from './UserContext';
import './App.css';

import Footer from './js/components/Footer/Footer';
import Navbar from './js/components/Navbar/Navbar';
import Loading from './js/components/Loading/Loading';

import logo from '../src/img/icon.png';

const NotFound = lazy(() => import('./js/views/NotFound/NotFound'));
const Home = lazy(() => import('./js/views/Home/Home'));
const Demo = lazy(() => import('./js/views/Demo/demo'));



function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonColor, setButtonColor] = useState('blue');

  const [test, setTest] = useState([{
    key1: "Hello",
    key2: "World"
  }])

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  const providerValue = useMemo(() => ({ 
      name, setName, email, setEmail, test, setTest, logo, buttonColor, setButtonColor
    }), [
      name, setName, email, setEmail, test, setTest, buttonColor, setButtonColor
    ]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<Loading/>}>
          <Navbar/>
            <section className="mt-5" style={{minHeight: windowHeight}}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/demo" component={Demo} />
                <Route render={() => <NotFound/>} />
              </Switch>
            </section>
          <Footer/>
        </Suspense>
      </UserContext.Provider>
    </Router> 
  );
}

export default App;
