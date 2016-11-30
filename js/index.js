require('babel-polyfill');//this line was here when i created index.js, there was no existing file previously

// js/components/index.js
var React = require('react');
var ReactDOM = require('react-dom');

var PersonList = require('./components/person-list');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<PersonList />, document.getElementById('app'));
});