// main.js
var CommentBoxMod = require("../components/CommentBox.js")
var CommentBoxInstance = new CommentBoxMod();
var CommentBox = CommentBoxInstance.create()

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);