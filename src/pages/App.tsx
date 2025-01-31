import { Component } from 'react';
import style from './App.module.css';
import { ErrorBoundary } from '../components/error-boundary/ErrorBoundary';
import { SearchPanel } from '../components/top/SearchPanel';
import { ResultList } from '../components/bottom/ResultList';

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
        <SearchPanel rerender={this.rerender}></SearchPanel>
        <ResultList value={this.state.value}></ResultList>
      </ErrorBoundary>
    );
  }
}

export default App;
