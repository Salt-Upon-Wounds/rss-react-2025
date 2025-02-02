import { ChangeEvent, Component, KeyboardEventHandler } from 'react';
import style from './styles.module.scss';

interface Props {
  rerender: (value: string) => void;
}

export class SearchPanel extends Component<Props> {
  state: {
    value: string;
    err: boolean;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      err: false,
    };
  }

  save = (value: string) => {
    localStorage.setItem('TaskSearch', value);
  };

  load = () => {
    const value = localStorage.getItem('TaskSearch');
    if (value) {
      this.setState({ value });
    }
  };

  componentDidMount() {
    this.load();
  }

  search = () => {
    const str = this.state.value;
    this.save(str);
    this.props.rerender(str);
  };

  error = () => {
    this.setState({ err: true });
  };

  change = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      this.search();
    }
  };

  render() {
    if (this.state.err) throw new Error('test error');
    return (
      <div className={style.wrapper}>
        <input
          type="text"
          className={style.searchInput}
          placeholder="type to search..."
          size={1}
          value={this.state.value}
          onChange={this.change}
          onKeyDown={this.handleKeyDown}
        />
        <button className={style.searchButton} onClick={this.search}>
          Search
        </button>
        <button className={style.errorButton} onClick={this.error}>
          Error
        </button>
      </div>
    );
  }
}
