import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Head from './components/header'
import Assets from './pages/assets'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return(
    <>
      <Head/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Assets/>}/>
          <Route path='/landing'> 
            <Route path='' element= {<Login/>}/>
            <Route path='register' element= {<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App
