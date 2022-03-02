import './App.css';
import Hookusestate from './Mycomponents/Hookusestate';
import UseReducer from './Mycomponents/UseReducer';
import UseState from './Mycomponents/UseState';
import UseEffect from './Mycomponents/UseEffect';
import UseRef from './Mycomponents/UseRef';

import {
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useRef } from 'react';

function App() {
  return (
    <>
    React hooks :
    {/* <Routes>
      <Route path="/Use">
      <Hookusestate/>
      </Route>
      <Route path="/Reducer">
      <UseReducer/>
      </Route>
    </Routes> */}
    <Hookusestate/>
    <UseState/>
    <UseReducer/>
    <UseEffect/>
    <UseRef/>
    </>
  );
}

export default App;
