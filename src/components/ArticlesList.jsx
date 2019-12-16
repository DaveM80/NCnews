import React, {Component} from "react";
import ArticleCard from "./ArticleCard";
import {StyledArticlesList} from "./styles/StyledArticlesList"
import Loading from "./Loading";
import * as api from "../api.js";
import Sorter from "./Sorter";
import ErrorPage from "./ErrorPage";

class ArticlesList extends Component {

    state = {
        articles: [],
        isLoading: true,
        sortCrit: {
            sort_by: "created_at",
            order: "desc",
            error: null
        }
    }

    componentDidMount = () => {
        api.getArticles(this.props.topic, this.state.sortCrit).then(({data: {
                articles
            }}) => {
            this.setState({articles, isLoading: false, error: null})
        }).catch(err => {
            this.setState({error: err.response.data, isLoading: false})
        });
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.topic !== this.props.topic || prevState.sortCrit.sort_by !== this.state.sortCrit.sort_by || prevState.sortCrit.order !== this.state.sortCrit.order) {
            api.getArticles(this.props.topic, this.state.sortCrit).then(({data: {
                    articles
                }}) => {
                this.setState({articles, isLoading: false, error: null})
            })
        };
    }

    articleSort = (sortCrit) => {
        if (sortCrit.sort_by !== this.state.sortCrit.sort_by || sortCrit.order !== this.state.sortCrit.order) {
            this.setState({sortCrit: sortCrit})
        }
    }


    render() {
        return (
            <div> {
                this.state.error ? <ErrorPage errorMessage={
                    this.state.error
                }/> : <StyledArticlesList>
                    <Sorter articleSort={
                        this.articleSort
                    }/> {
                    this.state.isLoading && <Loading/>
                }
                    {
                    this.state.articles.map(article => {
                        return (
                            <ArticleCard key ={article.article_id}
                                article={article}
                                username={
                                    this.props.username
                                }/>
                        )
                    })
                } </StyledArticlesList>
            } </div>
        );
    }
}

export default ArticlesList;
