import {StyledErrorPage} from "./styles/StyledErrorPage"
import React, {Component} from 'react';

class ErrorPage extends Component {
    state = {
        status: 404,
        msg: "Not Found"
    }

    errImg = {
        404: {
            src: "http://i.imgur.com/qhMbkGi.jpg",
            alt: "confused Travolta cutout meme"
        }
    }

    componentDidMount = () => {
        if (this.props.errorMessage) {
            const {status, msg} = this.props.errorMessage
            this.setState({status, msg})
        }

    }
    render() {
        return (
            <StyledErrorPage>
                <h1>{
                    this.state.status + " " + this.state.msg
                }</h1>
                <img src={
                        this.errImg[this.state.status].src
                    }
                    alt={
                        this.errImg[this.state.status].alt
                }></img>
            </StyledErrorPage>
        );
    }
}

export default ErrorPage;
