import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import * as gameService from '../services/gameService'

export const Details = (props) => {
    const { gameId } = useParams();
    const [currGame, setCurrGame] = useState({});

    const [comment, setComment] = useState({
        comment: "",
        username: ""
    })

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setCurrGame(result);
            });
    }, [gameId])
    const addCommentHandler = (e) => {
        e.preventDefault();

        props.addComent(gameId, `${comment.username}: ${comment.comment}`)
    }

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="game-details">
            {/*Details Page*/}
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img alt="img" className="game-img" src={currGame.imageUrl} />
                    <h1>{currGame.title}</h1>
                    <span className="levels">MaxLevel: {currGame.maxLevel}</span>
                    <p className="type">{currGame.category}</p>
                </div>
                <p className="text">
                    {currGame.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    {currGame.comments?.length > 0
                        ? currGame.comments.map(x => {
                            return (
                                <li className="comment">
                                    <p>{x}</p>
                                </li>
                            )
                        })
                        : <p className="no-comment">No comments.</p>}
                    <ul>

                    </ul>

                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={"/catalog/edit/" + gameId} className="button">Edit</Link>
                    <Link to={"/catalog/delete/" + gameId} className="button">Delete</Link>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder="John Doe"
                        value={comment.username}
                        onChange={onChange}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={comment.comment}
                        onChange={onChange}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Add Comment"
                    />
                </form>
            </article>
        </section>
    )
}