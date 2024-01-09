import { DateRage } from './date-rage';
import { Months } from './months';

export const Header = () => {
  return (
    <header>
      <div className="mb">
        <DateRage />
      </div>
      <Months />
    </header>
  );
};
