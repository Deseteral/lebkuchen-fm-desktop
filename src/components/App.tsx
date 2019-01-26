import * as React from 'react';
import { remote, ipcRenderer } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import * as ConfigService from '../services/config-service';
import * as XService from '../services/x-service';
import KeyboardKey from './KeyboardKey';
import Button from './Button';

const KEYS = 'qwertyuiop[]asdfghjkl;\'\\zxcvbnm,.'.split('');
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
      if (e.target !== document.body) return;
      if (e.key === 'Escape') window.hide();

      const xName = keymap[e.key];
      XService.playX(xName);
      ipcRenderer.send('app-blur');
    });

    ConfigService
      .getConfig()
      .onDidChange('keymap', newKeymap => this.setState({ keymap: newKeymap }));
  }

  setNewValueForKey(value: string, key: string) {
    const { keymap } = this.state;
    keymap[key] = value;
    ConfigService.getConfig().set('keymap', keymap);
  }

  render() {
    const { keymap } = this.state;

    return (
      <div className="app-container">
        <div className="keyboard-list__container">
          {KEYS.map(key => (
            <KeyboardKey
              name={key}
              value={keymap[key]}
              onSave={value => this.setNewValueForKey(value, key)}
              key={key}
            />
          ))}
        </div>
        <div className="keyboard-list__bottom-container">
          <Button onClick={() => ConfigService.clearKeymap()}>
            clear
          </Button>
          <Button onClick={() => ConfigService.setDefaultKeymap()}>
            set defaults
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
