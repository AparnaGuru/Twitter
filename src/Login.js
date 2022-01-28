import { useNavigate } from "react-router-dom";
import Store from "./app/Store"

export function Login(){
    const navigate=useNavigate();

    Store.subscribe(() => {
    //Anytime when State is True, it will navigate. State will never change to false unless maybe JWT token exprires 
    //and the else will go to landing page in that case.
        var AuthVal=Store.getState().auth.isAuth;
        if (AuthVal === true) {
            console.log(Store.getState().auth.isAuth)
            navigate("/Landing");  
            console.log(Store.getState().auth.isAuth)
        }
        else 
            navigate('/')
    })

    function HandleSubmit(e){
        var username = (document.getElementById("username").value)
        var passwrd = (document.getElementById("pw").value)
        e.preventDefault();

        if (username === "Aparna" && passwrd==="Sahasra")
        {            
            Store.dispatch({type:"updated", payload:true })
        }
        else
        alert("Wrong cred")     
    }



    return (
        
        <div>
            <h1>Login to Twitter</h1>
            <form onSubmit={HandleSubmit}>
                <input type="text" placeholder="username" id="username"></input>
                <div></div>
                <input type="password" placeholder="password" id="pw"></input>
                <div></div>
                <input type="Submit" defaultValue="Login"></input>
            </form>
            
        </div>
    )
}