import React, {Component} from "react";
import {StyledPostComment} from "./styles/StyledPostComment";
import TextEditor from "./TextEditor";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

class PostComment extends Component {
    state = {
        isClosed: true,
        err: null
    };

    togglePostModal = event => {
        event.preventDefault();
        this.setState(currentState => {
            return {
                isClosed: !currentState.isClosed
            }
        });
    }
    handleSubmitPost = (event, body) => {
        event.preventDefault();
        const {username} = this.props;
        const reqBody = {
            username,
            body
        };
        this.setState({isClosed: true});
        this.props.addComment(reqBody)
    };

    render() {
        this.state.isClosed ? enableBodyScroll() : disableBodyScroll();
        return (
            <div>
                <button className="postCommentButton"
                    onClick={
                        this.togglePostModal
                }>Post a comment</button>
                <StyledPostComment isClosed={
                    this.state.isClosed
                }>
                    <form>
                        <TextEditor cancel={
                                this.togglePostModal
                            }
                            submit={
                                this.handleSubmitPost
                            }/>
                    </form>
                </StyledPostComment>
            </div>
        );
    }
}

export default PostComment;
