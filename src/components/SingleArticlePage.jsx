import React, {Component} from 'react';
import placeholderImg from "./images/placeholder.png"
import {StyledSingleArticlePage} from "./styles/StyledSingleArticlePage"
import CommentsList from './CommentsList';
import VoteBlock from './VoteBlock';
import DateStrip from "./DateStrip";
import ErrorPage from "./ErrorPage";
import * as api from "../api.js";

class SingleArticlePage extends Component {

    state = {
        article: {},
        error: null
    }

    componentDidMount = () => {
        api.getArticleByID(this.props.article_id).then(({data: {
                article
            }}) => {
            this.setState({article, error: null})
        }).catch(err => {
            this.setState({error: err.response.data, isLoading: false})
        });
    };

    render() {
        const {article} = this.state
        return (
            <div> {
                this.state.error ? <ErrorPage errorMessage={
                    this.state.error
                }/> : <StyledSingleArticlePage>
                    <h1>{
                        article.title
                    }</h1>
                    <h2>By {
                        article.author
                    }</h2>
                    <p>Posted on
                        <DateStrip created_at={
                                article.created_at
                            }
                            relative={false}/>
                    </p>
                    <img src={placeholderImg}
                        alt="placeholder graphic for article illustration"></img>
                    <p>{
                        article.body
                    }</p>
                    <VoteBlock votes={
                            article.votes
                        }
                        item_id={
                            article.article_id
                        }
                        voteOn={"articles"}
                        dir={"row"}/>
                    <CommentsList username={
                            this.props.username
                        }
                        article_id={
                            this.props.article_id
                        }/>
                </StyledSingleArticlePage>
            } </div>
        );
    }
}

export default SingleArticlePage;
