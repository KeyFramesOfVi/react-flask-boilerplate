import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App'

export default connect(
  state => (
    {
      /* Insert State Here */
    }
  ),
  dispatch => (
    {
      /* Insert State Management function names here */
    }
  ),
)(App);