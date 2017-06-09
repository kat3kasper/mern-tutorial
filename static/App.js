"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BugList = function (_React$Component) {
  _inherits(BugList, _React$Component);

  function BugList(props) {
    _classCallCheck(this, BugList);

    var _this = _possibleConstructorReturn(this, (BugList.__proto__ || Object.getPrototypeOf(BugList)).call(this, props));

    _this.state = { bugs: [{ id: 1, status: "Open", priority: "High", owner: "Marco", title: "Bug numero uno" }, { id: 2, status: "In Progress", priority: "Low", owner: "Anne Marie", title: "Numba 2" }] };
    _this.addBug = _this.addBug.bind(_this);
    return _this;
  }

  _createClass(BugList, [{
    key: "addBug",
    value: function addBug(bug) {
      console.log("bug: ", this.state);
      var bugsModified = this.state.bugs.slice();
      bug.id = this.state.bugs.length + 1;
      bugsModified.push(bug);

      this.setState({ bugs: bugsModified });
    }
  }, {
    key: "render",
    value: function render() {
      console.log('BugList rendered');
      return React.createElement(
        "div",
        null,
        React.createElement(BugFilter, null),
        React.createElement(BugTable, { bugs: this.state.bugs }),
        React.createElement(BugAdd, { addBug: this.addBug })
      );
    }
  }]);

  return BugList;
}(React.Component);

var BugFilter = function (_React$Component2) {
  _inherits(BugFilter, _React$Component2);

  function BugFilter() {
    _classCallCheck(this, BugFilter);

    return _possibleConstructorReturn(this, (BugFilter.__proto__ || Object.getPrototypeOf(BugFilter)).apply(this, arguments));
  }

  _createClass(BugFilter, [{
    key: "render",
    value: function render() {
      console.log('BugFilter rendered');
      return React.createElement(
        "h1",
        null,
        "BugFilter"
      );
    }
  }]);

  return BugFilter;
}(React.Component);

var BugTable = function (_React$Component3) {
  _inherits(BugTable, _React$Component3);

  function BugTable() {
    _classCallCheck(this, BugTable);

    return _possibleConstructorReturn(this, (BugTable.__proto__ || Object.getPrototypeOf(BugTable)).apply(this, arguments));
  }

  _createClass(BugTable, [{
    key: "render",
    value: function render() {
      console.log('BugTable rendered');
      var bugRows = this.props.bugs.map(function (bug) {
        return React.createElement(BugRow, { key: bug.id, bug: bug });
      });

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
  }]);

  return BugTable;
}(React.Component);

var BugAdd = function (_React$Component4) {
  _inherits(BugAdd, _React$Component4);

  function BugAdd(props) {
    _classCallCheck(this, BugAdd);

    var _this4 = _possibleConstructorReturn(this, (BugAdd.__proto__ || Object.getPrototypeOf(BugAdd)).call(this, props));

    _this4.state = {
      status: '',
      priority: '',
      owner: '',
      title: ''
    };
    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    _this4.handleInput = _this4.handleInput.bind(_this4);
    return _this4;
  }

  _createClass(BugAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.addBug({ status: this.state.status, priority: this.state.priority, owner: this.state.owner, title: this.state.title });
      this.setState({ status: '', priority: '', owner: '', title: '' });
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "render",
    value: function render() {
      console.log('BugAdd rendered');
      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement("input", {
          type: "text",
          name: "status",
          value: this.state.status,
          onChange: this.handleInput }),
        React.createElement("input", {
          type: "text",
          name: "priority",
          value: this.state.priority,
          onChange: this.handleInput }),
        React.createElement("input", {
          type: "text",
          name: "owner",
          value: this.state.owner,
          onChange: this.handleInput }),
        React.createElement("input", {
          type: "text",
          name: "title",
          value: this.state.title,
          onChange: this.handleInput }),
        React.createElement("input", { type: "submit", value: "submit" })
      );
    }
  }]);

  return BugAdd;
}(React.Component);

var BugRow = function (_React$Component5) {
  _inherits(BugRow, _React$Component5);

  function BugRow() {
    _classCallCheck(this, BugRow);

    return _possibleConstructorReturn(this, (BugRow.__proto__ || Object.getPrototypeOf(BugRow)).apply(this, arguments));
  }

  _createClass(BugRow, [{
    key: "render",
    value: function render() {
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
  }]);

  return BugRow;
}(React.Component);

ReactDOM.render(React.createElement(BugList, null), document.getElementById('root'));
