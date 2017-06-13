var React = require('react');

export default class BugAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      priority: '',
      owner: '',
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addBug({status: this.state.status, priority: this.state.priority, owner: this.state.owner, title: this.state.title});
    this.setState({status: '', priority: '', owner: '', title: ''});
  }
  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }
  render() {
    console.log('BugAdd rendered');
    return <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="status"
        value={this.state.status}
        onChange={this.handleInput}/>
      <input
        type="text"
        name="priority"
        value={this.state.priority}
        onChange={this.handleInput}/>
      <input
        type="text"
        name="owner"
        value={this.state.owner}
        onChange={this.handleInput}/>
      <input
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.handleInput}/>
      <input type="submit" value="submit"/>
    </form>;
  }
}
