import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
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
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
