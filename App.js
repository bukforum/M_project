import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/home';
import Aa from './components/Aa';
import Bb from './components/Bb';
import Cc from './components/Cc';
import NoPage from './components/NoPage';
import styled from 'styled-components';
import Aaa from './components/Aaa';
import Aab from './components/Aab';

const Cont = styled.div`

`;



function App() {
  return (
  <div className="App">
    <h1>북한산 포럼</h1>
    <Cont>
    
    <BrowserRouter>
     <Routes>
      
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aa" element={<Aa />}>
            <Route path='Aaa' element={<Aaa />} />
            <Route path='Aab' element={<Aab />} />
          </Route>
          <Route path="bb" element={<Bb />} />
          <Route path="cc" element={<Cc />} />
          <Route path="*" element={<NoPage />} />
       </Route>  
       
     </Routes>
    </BrowserRouter>
    
    </Cont>
  </div> 
  );
}

export default App;
