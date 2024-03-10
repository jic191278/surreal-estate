import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Properties from './Properties';
import AddProperty from './AddProperty';

import NavBar from './NavBar';
import '../styles/app.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
