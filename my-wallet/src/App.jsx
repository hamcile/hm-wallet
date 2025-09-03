import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Head from './components/header'
import Assets from './pages/assets'
import Login from './pages/login'

function App() {
  return(
    <>
      <Head/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Assets/>}/>
          <Route path='/landing' element= {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App
