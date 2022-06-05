import { BrowserRouter as Router, Route,Routes ,Navigate } from 'react-router-dom';

import { useAuth } from '../hooks';
import { Home, Login, Signup,Settings,UserProfile } from '../pages';
import {  Navbar } from './';


function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

 return auth.user ? children : <Navigate to="/login"></Navigate>
}

const Page404 = () => {
  return <h1>404</h1>;
};



function App() {
  const auth = useAuth();

  // if (auth.loading) {
  //   return <Loader />;
  // }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={   <Home />}/>

          <Route exact path="/login" element={   <Login />}/>

          <Route exact path="/register" element={   <Signup/>}/>

         <Route exact path="/settings" element={ <PrivateRoute auth={auth}><Settings/></PrivateRoute>}/>

         <Route exact path="/user/:userId" element={ <PrivateRoute auth={auth}><UserProfile/></PrivateRoute>}/>

          <Route path="*" element={   <Page404 />}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
