import React, {Component} from 'react';
import Axios from 'axios';
import placeholderImg from "./images/placeholder.png"
import {StyledSingleArticlePage, StyledUserProfile} from "./styles/StyledUserProfile"
import CommentsList from './CommentsList';
import VoteBlock from './VoteBlock';

class SingleArticlePage extends Component {

    state = {
        user: {}
    }

    componentDidMount = () => {
        return Axios.get(`https://nc-news-davem80.herokuapp.com/api/users/${
            this.props.username
        }`).then(({data: {
                user
            }}) => {
            this.setState({user})
        });
    };
    componentDidUpdate = () => {}
    render() {
        return (
            <StyledUserProfile>

                To be Continued
                {/* <h1>{
                    this.state.username
                }</h1>
                <h2> {
                    this.state.username
                }</h2>
    
                <img src={placeholderImg || this.state.user.url}
                    alt="placeholder graphic for article illustration"></img>
                <p>{
                    this.state.article.body
                }</p>
                <VoteBlock votes={
                    this.state.article.votes
                } dir={"row"}/>
                <CommentsList article_id={
                    this.props.article_id
                }/> */}
            </StyledUserProfile>
        );
    }
}

export default SingleArticlePage;
