class BugList extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(BugFilter, null),
      React.createElement(BugTable, null),
      React.createElement(BugAdd, null)
    );
  }
}
class BugFilter extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'BugFilter'
    );
  }
}
class BugTable extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'BugTable'
    );
  }
}
class BugAdd extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'BugAdd'
    );
  }
}
ReactDOM.render(React.createElement(BugList, null), document.getElementById('root'));
