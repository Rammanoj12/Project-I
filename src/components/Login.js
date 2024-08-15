//////////////////////////////////////////////
//old script
// import "./login.css"
// import React from 'react';
// import { Link } from "react-router-dom";

// const  Login =({setShowCard,setHome})=>{
   
   
// return(
//         <div className ="maincontainer">
//        <div className="cardcontainer">
//          <div className="inputcontainer">
//          <img src="https://th.bing.com/th?id=OIP.unBf0CFmwfB8TfJQ3OHGgQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Try iwith new one" class="image"></img>
//             <label for="htmlid">Enter the username</label>
//             <input type="text" id="htmlid" ></input>
//             <label for="html">Enter the password</label>
//             <input type="password" id="html"></input>
//             </div>
//             <div>
//             <button id="btn"> <Link to="/Home" onClick={() => setHome(true)}>Sign in</Link> </button>
//             <button id="btn" >
//               <Link to="/main" onClick={() => setShowCard(true)}>Go to main page</Link></button>
//             </div>
//             </div>
//             </div>
    
      
//     )
// }


// export default Login;
///////////////////////////////////////////////////////////////////
//New Script optimized
import "./login.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Login = ({ setShowCard, setHome }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const authDetails = {
      name: "Manoj",
      password: "Ironman@12"
    };

    if (username.toLowerCase() === authDetails.name.toLowerCase() && password === authDetails.password && username.length === 5) {
    setHome(true);
      navigate('/home');
  
      
    } else {
      setHome(false);
      navigate('/notfound');
    }
  };

  return (
    <div className="maincontainer">
      <div className="cardcontainer">
        <div className="inputcontainer">
          <img src="https://th.bing.com/th?id=OIP.unBf0CFmwfB8TfJQ3OHGgQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Try with a new one" className="image" />
          <label htmlFor="htmlid">Enter the username</label>
          <input type="text" id="htmlid" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="html">Enter the password</label>
          <input type="password" id="html" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="buttoncontainer">
          <button id="btn" onClick={handleLogin}>Sign in</button>
          <button id="btn">
            <Link to="/main" onClick={() => setShowCard(true)}>Go to main page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
