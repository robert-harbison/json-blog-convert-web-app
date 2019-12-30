import React, { Component } from "react";
import styled from "styled-components";
import EditorField from "./components/Fields/EditorField";
import ResultField from "./components/Fields/ResultField";

import IncludeableField from "./components/Fields/IncludeableField";
import DateField from "./components/Fields/DateField";

import {
  setPostID,
  setPostTitle,
  setPostAuthor,
  setPostDate,
  setPostContent
} from "./redux/Actions";
import { useDispatch } from "react-redux";

let dispatch;

function onPostIDChange(value) {
  // this.setState({ postID: value });
  dispatch(setPostID(value));
}

function onPostTitleChange(value) {
  // this.setState({ postTitle: value });
  dispatch(setPostTitle(value));
}

function onPostAuthorChange(value) {
  // this.setState({ postAuthor: value });
  dispatch(setPostAuthor(value));
}

function onPostDateChange(value) {
  // this.setState({ postDate: value });
  dispatch(setPostDate(value));
}

function onPostContentChange(value) {
  // this.setState({ postContent: value });
  dispatch(setPostContent(value));
}

function App() {
  dispatch = useDispatch();

  return (
    <div className="App">
      <IncludeableField
        ontextchange={onPostIDChange}
        fieldname="post-id"
        placeholder="Post ID"
      ></IncludeableField>

      <IncludeableField
        ontextchange={onPostTitleChange}
        fieldname="post-title"
        placeholder="Post Title"
      ></IncludeableField>

      <IncludeableField
        ontextchange={onPostAuthorChange}
        fieldname="author"
        placeholder="Author"
      ></IncludeableField>

      <DateField
        ontextchange={onPostDateChange}
        fieldname="date-written"
        placeholder="Date Written"
      ></DateField>

      <EditorField onChange={onPostContentChange} />
      <ResultField />
    </div>
  );
}

export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postID: "",
//       includePostID: true,
//       postTitle: "",
//       includePostTitle: true,
//       postAuthor: "",
//       includePostAuthor: true,
//       postDate: "",
//       includePostDate: true,
//       postContent: ""
//     };

//     this.onPostIDChange = this.onPostIDChange.bind(this);
//     this.onPostIDIncludeChange = this.onPostIDIncludeChange.bind(this);
//     this.onPostTitleChange = this.onPostTitleChange.bind(this);
//     this.onPostTitleIncludeChange = this.onPostTitleIncludeChange.bind(this);
//     this.onPostAuthorChange = this.onPostAuthorChange.bind(this);
//     this.onPostAuthorIncludeChange = this.onPostAuthorIncludeChange.bind(this);
//     this.onPostDateChange = this.onPostDateChange.bind(this);
//     this.onPostDateIncludeChange = this.onPostDateIncludeChange.bind(this);
//     this.onPostContentChange = this.onPostContentChange.bind(this);
//   }

//   onPostIDChange(value) {
//     this.setState({ postID: value });
//   }

//   onPostIDIncludeChange(value) {
//     this.setState({ includePostID: value });
//   }

//   onPostTitleChange(value) {
//     this.setState({ postTitle: value });
//   }

//   onPostTitleIncludeChange(value) {
//     this.setState({ includePostTitle: value });
//   }

//   onPostAuthorChange(value) {
//     this.setState({ postAuthor: value });
//   }

//   onPostAuthorIncludeChange(value) {
//     this.setState({ includePostAuthor: value });
//   }

//   onPostDateChange(value) {
//     this.setState({ postDate: value });
//   }

//   onPostDateIncludeChange(value) {
//     this.setState({ includePostDate: value });
//   }

//   onPostContentChange(value) {
//     this.setState({ postContent: value });
//   }

//   render() {
//     return (
//       <div className="App">
//         <IncludeableField
//           ontextchange={this.onPostIDChange}
//           onincludechange={this.onPostIDIncludeChange}
//           fieldname="post-id"
//           placeholder="Post ID"
//         ></IncludeableField>

//         <IncludeableField
//           ontextchange={this.onPostTitleChange}
//           onincludechange={this.onPostTitleIncludeChange}
//           fieldname="post-title"
//           placeholder="Post Title"
//         ></IncludeableField>

//         <IncludeableField
//           ontextchange={this.onPostAuthorChange}
//           onincludechange={this.onPostAuthorIncludeChange}
//           fieldname="author"
//           placeholder="Author"
//         ></IncludeableField>

//         <DateField
//           ontextchange={this.onPostDateContentChange}
//           onincludechange={this.onPostDateIncludeChange}
//           fieldname="date-written"
//           placeholder="Date Written"
//         ></DateField>

//         <EditorField onChange={this.onPostContentChange} />
//         <ResultField
//           postidvalue={this.state.postID}
//           includepostid={this.state.includePostID}
//           posttitlevalue={this.state.postTitle}
//           includeposttitle={this.state.includePostTitle}
//           postauthorvalue={this.state.postAuthor}
//           includepostauthor={this.state.includePostAuthor}
//           postdatewrittenvalue={this.state.postDate}
//           includepostdatewritten={this.state.includePostDate}
//           postcontentvalue={this.state.postContent}
//         />
//       </div>
//     );
//   }
// }
