import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox.component';
import CommentList from 'components/CommentList.component';
import * as actions from 'actions';
import './styles.scss';

class App extends Component {
  renderButton() {
    {
      this.props.auth ? <button>Sign Out</button> : <button>Sign In</button>;
    }
  }

  renderHeader() {
    return (
      <ul className="navBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>{' '}
        </li>
        <li>
          {this.props.auth ? (
            <button onClick={() => this.props.changeAuth(false)}>
              Sign Out
            </button>
          ) : (
            <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
          )}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
