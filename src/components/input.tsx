import { CSSProperties, ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label: string;
  id: string;
};

const generalStyle: CSSProperties = {
  fontSize: '1rem',
  fontWeight: 600,
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
};

const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  ...generalStyle,
};

const inputStyle: CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle,
};

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input style={inputStyle} type="text" id={id} name={id} {...props} />
    </div>
  );
};
