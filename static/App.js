class BugList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bugs: [{ id: 1, status: "Open", priority: "High", owner: "Marco", title: "Bug numero uno" }, { id: 2, status: "In Progress", priority: "Low", owner: "Anne Marie", title: "Numba 2" }] };
    this.testButtonClicked = this.testButtonClicked.bind(this);
  }

  testButtonClicked() {
    const bug = { id: 3, status: "Closed", priority: "High", owner: "Marco", title: "bug Tres" };
    this.addBug(bug);
  }

  addBug(bug) {
    const bugsModified = this.state.bugs.slice();
    bugsModified.push(bug);

    this.setState({ bugs: bugsModified });
  }

  render() {
    console.log('BugList rendered');
    return React.createElement(
      "div",
      null,
      React.createElement(BugFilter, null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement(BugAdd, null),
      React.createElement(
        "button",
        { onClick: this.testButtonClicked },
        "Add Bug"
      )
    );
  }
}
class BugFilter extends React.Component {
  render() {
    console.log('BugFilter rendered');
    return React.createElement(
      "h1",
      null,
      "BugFilter"
    );
  }
}
class BugTable extends React.Component {
  render() {
    console.log('BugTable rendered');
    const bugRows = this.props.bugs.map(bug => React.createElement(BugRow, { key: bug.id, bug: bug }));

    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "ID"
          ),
          React.createElement(
            "th",
            null,
            "Status"
          ),
          React.createElement(
            "th",
            null,
            "Priority"
          ),
          React.createElement(
            "th",
            null,
            "Owner"
          ),
          React.createElement(
            "th",
            null,
            "Title"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        bugRows
      )
    );
  }
}
class BugAdd extends React.Component {
  render() {
    console.log('BugAdd rendered');
    return React.createElement(
      "h1",
      null,
      "BugAdd"
    );
  }
}

class BugRow extends React.Component {
  render() {
    console.log('BugRow rendered');
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.bug.id
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.status
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.title
      )
    );
  }
}
ReactDOM.render(React.createElement(BugList, null), document.getElementById('root'));
