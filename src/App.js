import React from "react";
import Header from "./compenents/Header";
import Products from "./compenents/Products";
import Home from "./compenents/Home";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {DataProvider} from "./compenents/DataProvider"
import Details from "./compenents/Details";
import About from "./compenents/About";
import Contact from "./compenents/Contact";

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path='home' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:id' element={<Details />} />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
