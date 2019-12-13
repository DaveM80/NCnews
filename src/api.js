import Axios from "axios";


const baseURL =  "https://nc-news-davem80.herokuapp.com/api"

//MUST ADD CATCH BLOCKS <<<<<<<<<<<<<<<<<<<<<<<

export const patchVotes = (voteValue, item_id,voteOn) => {
    return Axios.patch(
      `${baseURL}/${voteOn}/${item_id}`,
      { inc_votes: voteValue }
    )
  };

  export const getArticleComments = (article_id) => {
    return Axios
    .get(`${baseURL}/articles/${article_id}/comments/`)
  }

  export const getArticles = (topic,sortCrit)=>{
    const {sort_by,order}=sortCrit
    return Axios
    .get(`${baseURL}/articles`,
    {params:
      {topic:topic,
      sort_by:sort_by,
    order:order}}
    )
  }

  export const postComment = (article_id,body)=>{
    return Axios
    .post(`${baseURL}/articles/${article_id}/comments`,body)
  }

  export const deleteComment = (comment_id)=>{
    return Axios
    .delete(`${baseURL}/comments/${comment_id}`)
  }
