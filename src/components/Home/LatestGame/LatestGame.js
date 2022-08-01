import { Link } from 'react-router-dom'

export const Game = (props) => {
    return (
        <div className="game">
            <div className="image-wrap">
                <img alt={props.game.title + 'img'} src={props.game.imageUrl} />
            </div>
            <h3>{props.game.title}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to={"/games/" + props.game.title} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    )
}