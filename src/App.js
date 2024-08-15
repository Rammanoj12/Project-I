// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Main from './components/Main';
// import Home from './components/Home';
// import NotFound from './components/NotFound';

// const App = () => {
//   const [showLogin, setShowLogin] = useState(true);
//   const[showHome,setHomepage]=useState(false);
//   return (
//     <BrowserRouter>
//       {showLogin ? (
//         <Main setShowCard={setShowLogin} />
//       ) : (
       
//         <Routes>
//           <Route  path="/login" element={<Login setShowCard={setShowLogin}/>} />
//           <Route  path="/main"  element={<Login setShowCard={setShowLogin}/>} />
//         </Routes>
//       )}

//       {showHome ? (
//         <Home setHome={setHomepage} />
//       ) : (
       
//         <Routes>
//           <Route  path="/notfound"  element={<NotFound setShowCard={setShowLogin}/>} />
//           <Route  path="/home"  element={<NotFound setHome={setShowLogin}/>} />
//         </Routes>
//       )}


      
//     </BrowserRouter>
//   );
// }

// export default App;
//////////////////////////////////////////////////////
//New Script Optimized
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Home from './components/HomePage/Home';
import NotFound from './components/NotFound';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showHome, setShowHome] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={showLogin ? <Main setShowCard={setShowLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login setShowCard={setShowLogin} setHome={setShowHome} />}
        />
        <Route path="/main" element={<Main setShowCard={setShowLogin} />} />
        <Route path="/home" element={showHome ? <Home setHome={setShowHome} /> : <Navigate to="/notfound" />} />
        <Route path="/notfound" element={<NotFound setShowCard={setShowLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
