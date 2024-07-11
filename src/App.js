import React from 'react';
import DataTable from './Horoscope';
import './App.css';

function App() {
  return (
    <div className="App">
          {/* <img src={images} alt="Canvas Logo" width="2%" className="logo-image" /> */}
      <DataTable />
      {/* <Horoscope data={data} /> */}
    </div>
  );
}

export default App;
