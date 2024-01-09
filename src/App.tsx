import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Sale } from './components/sale';
import { SideNav } from './components/side-nav';
import { DataContextProvider } from './context/data-context';
import { Sales } from './pages/sales';
import { Summary } from './pages/summary';

export const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};
