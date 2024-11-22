import React from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

function Joke({id, vote, votes, text}){
    
    
    function incrVote(){
      vote(id, + 1)
    }

    function decrVote(){
      vote(id, + 1)
    }

    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={incrVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={decrVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  }


export default Joke;
