import { Home } from "../Home/Home"
import { Login } from "../Login"
import { Register } from "../Register"
import { Logout } from "../Logout"
import { Catalog } from "../Catalog/Catalog"
import { Create } from "../Create"
import { Details } from "../Details"

import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import * as gameService from '../../services/gameService'

export const Main = () => {
    const [games, setGames] = useState([]);

    const addComent = (gameId, comment) => {
        setGames(oldGames => {
            const game = oldGames.find(x => x._id === gameId)
            const comments = game.comments || [];
            comments.push(comment)

            return [
                ...oldGames.filter(x => x._id !== gameId),
                { ...game, comments }
            ]
        })
    }
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, [])

    return (
        <main id="main-content">
            <Routes>
                <Route path="/" element={<Home games={games} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/catalog" element={<Catalog games={games} />} />
                <Route path="/create" element={<Create />} />
                <Route path="/catalog/:gameId" element={<Details games={games} addComent={addComent} />} />
            </Routes>
        </main>
    )
}