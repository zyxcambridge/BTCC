import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './test/PageHeader';


export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
        <PageHeader/>

    )
  }
}




ReactDOM.render(
  <Root />, 
  document.getElementById('root')

);
