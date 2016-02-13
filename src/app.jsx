var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require( 'reactfire');
var Firebase = require( 'firebase');
var rootUrl = 'https://udemyreactapp.firebaseio.com/';

var Hello = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function () {
    this.bindAsObject( new Firebase( rootUrl + 'items/' ), 'items' );
    // en este punto this.state.items es un objeto que contiene lo que
    // el objeto 'items' tiene en la base en firebase
  },
  render: function() {
    console.log( this.state );
    return <h1 className="red">
      Hola!
    </h1>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
