import './App.css'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/menu'/>
        <Route path='/detalle'/>
        <Route path='/carrito'/>
      </Routes>
    </>
  )
}

export default App
