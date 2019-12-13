import React, { Component } from "react";
import { StyledPostComment } from "./styles/StyledPostComment";
import TextEditor from "./TextEditor";
import {
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

class PostComment extends Component {
  state = {
    isClosed: true
  };

  openPost = () => {
    this.setState({ isClosed: false });
  };
  cancelPost = event => {
    this.setState({ isClosed: true });
    event.preventDefault();
  };

  handleSubmitPost = (event, body) => {
    event.preventDefault();
    const { username } = this.props;
    const reqBody = { username, body };
    this.setState({ isClosed: true });
    this.props.addComment(reqBody)
  
  };

  render() {
    this.state.isClosed ? enableBodyScroll() : disableBodyScroll();
    return (
      <div>
        <button onClick={this.openPost}>Post a comment</button>
        <StyledPostComment isClosed={this.state.isClosed}>
          <form>
            <TextEditor
              cancel={this.cancelPost}
              submit={this.handleSubmitPost}
            />
          </form>
        </StyledPostComment>
      </div>
    );
  }
}

export default PostComment;
