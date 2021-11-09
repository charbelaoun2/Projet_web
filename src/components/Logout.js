import React from "react"
import { logout,selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


import "./Logout.css"

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch=useDispatch()
    const handleLogout=(e)=>{
        e.preventDefault();
        
        dispatch(logout());
    }
    return(
        <div className="logout">
            <h1>
                Welcome <span className="user__name">{user.name}</span>
                <button className="logout__button" onClick={(e)=>handleLogout(e)}>Logout</button>
            </h1>{" "}
        </div>
    );
};

export default Logout;