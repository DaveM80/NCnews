import {Link} from "@reach/router";
import {StyledTopNav} from "./styles/StyledTopNav";
import React, {Component} from 'react';
import * as api from "../api.js";


class TopNav extends Component {

    state = {
        topics: []
    }

    componentDidMount = () => {
        api.getTopics().then(({data: {
                topics
            }}) => {
            this.setState({topics})
        });
    };

    render() {
        return (
            <StyledTopNav>
                <Link to={"/"}
                    href="#Home">Home</Link>
                {
                this.state.topics.map(topic => {
                    const topicName = topic.slug[0].toUpperCase() + topic.slug.slice(1)
                    return (
                        <Link to={
                            `/${topicName}`
                        }>
                            {topicName}</Link>
                    )
                })
            } </StyledTopNav>
        );
    }
}

export default TopNav;
