import React, {Component} from "react";
import ArticleCard from "./ArticleCard";
import {StyledArticlesList} from "./styles/StyledArticlesList"
import Loading from "./Loading";
import * as api from "../api.js";
import Sorter from "./Sorter";

class ArticlesList extends Component {

    state = {
        articles: [],
        isLoading: true,
        sortCrit:{sort_by:"created_at",order:"desc"}
    }

    componentDidMount = () => {
        api.getArticles(this.props.topic,this.state.sortCrit)
        .then(({data: {
                articles
            }}) => {
            this.setState({articles, isLoading: false})
        });
    };

    componentDidUpdate = (prevProps,prevState) => {
        if (prevProps.topic !== this.props.topic ||
           prevState.sortCrit.sort_by !== this.state.sortCrit.sort_by || 
           prevState.sortCrit.order !== this.state.sortCrit.order) {
            api.getArticles(this.props.topic,this.state.sortCrit)
            .then(({data: {
                    articles
                }}) => {
                this.setState({articles, isLoading: false})
            });
        };
    }

    articleSort = (sortCrit) => {
      if(sortCrit.sort_by !== this.state.sortCrit.sort_by || 
        sortCrit.order !== this.state.sortCrit.order){
        this.setState({sortCrit:sortCrit})
      }
    }


    render() {
        return (
            <StyledArticlesList>
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
        );
    }
}

export default ArticlesList;
