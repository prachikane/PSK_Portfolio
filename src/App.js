import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from '../src/components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/PSK_Portfolio" element={<Layout/>}/>
      </Routes>
    </>
  );
}

export default App;
