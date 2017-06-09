class BugList extends React.Component {
  render() {
    return <div>
      <BugFilter />
      <BugTable />
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
        <BugRow id={1} status="Open" priority="High" owner="Marco" title="bug numero uno"/>
        <BugRow id={2} status="In Progress" priority="Low" owner="Anne Marie" title="number 2"/>
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
      <td>{this.props.id}</td>
      <td>{this.props.status}</td>
      <td>{this.props.priority}</td>
      <td>{this.props.owner}</td>
      <td>{this.props.title}</td>
    </tr>;
  }
}
ReactDOM.render(
<BugList/>,
document.getElementById('root')
);
