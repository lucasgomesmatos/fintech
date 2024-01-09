import { MonthBtn } from './month-btn';

export const Months = () => {
  return (
    <div className="flex">
      <MonthBtn month={-2} />
      <MonthBtn month={-1} />
      <MonthBtn month={0} />
    </div>
  );
};
