class BugList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bugs: [{id: 1, status: "Open", priority: "High", owner: "Marco", title: "Bug numero uno"},
                  {id: 2, status: "In Progress", priority: "Low", owner: "Anne Marie", title: "Numba 2"}]};
  }

  getBugs() {
    return this.state.bugs;
  }

  render() {
    return <div>
      <BugFilter />
      <BugTable bugs={this.getBugs()}/>
      <BugAdd />
    </div>;
  }
}
class BugFilter extends React.Component {
  render() {
    return <h1>BugFilter</h1>;
  }
}
class BugTable extends React.Component {
  render() {
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
    return <h1>BugAdd</h1>;
  }
}

class BugRow extends React.Component {
  render() {
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
