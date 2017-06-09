class BugList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bugs: [{id: 1, status: "Open", priority: "High", owner: "Marco", title: "Bug numero uno"},
                  {id: 2, status: "In Progress", priority: "Low", owner: "Anne Marie", title: "Numba 2"}]};
    this.testButtonClicked = this.testButtonClicked.bind(this);
  }

  testButtonClicked() {
    const bug = {id: 3, status: "Closed", priority: "High", owner: "Marco", title: "bug Tres"};
    this.addBug(bug);
  }

  addBug(bug) {
    const bugsModified = this.state.bugs.slice();
    bugsModified.push(bug);

    this.setState({bugs: bugsModified});
  }

  render() {
    console.log('BugList rendered');
    return <div>
      <BugFilter />
      <BugTable bugs={this.state.bugs}/>
      <BugAdd />
      <button onClick={this.testButtonClicked}>Add Bug</button>
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
  render() {
    console.log('BugAdd rendered');
    return <h1>BugAdd</h1>;
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
