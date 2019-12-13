import React, { Component } from 'react';
import { StyledSorter } from './styles/StyledSorter';

class Sorter extends Component {

state={sort_by:"created_at",order:"desc"}


sortUpdate=(event)=>{
    if(event.target.value !== this.state.sort_by){
        this.setState({sort_by: event.target.value})
    }
}
orderUpdate=(event)=>{
    if(event.target.value !== this.state.order){
        this.setState({order: event.target.value})
    }
}
handleSubmit=(event)=>{
    event.preventDefault()
    this.props.articleSort(this.state)
}

    render() {
        return (
            <StyledSorter>
                <select onChange={this.sortUpdate}>
                    <option value="created_at">Date posted</option>
                    <option value="comment_count">Comment count</option>
                    <option value="votes">Vote count</option>
                </select>
                <div className="orderDirRadio" onChange={this.orderUpdate}>
               <label>Ascending <input type="radio" name="orderDir" className="radioUp" value="asc" checked={this.state.order === "asc"}></input></label>
                <label>Descending <input type="radio" name="orderDir" className="radioDown" value="desc" checked={this.state.order === "desc"} ></input></label></div>
                <button type="submit" onClick={this.handleSubmit}>Sort</button>
            </StyledSorter>
        );
    }
}

export default Sorter;