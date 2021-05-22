import React, { useState } from 'react'
import './login.css'
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye ,HiEyeOff } from "react-icons/hi";

const Login = () => {

    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img src="http://www.lifemed.com.br/assets/img/cliente-icon-9.png"/>
            </div>

            <div className="login-rigth">
                <h1>Acessar App</h1>

                <div className="loginInputEmail">
                    <MdEmail />
                    <input 
                    type="email" 
                    placeholder="Digite um email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="loginInputPassword">
                    <MdLock />
                    <input 
                    type={show ? 'text' : 'password'} 
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <div className="login-eye">
                        {show ? (
                            <HiEye 
                                onClick={handleClick}
                            />
                        ) : (
                            <HiEyeOff 
                                onClick={handleClick}
                            />
                        )}
                    </div>
                </div>

                <button className="btn btn-button" type="submit">
                    Entrar
                </button>

                <h4>Não tenho conta!</h4>

                <button className="btn btn-button" type="submit">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}

export default Login
