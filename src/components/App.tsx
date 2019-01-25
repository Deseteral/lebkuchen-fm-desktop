import * as React from 'react';
import { remote } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import * as ConfigService from '../services/config-service';
import * as XService from '../services/x-service';
import KeyboardKey from './KeyboardKey';

const KEYS = `qwertyuiop[]asdfghjkl;'\\zxcvbnm,./`.split('');
const window = remote.getCurrentWindow();

interface AppState {
  keymap: { [key: string] : string };
}

class App extends React.Component<undefined, AppState> {
  constructor(props: undefined) {
    super(props);
    this.state = {
      keymap: ConfigService.getConfig().get('keymap'),
    };
  }

  componentDidMount() {
    const { keymap } = this.state;

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') window.hide();

      const xName = keymap[e.key];
      XService.playX(xName);
      window.hide();
    });

    ConfigService.getConfig()
      .onDidChange('keymap', (newKeymap) => this.setState({ keymap: newKeymap }));
  }

  render() {
    const { keymap } = this.state;

    return (
      <div className="keyboard-list__container">
        {KEYS.map(key => (
          <KeyboardKey name={key} value={keymap[key]} key={key} />
        ))}
      </div>
    );
  }
}

export default App;
