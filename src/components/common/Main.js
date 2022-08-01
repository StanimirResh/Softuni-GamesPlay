import { Home } from "../Home/Home.js"
import { Login } from "../Login"
import { Register } from "../Register"
import { Catalog } from "../Catalog/Catalog.js"
import { Create } from "../Create.js"

import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import * as gameService from '../../services/gameService'

export const Main = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, [])

    return (
        <main id="main-content">
            <Routes>
                <Route path="/" element={<Home games={games}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/catalog" element={<Catalog games={games} />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </main>
    )
}