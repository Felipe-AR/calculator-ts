import React from 'react';
import { Key } from './style';

interface Props {
  label: number | string; 
  onClick: Function;
  math?: boolean;
  height?: number;
  width?: number;
}

const Button = (props: Props) => {
  return (
    <Key 
      width={props.width} 
      height={props.height} 
      math={props?.math} 
      onClick={e => props.onClick(props.label)}>{props.label}
    </Key>
  );
};

export default Button;