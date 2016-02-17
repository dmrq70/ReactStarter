var React = require('react');

module.exports = React.createClass({
  render: function () {
      return <ul>
        {this.renderList()}
      </ul>
  },
  renderList: function () {
    if ( this.props.items && Object.keys( this.props.items ).length === 0 ) {
      return <h4>Agregue tareas para empezar.</h4>
    } else {
      var children = [];

      for (var item in this.props.items ){
        children.push( <li>{this.props.items[item].texto}</li> );
      }

      return children;
    }
  }
});
