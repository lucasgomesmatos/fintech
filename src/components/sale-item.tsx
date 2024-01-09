import { NavLink } from 'react-router-dom';
import { SaleType } from '../context/data-context';

type SaleItemProps = {
  sale: SaleType;
};

export const SaleItem = ({ sale }: SaleItemProps) => {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};
