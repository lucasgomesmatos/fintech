import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { useFetch } from '../hooks/use-fetch';
import { Constants } from '../shared/constants/constants';

type SaleType = {
  id: number;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  parcelas: number | null;
  data: string;
};

type DataContextType = {
  data: SaleType[] | null;
  loading: boolean;
  error: string | null;
  initialDate: string;
  finalDate: string;
  handleInitialDate: (date: string) => void;
  handleFinalDate: (date: string) => void;
};

const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData precisa está estar entre DataContextProvider');
  }
  return context;
};

const getDate = (n: number) => {
  const date = new Date();
  date.setDate(date.getDate() - n);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  return `${year}-${month}-${day}`;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [initialDate, setInitialDate] = useState(getDate(30));
  const [finalDate, setFinalDate] = useState(getDate(0));

  const handleInitialDate = (date: string) => setInitialDate(date);
  const handleFinalDate = (date: string) => setFinalDate(date);

  const { data, loading, error } = useFetch<SaleType[]>(
    `${Constants.API_APP_URL}/?inicio=${initialDate}&final=${finalDate}`,
  );

  console.log(data);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        initialDate,
        finalDate,
        handleInitialDate,
        handleFinalDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
