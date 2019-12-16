import React from "react";
import placeholderImg from "./images/placeholder.png";
import {StyledArticleCard} from "./styles/StyledArticleCard";
import {Link} from "@reach/router";
import VoteBlock from "./VoteBlock";
import DateStrip from "./DateStrip";

function ArticleCard(props) {
    const {article} = props;
    return (
        <StyledArticleCard>
            <VoteBlock item_id={
                    article.article_id
                }
                voteOn={"articles"}
                votes={
                    article.votes
                }
                dir={"column-reverse"}/>
            <Link to={
                `/articles/${
                    article.article_id
                }`
            }>
                <div className="subArticleCard">
                    <img src={placeholderImg}
                        alt="Article Illustration"></img>
                    <h2>{
                        article.title
                    }</h2>
                    <div>
                        <p> {
                            article.comment_count
                        }
                            {" "}
                            {
                            article.comment_count !== 1 ? " comments" : " comment"
                        } </p>
                        <Link to={
                            `/users/${
                                article.author
                            }`
                        }>By {
                            article.author
                        }</Link>
                        {" "}<DateStrip created_at={
                                article.created_at
                            }
                            relative={true}/>
                    </div>
                </div>
            </Link>
        </StyledArticleCard>
    );
}

export default ArticleCard;
