import { CSSProperties } from 'react';

export const Loading = () => {
  const style: CSSProperties = {
    border: 'var(--gap-s) solid var(--color-2)',
    width: 'var(--gap)',
    height: 'var(--gap)',
    borderRadius: '50%',
    borderRightColor: 'var(--color-4)',
    animation: 'loading 1s linear infinite',
  };

  return (
    <div style={style}>
      <style>{`
      @keyframes loading {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
    </div>
  );
};
