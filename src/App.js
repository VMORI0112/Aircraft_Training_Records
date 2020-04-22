import React, { Suspense, lazy, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from './UserContext';
import './App.css';
import Footer from './js/components/Footer/Footer';
import Navbar from './js/components/Navbar/Navbar';

const NotFound = lazy(() => import('./js/views/NotFound/NotFound'));
const Home = lazy(() => import('./js/views/Home/Home'));
const LoggedHome = lazy(() => import('./js/views/LoggedHome/LoggedHome'));
const Login = lazy(() => import('./js/views/Login/Login'));
const Register = lazy(() => import('./js/views/Register/Register'));
const CurrentRecords = lazy(() => import('./js/views/currentRecords/currentRecords'));
const addRecord = lazy(() => import('./js/views/addRecord/addRecord'));

const EditToUpdate = lazy(() => import('./js/views/editToUpdate/editToUpdate'));

function App() {

    const [backen_url] = useState(' https://3000-aaee05d3-afa1-4c57-88c2-89535a1c0b88.ws-us02.gitpod.io')
    // const [backen_url] = useState('https://iwash-backend.herokuapp.com/');
    const [Auth, setAuth] = useState(null);
    
    // const [backen_url_records] = useState(' https://3000-a8e8103b-38a9-441b-a8b2-d02d84f3caf2.ws-us02.gitpod.io/');
    // const [trainData, setTrainData] = useState();

  let tokenAuth = localStorage.getItem('token');
  // let userId = localStorage.getItem('userID');
  // let userEmail = localStorage.getItem('email');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

//    useEffect(() => {
//     fetch(backen_url_records+'traindata')
//       .then(res => res.json())
//       .then(res => setTrainData(res))
//       .catch(error => console.log('error: ', error) );
//   },[backen_url_records])

  const providerValue = useMemo(() => ({ backen_url, Auth, setAuth, windowHeight }), [backen_url, Auth, setAuth, windowHeight]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar/>
            <section style={{minHeight: windowHeight}}>
              <Switch>
                {!tokenAuth ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={LoggedHome}/> }
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/training-records" component={CurrentRecords} />
                <Route path="/addRecord" component={addRecord} />
                <Route path="/editToUpdate" component={EditToUpdate} />
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
