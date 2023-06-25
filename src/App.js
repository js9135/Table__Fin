import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Home from './pages/home/Home';
import PaymentList from './pages/home/PaymentList';



function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/paymentlist" element={<PaymentList />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;