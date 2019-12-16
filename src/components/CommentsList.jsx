import React, {Component} from 'react';
import {StyledCommentList} from './styles/StyledCommentList';
import CommentCard from './CommentCard';
import PostComment from './PostComment';
import * as api from "../api.js";

class CommentsList extends Component {

    state = {
        comments: []
    }

    componentDidMount = () => {
        api.getArticleComments(this.props.article_id).then(({data: {
                comments
            }}) => {
            this.setState({comments})
        });
    };
    addCommentList = (reqBody) => {
        api.postComment(this.props.article_id, reqBody).then(({data}) => {
            this.setState(currentState => {
                return {
                    comments: [
                        data.comment,
                        ...currentState.comments
                    ]
                }
            })

        })
    }
    removeFromCommentList = (comment_id) => {
        api.deleteComment(comment_id).then(this.setState(currentState => {
            return {
                comments: currentState.comments.filter(comment => {
                    return comment.comment_id !== comment_id
                })
            }
        }))

    }
    render() {
        return (
            <div>
                <h2>Comments</h2>
                <PostComment className="postCommentButton"
                    article_id={
                        this.props.article_id
                    }
                    username
                    ={this.props.username}
                    addComment={
                        this.addCommentList
                    }/>
                <StyledCommentList> {
                    this.state.comments.map(comment => {
                        return (
                            <CommentCard key ={comment.comment_id} username ={this.props.username}
                                comment={comment}
                                deleteComment={
                                    this.removeFromCommentList
                                }/>
                        )
                    })
                } </StyledCommentList>
            </div>
        );
    }
}

export default CommentsList;
