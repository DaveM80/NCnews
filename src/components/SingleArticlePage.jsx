import React, {Component} from 'react';
import Axios from 'axios';
import placeholderImg from "./images/placeholder.png"
import {StyledSingleArticlePage} from "./styles/StyledSingleArticlePage"
import CommentsList from './CommentsList';
import VoteBlock from './VoteBlock';
import DateStrip from "./DateStrip";
class SingleArticlePage extends Component {

    state = {
        article: {}
    }

    componentDidMount = () => {
        return Axios.get(`https://nc-news-davem80.herokuapp.com/api/articles/${
            this.props.article_id
        }`).then(({data: {
                article
            }}) => {
            this.setState({article})
        });
    };
    
    componentDidUpdate = () => {}
    render() {
        const {article} = this.state
        return (
            <StyledSingleArticlePage>
                <h1>{
                    article.title
                }</h1>
                <h2>By {
                    article.author
                }</h2>
                <p>Posted on
                <DateStrip created_at={article.created_at} relative={false}/>
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
                <CommentsList username={this.props.username} article_id={
                    this.props.article_id
                }/>
            </StyledSingleArticlePage>
        );
    }
}

export default SingleArticlePage;
