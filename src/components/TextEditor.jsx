import { StyledTextEditor } from "./styles/StyledTextEditor";
import ReactQuill from "react-quill";
import React, { Component } from "react";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <StyledTextEditor>
        <button onClick={this.props.cancel}>Cancel</button>
        <button onClick={(event)=>{

          this.props.submit(event,this.state.text)

        }
          
          
          }>Submit</button>
        <ReactQuill value={this.state.text} onChange={this.handleChange} />
      </StyledTextEditor>
    );
  }
}

export default TextEditor;
