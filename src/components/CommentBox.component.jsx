import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //~~~~~~~ TODO
    //action creator and save the comment
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className="comment">Add A Comment </h4>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.comment}
          onChange={this.handleChange}
        ></textarea>
        <div className="btn">
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
