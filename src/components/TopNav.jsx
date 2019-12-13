
import { Link } from "@reach/router";
import { StyledTopNav } from "./styles/StyledTopNav";
import React, { Component } from 'react';
import FocusLock from 'react-focus-lock';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


class TopNav extends Component {

  state={isClosed:true}

  toggleNav = ()=> {
    this.setState((currentState)=>{
      return {isClosed : !currentState.isClosed}
    })
  }
  
  
  render() {
    this.state.isClosed ? enableBodyScroll():disableBodyScroll();
    return (
      <div>
      <button onClick={this.toggleNav}>{this.state.isClosed ? "Open" : "Close"}</button>
      <FocusLock>
      
        
      <StyledTopNav isClosed={this.state.isClosed} role="dialog">
      <button onClick={this.toggleNav}>{this.state.isClosed ? "Open" : "Close"}</button>
      <div>
        <p>Logged in as: {this.props.username}</p>
      </div>
      <ul>
      <li>
          <Link to={"/"} onClick={this.toggleNav}>Home </Link>
        </li>
        <li>
          <Link to={"/Coding"}onClick={this.toggleNav}>Coding</Link>
        </li>
        <li>
          <Link to={"/Cooking"}onClick={this.toggleNav}>Cooking</Link>
        </li>
        <li>
          <Link to={"/Football"} onClick={this.toggleNav}>Football</Link>
        </li>
      </ul>
    </StyledTopNav>
    </FocusLock>
    </div>
    );
  }
}

export default TopNav;