import { useParams } from "react-router-dom"


export const Details = (props) => {
    const { gameId } = useParams();
    console.log(props.games);
    console.log(gameId);
    const game = props.games.find(x => x._id === gameId);
    console.log(game);

    return (
        <section id="game-details">
            {/*Details Page*/}
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img alt="img" className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    {game.comments?.length > 0
                        ? game.comments.map(x => {
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
                    <a href="/" className="button">
                        Edit
                    </a>
                    <a href="/" className="button">
                        Delete
                    </a>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        defaultValue={""}
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