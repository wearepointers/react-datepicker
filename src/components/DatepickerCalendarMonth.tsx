import { DatepickerConfig, DatepickerMonth } from '@types';

interface Props {
  config: DatepickerConfig;
  month: DatepickerMonth;
  toPreviousMonth: () => void;
  toNextMonth: () => void;
}

export default function DatepickerCalendarMonth({ config, month, toPreviousMonth, toNextMonth }: Props) {
  return (
    <div className="mb-2 flex">
      <DatepickerCalendarMonthNavigate onClick={toPreviousMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </DatepickerCalendarMonthNavigate>
      <div className="flex flex-1 items-center justify-center">
        <span className="text-sm font-medium text-gray-900">
          {new Date(month.year, month.month).toLocaleDateString(config.locale, { month: 'long', year: 'numeric' })}
        </span>
      </div>
      <DatepickerCalendarMonthNavigate onClick={toNextMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </DatepickerCalendarMonthNavigate>
    </div>
  );
}

function DatepickerCalendarMonthNavigate({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button onClick={onClick} className="flex size-8 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
      {children}
    </button>
  );
}
