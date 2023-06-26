import { useState } from 'react'
import { Provider } from 'react-redux'
import reactLogo from './assets/react.svg'
import Home from './components/Home/Home'
import Login from './components/Login'
import viteLogo from '/vite.svg'
import store from './Redux/Store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>

        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          {/* <Home /> */}
        </Router>
        {/* <Login/> */}

      </Provider>
    </>
  )
}

export default App
