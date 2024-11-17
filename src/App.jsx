




import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import store from './store/store'
import Navbar from './components/Navbar'

import { Provider } from 'react-redux'


function App() {

  return (
    <Provider store={store}>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>

      
     </Routes>
     </BrowserRouter>
     </Provider>
  )
}

export default App
