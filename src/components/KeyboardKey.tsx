import * as React from 'react';

interface KeyboardKeyProps {
  name: string;
  value: string;
}

const KeyboardKey: React.SFC<KeyboardKeyProps> = ({ name, value }) => {
  return (
    <div className="keyboard-list__element">
      <kbd>{name.toUpperCase()}</kbd>: {value}
    </div>
  );
}

export default KeyboardKey;
