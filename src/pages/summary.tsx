import { SalesChart } from '../components/sales-chart';
import { useData } from '../context/data-context';

export const Summary = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== 'falha')
              .reduce((acc, cur) => acc + cur.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === 'pago')
              .reduce((acc, cur) => acc + cur.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === 'processando')
              .reduce((acc, cur) => acc + cur.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <SalesChart />
      </div>
    </section>
  );
};
