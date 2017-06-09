class BugList extends React.Component {
  render() {
    return React.createElement(
      "div",
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
      "h1",
      null,
      "BugFilter"
    );
  }
}
class BugTable extends React.Component {
  render() {
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
        React.createElement(BugRow, { id: 1, status: "Open", priority: "High", owner: "Marco", title: "bug numero uno" }),
        React.createElement(BugRow, { id: 2, status: "In Progress", priority: "Low", owner: "Anne Marie", title: "number 2" })
      )
    );
  }
}
class BugAdd extends React.Component {
  render() {
    return React.createElement(
      "h1",
      null,
      "BugAdd"
    );
  }
}

class BugRow extends React.Component {
  render() {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.id
      ),
      React.createElement(
        "td",
        null,
        this.props.status
      ),
      React.createElement(
        "td",
        null,
        this.props.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.title
      )
    );
  }
}
ReactDOM.render(React.createElement(BugList, null), document.getElementById('root'));
