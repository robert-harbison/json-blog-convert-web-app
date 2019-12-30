import React, { Component, useEffect } from "react";
import RichTextEditor from "react-rte";
import styled from "styled-components";
import PropTypes from "prop-types";
import FieldContainer from "./FieldContainer";

export default class ResultField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultValue: RichTextEditor.createValueFromString(
        this.getDataAsJSON(),
        "html"
      )
    };

    this.onGetResultClick = this.onGetResultClick.bind(this);
  }

  onGetResultClick() {
    this.setState({
      resultValue: RichTextEditor.createValueFromString(
        this.getDataAsJSON(),
        "html"
      )
    });
  }

  getDataAsJSON() {
    let json = "{\n";

    // TODO: ADD COMMAS BETWEEN ENTRIES IF THEY ARE NOT THE LAST ONE.
    // Get thing to format the json in the field.

    if (this.props.includepostid)
      json += '\tid: "' + this.props.postidvalue + '"\n';

    if (this.props.includeposttitle)
      json += '\ttitle: "' + this.props.posttitlevalue + '"\n';

    if (this.props.includepostauthor)
      json += '\tauthor: "' + this.props.postauthorvalue + '"\n';

    if (this.props.includepostdatewritten)
      json += '\tdate: "' + this.props.postdatewrittenvalue + '"\n';

    json += '\tcontent: "' + this.props.postcontentvalue + '"\n';

    json += "}";
    return json;
  }

  onChange = value => {
    this.setState({ resultValue: value });
  };

  render() {
    return (
      // TODO: Make tab size smaller so it looks better.
      // TODO: Mutliline content text doesnt get tabbed in.
      <FieldContainer title="Result:">
        {/* Make this happen automaticlly when unfocusing fields. */}
        <button onClick={this.onGetResultClick}>Generate Entry</button>
        {/* <StyledEditor readOnly={true} value={this.state.resultValue} /> */}
        <StyledEditor
          value={this.state.resultValue.toString("html")} // Change this to markdown or html for type
        ></StyledEditor>
      </FieldContainer>
    );
  }
}

const StyledEditor = styled.textarea`
  width: 650px;
  min-height: 200px;
  resize: none;
`;

ResultField.propTypes = {
  postidvalue: PropTypes.string.isRequired,
  includepostid: PropTypes.bool.isRequired,
  posttitlevalue: PropTypes.string.isRequired,
  includeposttitle: PropTypes.bool.isRequired,
  postauthorvalue: PropTypes.string.isRequired,
  includepostauthor: PropTypes.bool.isRequired,
  postdatewrittenvalue: PropTypes.string.isRequired,
  includepostdatewritten: PropTypes.bool.isRequired,
  postcontentvalue: PropTypes.string.isRequired
};
