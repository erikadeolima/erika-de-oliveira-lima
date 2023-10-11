import React from 'react';

interface buttonProps {
  name: string;
  action: () => void;
  enable?: boolean;
  className?: string;
}

export const Button = ({name, action, enable, className}: buttonProps) =>{
  return (
    <button className={className} disabled={!enable} onClick={action}>{name}</button>
  )
}