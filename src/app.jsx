var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require( 'reactfire');
var Firebase = require( 'firebase');
var Header = require( './header' );
var List = require('./list');

var rootUrl = 'https://udemyreactapp.firebaseio.com/';

var Hello = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function () {
    return { items: {} };
  },
  componentWillMount: function () {
    this.bindAsObject( new Firebase( rootUrl + 'items/' ), 'items' );
    // en este punto this.state.items es un objeto que contiene lo que
    // el objeto 'items' tiene en la base en firebase
  },
  render: function() {
    console.log( this.state );
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items} />
        <List items={this.state.items} />
      </div>
    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
