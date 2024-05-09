import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Brunel_Page from './pages/Brunel_Page';
import Registration from './pages/Registration';
import Successful from './pages/Successful';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center">
        <Routes>
          <Route path="/" element={<Brunel_Page />} />
          <Route path="/register" element={<Registration/>}/>
          <Route path='/success' element={<Successful/>}/>
        </Routes>
      </div>
    </Router>
  );
}
