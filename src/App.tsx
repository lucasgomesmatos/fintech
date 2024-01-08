import { Header } from './components/header';
import { SideNav } from './components/side-nav';
import { DataContextProvider } from './context/data-context';
import { Summary } from './pages/summary';

export const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  );
};
