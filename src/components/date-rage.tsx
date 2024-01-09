import { useData } from '../context/data-context';
import { Input } from './input';

export const DateRage = () => {
  const { initialDate, handleInitialDate, finalDate, handleFinalDate } =
    useData();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
      <Input
        label="Início"
        id="inicio"
        type="date"
        value={initialDate}
        onChange={({ target }) => handleInitialDate(target.value)}
      />
      <Input
        label="Final"
        id="final"
        type="date"
        value={finalDate}
        onChange={({ target }) => handleFinalDate(target.value)}
      />
    </form>
  );
};
