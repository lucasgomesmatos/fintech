import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRage } from './date-rage';
import { Months } from './months';

export const Header = () => {
  const [title, setTitle] = useState('Resumo');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Resumo');
      document.title = 'Fintech | Resumo';
    } else if (location.pathname === '/vendas') {
      setTitle('Vendas');
      document.title = 'Fintech | Vendas';
    }
  }, [location]);

  return (
    <header>
      <div className="datarange mb">
        <DateRage />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};
