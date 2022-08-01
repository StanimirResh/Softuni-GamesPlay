import { Game } from "./LatestGame/LatestGame";

export const Home = (props) => {

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {props.games.length > 0
                    ? props.games.map((x, i) => {
                        if (i < 3) {
                            return (<Game key={x._id} game={x} />)
                        }
                        else {
                            return "";
                        }
                    }
                    )
                    : <p className="no-articles">No games yet</p>}
            </div>
        </section>
    )
}