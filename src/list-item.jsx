var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      texto: this.props.item.texto,
      done: this.props.item.done
    }
  },
  componentWillMount: function () {
    this.fb = new Firebase( 'https://udemyreactapp.firebaseio.com/items/' + this.props.item.key );
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input
          type="checkbox"
          chekced={this.state.done}
          onChange={this.handleDoneChange}
          />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.texto}
        />
      <span className="input-group-btn">
        <button
          className="btn btn-default"
          onClick={this.handleDeleteButton}
          >
          Borrar
        </button>
      </span>
    </div>
  },
  handleDoneChange: function(e) {
    var update = e.target.checked;
    this.setState({done: update});
    this.fb.update({done: update});
  },
  handleDeleteButton: function(e) {
    this.fb.remove();
  }
})
