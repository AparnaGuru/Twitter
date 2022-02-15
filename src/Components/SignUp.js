import { useNavigate } from "react-router-dom";
import Store from "../app/Store";

export function SignUp() {
    const navigate = useNavigate();

    function HandleSubmit(e) {
        var username = (document.getElementById("username").value)
        var passwrd = (document.getElementById("pw").value)
        e.preventDefault();

        if (username === "" || passwrd === "") {
            alert("atleast one field is empty")
        }
        else {
            Store.dispatch({ type: "updated", un: username, payload: true })
            console.log(Store.getState().auth.userName)
            navigate("/Landing"); 
            fetch('http://localhost:3001/createUser/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: username,
                    passWord: passwrd
                })
            });
            
        }
    }

    return (

        <div>
            <h1>Signup to Twitter</h1>
            <form onSubmit={HandleSubmit}>
                <input type="text" placeholder="username" id="username"></input>
                <div></div>
                <input type="password" placeholder="password" id="pw"></input>
                <div></div>
                <input type="Submit" defaultValue="Signup"></input>
                <div></div>
                <div>Do you already have an account? <a href="/Login" >Login</a></div>
            </form>

        </div>
    )
}