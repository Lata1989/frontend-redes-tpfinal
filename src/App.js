// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/public/Home';
import { Login } from './pages/public/Login';
import { Verify } from './pages/public/Verify';

export const App = () => {
  return(
    <>
      {/* <div className="text-red-600">App</div> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/verify' element={<Verify/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// https://www.youtube.com/watch?v=3nL8e7I_9lo
// 1:31:00

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
