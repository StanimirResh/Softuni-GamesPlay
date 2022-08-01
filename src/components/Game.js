export const Game = (props) => {
    return (
        <div className="game">
            <div className="image-wrap">
                <img alt="img" src={props.game.imageUrl} />
            </div>
            <h3>{props.game.name}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <a href="/" className="btn details-btn">
                    Details
                </a>
            </div>
        </div>
    )
}