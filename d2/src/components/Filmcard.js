import React from "react";
import Rating from "./Rating";
import Poster from "./Poster";

class Filmcard extends React.Component {
    render() {
        let movies = {
            title: "Pulp Fiction",
            genre: "Crime",
            released: 1994,
            awards: "1 Oscars",
            running_time: "137min.",
            logline: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            path: "https://www.imdb.com/title/tt0110912/",
            
          }
      
        return(
            <div className="filmcard">
                
                <h2>{movies.title}</h2>
                <p>Genre: {movies.genre} </p>
                <p>Released: {movies.released} </p>
                <p>Awards: {movies.awards} </p>
                <p>Running time: {movies.running_time} </p>
                <p>Logline: {movies.logline} </p>
                <a href="https://www.imdb.com/title/tt0110912/" target="_blank">You can see the details thruough this link. </a>
            
                <Rating />

                <Poster />
                
            </div>
        )
    }
}

export default Filmcard;