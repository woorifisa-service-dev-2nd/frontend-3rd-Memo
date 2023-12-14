import React, {useState} from 'react'
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import MemoHeader from './components/memo/MemoHeader';
import MeomoBody from './components/memo/MeomoBody';





const App = () => {
  return (
    <DefaultLayout>
      <MemoHeader/><br /><br />
       <MeomoBody/>
    </DefaultLayout>
  );

}

export default App