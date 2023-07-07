import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/PSK_Portfolio" element={<Layout/>}>
          <Route index element = {<Home/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
