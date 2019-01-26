import * as React from 'react';
import css from 'classnames';
import EditableLabel from 'react-editable-label';

interface KeyboardKeyProps {
  name: string;
  value: string;
  onSave: (value: string) => void;
}

const KeyboardKey: React.SFC<KeyboardKeyProps> = ({ name, value, onSave }) => {
  const displayValue = value || 'empty';
  const className = css(
    'keyboard-list__element',
    !value && 'keyboard-list__element--empty',
  );

  return (
    <div className={className}>
      <kbd>{name.toUpperCase()}</kbd>
      <EditableLabel
        initialValue={displayValue}
        save={onSave}
        labelClass="editable-label__label"
        inputClass="editable-label__input"
      />
    </div>
  );
};

export default KeyboardKey;
