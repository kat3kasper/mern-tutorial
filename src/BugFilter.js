var React = require('react');

export default class BugFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {status: '', priority: ''};

    this.submit = this.submit.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
  }

  handleStatus(event) {
    this.setState({status: event.target.value});
  }

  handlePriority(event) {
    this.setState({priority: event.target.value});
  }

  submit(event) {
    event.preventDefault();
    this.props.onSubmit({status: this.state.status, priority: this.state.priority});
  }

  render() {
    console.log('BugFilter rendered');
    return (
      <form onSubmit={this.submit}>
        <label>
          Status:
          <select value={this.state.status} onChange={this.handleStatus}>
            <option value="">Any</option>
            <option value="Open">Open</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </label>
        <label>
          Priority:
          <select value={this.state.priority} onChange={this.handlePriority}>
            <option value="">Any</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
