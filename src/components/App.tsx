import * as React from 'react';
import { remote } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import * as XService from '../services/x-service';
import KeyboardKey from './KeyboardKey';

const window = remote.getCurrentWindow();

const keymap = {
  q: 'co',
  w: 'tak2',
  e: 'zabić',
};

const KEYS = `qwertyuiop[]asdfghjkl;'\\zxcvbnm,./`.split('');

class App extends React.Component<undefined, undefined> {
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') window.hide();

      const xName = keymap[e.key];
      XService.playX(xName);
      window.hide();
    });
  }

  render() {
    return (
      <div>
        {KEYS.map(key => (
          <KeyboardKey name={key} value={keymap[key]} key={key} />
        ))}
      </div>
    );
  }
}

export default App;
