import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"

import { AuthContext } from "../contexts/AuthContext"
import * as authService from "../services/authService"
export const Register = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        repass: ''
    })
    const [errors, setErrors] = useState(false);

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
        if (values.password === values.repass) {
            authService.register(values.email, values.password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(err => console.log(err))
        } else {
            setErrors(true)
        }
    }
    return (
        <section id="register-page" className="content auth">
            {/* Register Page ( Only for Guest users ) */}
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="repass">Confirm Password:</label>
                    <input
                        type="password"
                        name="repass"
                        id="confirm-password"
                        value={values.repass}
                        onChange={changeHandler}
                    />
                    {errors
                        ? <h2 style={{'textAlign': 'center'}}>passwords dont match!</h2>
                        : null}
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}