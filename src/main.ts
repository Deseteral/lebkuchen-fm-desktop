import { app, BrowserWindow, globalShortcut } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';

let mainWindow: Electron.BrowserWindow | null = null;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) {
  enableLiveReload({ strategy: 'react-hmr' });
}

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    show: false,
    frame: false,
    resizable: false,
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  globalShortcut.register('Command+Control+Shift+Y', () => {
    (mainWindow as BrowserWindow).show();
  });

  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => app.quit());
