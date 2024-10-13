import './reset.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { TempApiView } from './api/TempApiView';
import { Landing } from './views/Landing';
import { Login } from './views/Login';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/temp" element={<TempApiView />} />
      </Routes>
    </Router>
  );
};
