import { useParams } from 'react-router-dom';
import { SaleType } from '../context/data-context';
import { useFetch } from '../hooks/use-fetch';
import { Constants } from '../shared/constants/constants';
import { Loading } from './loading';

type Sale = Omit<SaleType, 'data'>;

export const Sale = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch<Sale>(
    `${Constants.API_APP_URL}/${id}`,
  );

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!data) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{' '}
        {data.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};
