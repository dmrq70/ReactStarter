var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      texto: this.props.item.texto,
      done: this.props.item.done,
      textChanged: false
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
          checked={this.state.done}
          onChange={this.handleDoneChange}
          />
      </span>
      <input type="text"
        disabled={this.state.done}
        className="form-control"
        value={this.state.texto}
        onChange={this.handleTextChange}
        />
      <span className="input-group-btn">
        {this.changesButtons()}
        <button
          className="btn btn-default"
          onClick={this.handleDeleteButton}
          >
          Borrar
        </button>
      </span>
    </div>
  },
  changesButtons: function (){
    if (!this.state.textChanged) {
      return null
    } else {
      return [
        <button
          className="btn btn-default"
          onClick={this.handleSaveClick}
          >Save</button>,
        <button
          className="btn btn-default"
          onClick={this.handleUndoClick}
          >Undo</button>
      ]
    }
  },
  handleDoneChange: function(e) {
    var update = e.target.checked;
    this.setState({done: update});
    this.fb.update({done: update});
  },
  handleDeleteButton: function(e) {
    this.fb.remove();
  },
  handleTextChange: function (e) {
    this.setState({
      texto: e.target.value,
      textChanged: true
    })
  },
  handleSaveClick: function (e) {
    this.fb.update({texto: this.state.texto});
    this.setState({textChanged:false});
  },
  handleUndoClick: function() {
    this.setState({
      texto: this.props.item.texto,
      textChanged: false
    })
  }
})
