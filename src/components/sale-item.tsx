import { SaleType } from '../context/data-context';

type SaleItemProps = {
  sale: SaleType;
};

export const SaleItem = ({ sale }: SaleItemProps) => {
  return (
    <div className="sale box">
      <a href="" style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </a>
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
