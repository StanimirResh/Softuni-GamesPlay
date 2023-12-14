import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import * as authService from "../services/authService"

export const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        authService.login(values.email, values.password)
            .then(authData => {
                userLogin(authData);
                navigate('/')
            })
            .catch(err => console.log(err))


    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click  <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}