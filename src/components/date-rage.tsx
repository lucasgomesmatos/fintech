import { useState } from 'react';
import { Input } from './input';

export const DateRage = () => {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
      <Input
        label="Início"
        id="inicio"
        type="date"
        value={initialDate}
        onChange={({ target }) => setInitialDate(target.value)}
      />
      <Input
        label="Final"
        id="final"
        type="date"
        value={finalDate}
        onChange={({ target }) => setFinalDate(target.value)}
      />
    </form>
  );
};
