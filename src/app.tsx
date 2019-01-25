import * as React from 'react';
import { remote } from 'electron';

function playSound(soundName: string) {
  const body = {
    item: { message: { message: `/fm x ${soundName}` } },
  };

  fetch('https://lebkuchen-fm-service-yjt4m1xsw.herokuapp.com/commands/hipchat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

const keymap = {
  q: 'co',
  w: 'tak2',
  e: 'zabić',
};

export class App extends React.Component<undefined, undefined> {
  componentDidMount() {
    document.addEventListener('keypress', e => {
      playSound(keymap[e.key]);
      const window = remote.getCurrentWindow();
      window.hide();
      window.blur();
    });
  }

  render() {
    return (
      <div>
        {Object.keys(keymap).map(key => (
          <div><kbd>{key.toUpperCase()}</kbd>: {keymap[key]}</div>
        ))}
      </div>
    );
  }
}
