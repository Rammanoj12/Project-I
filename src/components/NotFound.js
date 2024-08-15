import { useNavigate } from "react-router-dom"
import "./Notfound.css"
const NotFound =({setShowCard}) =>{
    const navigate=useNavigate();
const gohome =() =>{
    navigate('/login');
    setShowCard(false);

}



    return(
        <>
        <div>
             <img src ="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg" 
            alt="no pic" className="notfound" onClick={gohome}/> 
            </div>
        </>
    )
}

export default NotFound;