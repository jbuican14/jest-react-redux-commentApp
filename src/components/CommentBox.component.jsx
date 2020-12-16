import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.comment.length > 0) {
      this.props.saveComment(this.state.comment);
      this.setState({ comment: '' });
    }
  };

  shouldNavAway() {
    if (!this.props.auth) {
      // console.log('Leave');
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    console.log('[componentDidMount]');
    this.shouldNavAway();
  }

  componentDidUpdate() {
    console.log('[componentDidUpdate]');
    this.shouldNavAway();
  }

  render() {
    return (
      <>
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
        <div className="button-fetch">
          <button
            className="button-fetch-btn"
            onClick={this.props.fetchComments}
          >
            Fetch Comments
          </button>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
