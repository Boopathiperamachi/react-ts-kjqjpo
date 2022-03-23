import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store';
import './style.css';
import { Provider } from 'react-redux';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  state: { name: string };
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }
  increment = () => {
    store.dispatch({ type: COUNTER_INCREMENT });
  };
  decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
  };
  render() {
    return (
      <Provider store={store}>
        <div>
          <Hello name={this.state.name} />
          <p>Start editing to see some magic happen :)</p>
          <button onClick={this.increment}>INC</button>
          <button onClick={this.decrement}>DEC</button>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
