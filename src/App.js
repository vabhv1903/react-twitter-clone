import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    // BEM
    <div className="app">
      {/* <h1>twitter clone aarela ji !! </h1> */}
      {/* sidebar */}
      <Sidebar />
      {/*  feed */}
      <Feed />
      {/* widgets */}
      <Widgets />

    </div>
  );
}

export default App;
