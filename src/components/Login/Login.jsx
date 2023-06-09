import React, {useState} from "react";
import "./Login.css";
import Title from "../Title/Title";

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInfo = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="container-form">
            <Title title="Iniciar Sesión"/>
            <form className ="form" onSubmit={handleInfo}>
                <label for="email">Email: </label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="correo@email.com" id="email" name="email"/>
                <label for="email">Contraseña: </label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
            </form>
            <button className ="access-btn">Acceder</button>
            <button className="account-btn"> ¿No tienes cuenta? Registrate aquí!</button>
            <button className="google-btn"> <i class="fa-brands fa-google"></i> &nbsp; Iniciar Sesión con Google</button>
        </div>
      
    )
}

export default Login;