import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GameContext } from "../contexts/GameContext";
import * as gameService from "../services/gameService"

export const Edit = () => {
    const { gameId } = useParams();

    const [values, setValues] = useState({
        title: "",
        category: "",
        maxLevel: "",
        imageUrl: "",
        summary: ""
    })
    
    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setValues({ ...result })
            })
    }, [gameId])

    const { editGame } = useContext(GameContext);
    const navigate = useNavigate();
    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        gameService.edit(values)
            .then(result => {
                editGame(result);
                navigate(`/catalog/${result._id}`)
            })
    }
    return (
        <section id="edit-page" className="auth">
            {/* Edit Page ( Only for the creator )*/}
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={changeHandler} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        value={values.maxLevel}
                        onChange={changeHandler}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler} />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Edit Game"
                    />
                </div>
            </form>
        </section>)
}