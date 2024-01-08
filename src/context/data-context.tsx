import { PropsWithChildren, createContext, useContext } from 'react';
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
};

const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData precisa está estar entre DataContextProvider');
  }
  return context;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<SaleType[]>(Constants.API_APP_URL);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
