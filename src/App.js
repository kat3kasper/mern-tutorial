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
    return <h1>BugTable</h1>;
  }
}
class BugAdd extends React.Component {
  render() {
    return <h1>BugAdd</h1>;
  }
}
ReactDOM.render(
<BugList/>,
document.getElementById('root')
);
