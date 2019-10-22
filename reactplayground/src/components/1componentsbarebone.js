
// state component/functional component skeleton

//state
class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return;
    }
}

class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

//functonal

function tick() {
    const element = (e);
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
  