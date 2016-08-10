function CommentBox() {
  this.create = function() {
    return React.createClass({
      render: function() {
        return (
          <div className="commentBox">
            Hello, world! I am a Foobar.
          </div>
        );
      }
    });
  }
}

module.exports = CommentBox;