import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { SaleType, useData } from '../context/data-context';

type DataChartType = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

export const SalesChart = () => {
  const { data: sales } = useData();

  const tranformedData = (sales: SaleType[]): DataChartType[] => {
    const days = sales.reduce((acc: { [key: string]: DataChartType }, cur) => {
      const day = cur.data.split(' ')[0];

      if (!acc[day]) {
        acc[day] = {
          data: day,
          pago: 0,
          processando: 0,
          falha: 0,
        };
      }
      acc[day][cur.status] += cur.preco;
      return acc;
    }, {});

    return Object.values(days).map((day) => ({
      ...day,
      data: day.data.split('-').reverse().join('/').substring(0, 5),
    }));
  };

  if (!sales) return null;

  return (
    <div>
      <ResponsiveContainer height={400} width="99%">
        <LineChart data={tranformedData(sales)}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#a36af9"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#fbcb21"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
