import React from "react";
import {StyledCommentCard} from "./styles/StyledCommentCard";
import VoteBlock from "./VoteBlock";
import ReactHtmlParser from 'react-html-parser';
import DateStrip from "./DateStrip";
function CommentCard(props) {
    const {comment, username} = props
    return (
        <StyledCommentCard>
            <VoteBlock item_id={
                    comment.comment_id
                }
                voteOn={"comments"}
                votes={
                    comment.votes
                }
                dir={"column-reverse"}/>
            <div>
                <div className="commentHeader">
                    <DateStrip created_at={
                            comment.created_at
                        }
                        relative={true}/> {
                    username === comment.author ? <button onClick={
                            () => {
                                props.deleteComment(comment.comment_id)
                            }
                        }
                        alt="delete comment">
                        <i className="glyphicon glyphicon-trash"></i>
                    </button> : <div></div>
                }
                    <p>By {
                        comment.author
                    }</p>
                </div>
                <div className="commentBody">
                    {
                    ReactHtmlParser(comment.body)
                }</div>
            </div>
        </StyledCommentCard>
    );
}

export default CommentCard;
