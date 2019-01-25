import * as React from 'react';

interface ButtonProps {
  children: string;
  onClick: () => void
}

const Button: React.SFC<ButtonProps> = ({ children, onClick }) => (
  <button className="button" onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
