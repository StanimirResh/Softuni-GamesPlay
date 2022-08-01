import { GameItem } from "./GameItem/GameItem"

export const Catalog = (props) => {
    return (
        <section id="catalog-page">
            {/* Catalogue */}

            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}
            {props.games.map(x => <GameItem game={x}/>)}
            {/* Display paragraph: If there is no games  */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}