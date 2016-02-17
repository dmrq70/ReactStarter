var React = require( 'react' );

module.exports = React.createClass({
  getInitialState: function() {
    return {
      texto: ''
    }
  },
  render: function () {
    return <div className="input-group">
      <input
        value={this.state.texto}
        onChange={this.handleInputChange}
        type="text" className="form-control" />
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default" type="button">
          Agregar
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    console.log( "Fui presionado para decir esto!:", this.state.texto );
    // vamos a firebase con lo que tenemos
    this.props.itemsStore.push({
      texto: this.state.texto,
      done: false
    });

    this.setState( {texto:''});
  },
  handleInputChange: function (event) {
    // llamada cada vez que algo cambia en el input box
    // event.target == es el nodo dentro del DOM que recibio el evento
    this.setState( { texto: event.target.value } );
    // parace magia que no tenga que hacer el append de lo que llego,
    // el tema es que ya setee el valor en la definicion del 'input'
  }
});
