import ElectronStore = require('electron-store');

const DEFAULTS = {
  keymap: {
    q: 'co',
    w: 'tak2',
    e: 'zabić',
  },
};

const config = new ElectronStore({ defaults: DEFAULTS });

function getConfig() {
  return config;
}

export { getConfig };
