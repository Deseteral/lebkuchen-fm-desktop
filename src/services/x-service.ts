import * as CommandService from './command-service';

function playX(xName: string) {
  CommandService.executeCommand(`/fm x ${xName}`);
}

export { playX };
