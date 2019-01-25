import * as React from 'react';
import { remote } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import * as XService from '../services/x-service';

const window = remote.getCurrentWindow();

const keymap = {
  q: 'co',
  w: 'tak2',
  e: 'zabić',
};

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
        {Object.keys(keymap).map(key => (
          <div className="keyboard-list__element">
            <kbd>{key.toUpperCase()}</kbd>: {keymap[key]}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
