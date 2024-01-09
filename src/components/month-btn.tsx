import { CSSProperties } from 'react';
import { useData } from '../context/data-context';

type MonthBtnProps = {
  month: number;
};

export const MonthBtn = ({ month }: MonthBtnProps) => {
  const { handleInitialDate, handleFinalDate } = useData();

  const nameMonth = (month: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + month);
    // return date.toLocaleString('pt-BR', { month: 'long' });
    return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
  };

  const getDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${year}-${month}-${day}`;
  };

  const setMonth = (month: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + month);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    handleInitialDate(getDate(firstDay));
    handleFinalDate(getDate(lastDay));
  };

  const style: CSSProperties = {
    padding: 'var(--gap) var(--gap-s)',
    background: 'var(--color-3)',
    border: 'none',
    borderRadius: 'var(--gap)',
    color: 'var(--color-2)',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 'var(--gap)',
  };

  return (
    <button onClick={() => setMonth(month)} style={style}>
      {nameMonth(month)}
    </button>
  );
};
