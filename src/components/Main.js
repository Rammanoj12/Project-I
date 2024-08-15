import "./main.css"; 
import { useNavigate } from "react-router-dom";

const Main = ({ setShowCard }) =>{
  const navigate = useNavigate();

  const showCard =() =>
    {
      navigate('/login');
      setShowCard(true);
    }
  return(
    <>
  
       <div className="logincardcontainer">
         <div className="inputcontainer">
         <img src="https://th.bing.com/th?id=OIP.unBf0CFmwfB8TfJQ3OHGgQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Try iwith new one" class="image"></img>
            </div>
            <div>
            <button id="btn" 
               onClick={showCard}>Click for Login page</button>
            </div>
        
            </div>
    
  </>
  )

}

export default Main;