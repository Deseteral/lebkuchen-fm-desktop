import * as React from 'react';
import css from 'classnames';

interface KeyboardKeyProps {
  name: string;
  value: string;
}

const KeyboardKey: React.SFC<KeyboardKeyProps> = ({ name, value }) => {
  const displayValue = value || 'empty';
  const className = css(
    'keyboard-list__element',
    !value && 'keyboard-list__element--empty',
  );

  return (
    <div className={className}>
      <kbd>{name.toUpperCase()}</kbd>: {displayValue}
    </div>
  );
}

export default KeyboardKey;
