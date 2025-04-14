import { useEffect, useState } from 'react';
import './App.css';
import ImageEditor from './components/ImageEditor';
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './components/Chart';
import dataContext from './components/controls';
import AddData from './components/AddData';

function App() {
  registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF5cXmRCe0x3RXxbf1x1ZFRMY11bRHFPIiBoS35Rc0VnWHxecXFdR2dZUEJzVEBU');

  const [gridData, setGridData] = useState([
    { name: "Smartphone", price: 699, stock: 50, category: "Electronics", salesLastMonth: 120, rating: 4.5 },
    { name: "Laptop", price: 999, stock: 30, category: "Electronics", salesLastMonth: 80, rating: 4.2 },
    { name: "Headphones", price: 99, stock: 200, category: "Audio", salesLastMonth: 300, rating: 4.7 },
    { name: "Tablet", price: 300, stock: 75, category: "Electronics", salesLastMonth: 150, rating: 4.0 }
  ]);
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const chartData = gridData.reduce((acc, item) => {
      acc.push({ x: item.name, y: item.salesLastMonth });
      return acc;
    }, []);
    setChart(chartData); // Update chart state with transformed data
    console.log("Chart Data:", chartData);
  }, [gridData]); // Runs whenever gridData changes

  return (
    <dataContext.Provider value={{ gridData, setGridData, chart, setChart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageEditor />} />
          <Route path="/chart-visualize" element={<Chart />} />
          <Route path="/new-data" element={<AddData/>} />
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;