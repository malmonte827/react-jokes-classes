import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

function JokeList({numJokesToGet = 5}){ 

  const [jokes, setJokes] = useState([])
  const [isLoading, setIsLoading] = useStae(true)

 /* retrieve jokes from API if theres no jokes */

useEffect(() =>{
  async function getJokes(){
    let jokeArray = [...jokes]
    let seenJokes = new Set()
    try{
    while (jokeArray.length < numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" }
      });
      let { ...joke } = res.data;

      if (!seenJokes.has(joke.id)) {
        seenJokes.add(joke.id);
        jokes.push({ ...joke, votes: 0 });
      } else {
        console.log("duplicate found!");
      }
    }
    setJokes(jokeArray)
    setIsLoading(false);
  } catch (err) {
    console.error(err);
  }
  
  }
  if(jokes.length === 0) getJokes()
},[jokes, numJokesToGet])


  /* empty joke list, set to loading state, and then call getJokes */

 function generateNewJokes() {
    setIsLoading(true)
    setJokes([])
  }

  /* change vote for this id by delta (+1 or -1) */

  function vote(id, delta) {
    setJokes(st => 
      st.map(j => j.id === id ? { ...j, votes: j.votes + delta } : j)
    )};
    
    /* render: either loading spinner or list of sorted jokes. */
    
    let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);
    
    if (isLoading) {
      return (
        <div className="loading">
          <i className="fas fa-4x fa-spinner fa-spin" />
        </div>
      )
    }

    return (
      <div className="JokeList">
        <button
          className="JokeList-getmore"
          onClick={generateNewJokes}
        >
          Get New Jokes
        </button>

        {sortedJokes.map(({joke, id, votes}) => (
          <Joke
          text={joke}
          key={id}
          id={id}
          votes={votes}
          vote={vote}
          />
        ))}
      </div>
    );
  
      }


export default JokeList;
