import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GameContext } from "../contexts/GameContext";
import * as gameService from '../services/gameService'

export const Delete = () => {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const { deleteGame } = useContext(GameContext)

    gameService.del(gameId)
        .then(result => {
            navigate('/catalog');
            deleteGame();
        })

}