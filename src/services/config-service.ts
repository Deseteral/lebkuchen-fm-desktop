import ElectronStore = require('electron-store');

const DEFAULTS = {
  keymap: {
    q: 'koza',
    w: 'grill',
    e: 'puke',
    r: 'drzwi',
    t: 'turbina',
    y: 'airhorn',
    u: 'lol',
    i: 'britney',
    o: 'nie warto',
    p: 'badumtss',
    '[': 'aua',
    ']': 'nice',
    a: 'famifail',
    s: 'alert',
    d: 'sad',
    f: 'łap gołębia',
    g: 'kuba uda',
    h: 'warto',
    j: 'go deeper',
    k: 'co ty mówisz',
    l: 'dentysta',
    ';': 'zabić',
    '\'': 'brama',
    z: 'pig',
    x: 'daciuk',
    c: 'co',
    v: 'skrr',
    b: 'popsuo',
    n: 'szkoda',
    m: 'hehe',
    ',': 'maths',
    '.': 'godność',
  },
};

const config = new ElectronStore({ defaults: DEFAULTS });

function getConfig() {
  return config;
}

function setDefaultKeymap() {
  config.set('keymap', DEFAULTS.keymap);
}

export { getConfig, setDefaultKeymap };
