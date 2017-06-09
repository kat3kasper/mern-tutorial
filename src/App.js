class BugList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bugs: [{id: 1, status: "Open", priority: "High", owner: "Marco", title: "Bug numero uno"},
                  {id: 2, status: "In Progress", priority: "Low", owner: "Anne Marie", title: "Numba 2"}]};
    this.addBug = this.addBug.bind(this);
  }

  addBug(bug) {
    console.log("bug: ", this.state);
    const bugsModified = this.state.bugs.slice();
    bug.id = this.state.bugs.length + 1;
    bugsModified.push(bug);

    this.setState({bugs: bugsModified});
  }

  render() {
    console.log('BugList rendered');
    return <div>
      <BugFilter />
      <BugTable bugs={this.state.bugs}/>
      <BugAdd addBug={this.addBug}/>
    </div>;
  }
}
class BugFilter extends React.Component {
  render() {
    console.log('BugFilter rendered');
    return <h1>BugFilter</h1>;
  }
}
class BugTable extends React.Component {
  render() {
    console.log('BugTable rendered');
    const bugRows = this.props.bugs.map((bug) => <BugRow key={bug.id} bug={bug}/>);

    return <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Owner</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {bugRows}
      </tbody>
    </table>;
  }
}
class BugAdd extends React.Component {
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

class BugRow extends React.Component {
  render() {
    console.log('BugRow rendered');
    return <tr>
      <td>{this.props.bug.id}</td>
      <td>{this.props.bug.status}</td>
      <td>{this.props.bug.priority}</td>
      <td>{this.props.bug.owner}</td>
      <td>{this.props.bug.title}</td>
    </tr>;
  }
}
ReactDOM.render(
<BugList/>,
document.getElementById('root')
);
