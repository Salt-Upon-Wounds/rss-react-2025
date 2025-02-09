import { Component } from 'react';
import style from './App.module.css';
import { ErrorBoundary } from '../components/error-boundary/ErrorBoundary';

class App extends Component<object, { value: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      value: '',
    };
  }

  rerender = (value: string) => {
    this.setState({ value });
  };

  render() {
    return (
      <ErrorBoundary>
        <h1 className={style.header}>Hello Stranger!</h1>
      </ErrorBoundary>
    );
  }
}

export default App;
