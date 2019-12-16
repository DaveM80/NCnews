import {StyledTextEditor} from "./styles/StyledTextEditor";
import ReactQuill from "react-quill";
import React, {Component} from "react";

class TextEditor extends Component {

    state = {
        text: ""
    };

    handleChange = this.handleChange.bind(this);


    handleChange(value) {

        this.setState({text: value});
    }
    handleSubmit(event) {
        this.props.submit(event, this.state.text)
    }

    render() {
        return (
            <StyledTextEditor>
                <div className="formActions">
                    <button onClick={
                        () => {
                            this.props.cancel()
                            this.handleChange("")
                        }
                    }>Cancel</button>
                    {
                    this.props.err && <p>{
                        this.props.err
                    }</p>
                }
                    <button className="submitButton"
                        onClick={
                            this.handleSubmit
                        }
                        disabled={
                            this.state.text.replace(/<[^>]*>/g, '').length < 2 || this.state.text.replace(/<[^>]*>/g, '') === "  "
                    }>Submit</button>
                </div>
                <ReactQuill value={
                        this.state.text
                    }
                    onChange={
                        this.handleChange
                    }/>
            </StyledTextEditor>
        );
    }
}

export default TextEditor;
