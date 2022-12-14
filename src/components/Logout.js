import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import * as authService from '../services/authService'

import { AuthContext } from "../contexts/AuthContext"
export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/')
            })
            .catch(() => {
                navigate('/')
            })
    }, [navigate, user, userLogout])

    return null;
}
