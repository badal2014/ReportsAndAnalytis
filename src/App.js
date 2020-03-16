import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.scss';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import DigitalDeal from './components/digitalDeal';



function App() {
  return (
    <div className="App">
      <DigitalDeal />
      {/* Start */}
     {/* <DatePicker /> */}
    </div>
  );
}

export default App;
