function executeCommand(command: string) {
  const body = {
    item: { message: { message: command } },
  };

  fetch('https://lebkuchen-fm-service-yjt4m1xsw.herokuapp.com/commands/hipchat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export { executeCommand };
