import React from "react";
import {StyledCommentCard} from "./styles/StyledCommentCard";
import VoteBlock from "./VoteBlock";
import ReactHtmlParser from 'react-html-parser';
import DateStrip from "./DateStrip";
function CommentCard(props) {
    const {comment,username} = props
    return (
        <StyledCommentCard>
                <VoteBlock item_id = {comment.comment_id} voteOn={"comments"} votes={comment.votes
                } dir={"column-reverse"}/>
                <div>
            <p>{
                comment.author
            }</p>
            <div>{
                ReactHtmlParser(comment.body)
            }</div>
            <DateStrip created_at={comment.created_at} relative={true}/>
            {username === comment.author && <button onClick={(event)=>{
                props.deleteComment(comment.comment_id)
            }}>Remove</button>}
            </div>
        </StyledCommentCard>
    );
}

export default CommentCard;
