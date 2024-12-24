// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





import React from 'react'
import Counter from './components/Counter'
import FetchData from './components/FetchData'
import ConditionalRendering from './components/ConditionalRendering'
import FormHandling from './components/FormHandling'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Parent from './components/liftingStateUp/Parent'
import LoginForm from './components/loginFormSingleState/LoginForm'
import CustomHook from './components/customHook/CustomHook'
import ErrorBoundery from './components/errorBoundry/ErrorBoundery'
import MyComp from './components/errorBoundry/MyComp'
import MyCompWithout from './components/errorBoundry/MyCompWithout'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { ThemeProvider } from './components/themeContext/ThemeContext'
// import ThemeToggleBtn from './components/themeContext/ThemeToggleBtn'
// import ThemedComp from './components/themeContext/ThemedComp'



const App = () => {
  return (
    <div>
    
    {/* <Router>
      <nav>
        <button>
        <Link to='/counter'>counter</Link>
        </button>

        <button>
        <Link to='/fetch'>fetch</Link>
        </button>

      </nav>


     
        <Routes>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/fetch' element={<FetchData/>}/>
        </Routes>

      </Router> */}

        {/* <Counter/>
        <FetchData/>
        <ConditionalRendering/>
        <FormHandling/>
        <Home/>
        <Home2/> */}
        {/* <Parent/> */}
        {/* <LoginForm/> */}
        <CustomHook/>

        <ErrorBoundery>
          {/* <MyComp/> */}
          <MyCompWithout/>
        </ErrorBoundery>


          {/* <ThemeProvider>
        <div>
          <h2 style={{textAlign: 'center'}}>Example of context API with theme</h2>
          <ThemeToggleBtn/>
          <ThemedComp/>
        </div>
      </ThemeProvider> */}
      
    

    </div>
  )
}

export default App
