import { SaleItem } from '../components/sale-item';
import { useData } from '../context/data-context';

export const Sales = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};
