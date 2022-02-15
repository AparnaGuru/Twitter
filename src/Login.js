import { useNavigate } from "react-router-dom";
import Store from "./app/Store";

export function Login() {
    const navigate = useNavigate();
    var errorVar = false;

    Store.subscribe(() => {
        //Anytime when State is True, it will navigate. State will never change to false unless maybe JWT token exprires 
        //and the else will go to landing page in that case.
        var AuthVal = Store.getState().auth.isAuth;
        if (AuthVal === true) {
            console.log(Store.getState().auth.isAuth)
            navigate("/Landing");
            console.log(Store.getState().auth.isAuth)
        }
        else
            navigate('/')
    })

    function HandleSubmit(e) {
        e.preventDefault();
        console.log("HandleSubmit in Login")
        
        var username = document.getElementById("username").value
        var passwrd = document.getElementById("pw").value
        
        //const [Authenticated, setAuth] = useState("")
        
            fetch('http://localhost:3001/verifyLogin/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: username,
                    passWord: passwrd
                })
            })
                .then(response => response.json())
                .then(resp => {if(resp.message === "success") {
                    Store.dispatch({ type: "updated", un: username, payload: true }) 
                                }
                                else{
                                    errorVar = true;}})
                .catch(err => console.log(err))      
    }

    function renderError() {
        if (errorVar = true){
            return (<div>Wrong credentials</div>);
        }
    }

    return (

        <div>
            <h1>Login to Twitter</h1>
            <form onSubmit={HandleSubmit}>
                <input type="text" placeholder="username" id="username"></input>
                <div></div>
                <input type="password" placeholder="password" id="pw"></input>
                <div></div>
                { 
                  renderError()  
                }                
                <input type="Submit" defaultValue="Login"></input>
            </form>

        </div>
    )
}