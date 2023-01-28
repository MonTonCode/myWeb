import './App.css'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import './components/button/BtnStyle.css'
import Home from './pages/Home'
import ImageResize from './pages/ImageResize'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <div className="h-12"></div>
      </header>
      <main>
        <article>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/imgResize' element={<ImageResize />} />
          </Routes>
          {/* <section className='test-button-style'>
            <button className='btn btn1 m-8 bg-indigo-700 text-white'>Click Me</button>
            <button className='btn btn2'>Click Me</button>
            <button className='btn btn3 mx-8'>Click Me</button>
            <br />
            <button className='btn btn4 m-8'>Click Me</button>
            <button className='btn btn5'>Click Me</button>
            <button className='btn btn6 mx-8'>
              <div className="effect">
                <span>Click Me</span>
              </div>
              <span>Click Me</span>
            </button>
            <br />
            <div className="bgForBtnNeon">
              <a href="#" className='btn btn-neon m-8'><span>Button</span><i></i></a>
            </div>
          </section> */}
        </article>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
