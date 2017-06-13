var React = require('react');

import BugAdd from './BugAdd.js';
import BugFilter from './BugFilter.js';

class BugTable extends React.Component {
  render() {
    console.log('BugTable rendered');
    const bugRows = this.props.bugs.map((bug) => <BugRow key={bug._id} bug={bug}/>);

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


class BugRow extends React.Component {
  render() {
    console.log('BugRow rendered');
    return <tr>
      <td>{this.props.bug._id}</td>
      <td>{this.props.bug.status}</td>
      <td>{this.props.bug.priority}</td>
      <td>{this.props.bug.owner}</td>
      <td>{this.props.bug.title}</td>
    </tr>;
  }
}

export default class BugList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bugs: []};
    this.addBug = this.addBug.bind(this);
  }

  componentDidMount() {
    fetch('/api/bugs').then(response => response.json()).then(bugs => {
      this.setState({ bugs });
    });
  }

  addBug(bug) {
    const requestInit = { method: 'POST',
                          headers: {'Content-Type': 'application/json'},
                          body: JSON.stringify(bug)
                        }
    fetch('/api/bugs', requestInit).then((response) => response.json()).then(bug => {
      const bugsModified = this.state.bugs.slice();
      bugsModified.push(bug);

      this.setState({bugs: bugsModified});
    })
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
