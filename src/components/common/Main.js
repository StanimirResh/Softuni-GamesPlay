import { Home } from "../Home/Home.js"
import { Login } from "../Login"
import { Register } from "../Register"
import { Catalog } from "../Catalog.js"
import {Create} from "../Create.js"

import { Routes, Route } from 'react-router-dom'

export const Main = () => {
    return (
        <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </main>
    )
}