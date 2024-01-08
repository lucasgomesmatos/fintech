import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label: string;
  id: string;
};

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} />
    </div>
  );
};
