var React = require('react');

export default class BugFilter extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.onSubmit({priority: 'High'});
  }
  render() {
    console.log('BugFilter rendered');
    return <button onClick={this.submit}>Filter</button>;
  }
}
