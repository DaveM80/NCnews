import { StyledVoteBlock } from "./styles/StyledVoteBlock";
import React, { Component } from "react";
import * as api from "../api.js";

class VoteBlock extends Component {
  state = {
    voteDiff: 0,
    error: null
  };

  handleVote = voteValue => {
    this.voteUpdater(voteValue)
    api.patchVotes(voteValue, this.props.item_id,this.props.voteOn)  
    
  };
  
  voteUpdater = voteValue => {
    this.setState(currentState => {
      return {voteDiff: currentState.voteDiff + voteValue};
     });
  };

  render() {
    return (
      <StyledVoteBlock dir={this.props.dir} votes={this.props.votes + this.state.voteDiff}>
        <button onClick={()=>{
           this.handleVote(-1)
        }}
        >
          -
        </button>
        <p>{this.props.votes + this.state.voteDiff}</p>
        <div>
          <button onClick={()=>{
           this.handleVote(1)
        }}>
            +
          </button>
        </div>
      </StyledVoteBlock>
    );
  }
}

export default VoteBlock;
