import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/PSK_Portfolio" element={<Layout/>}>
          <Route index element = {<Home/>} />
          <Route path="about" element = {<About/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
