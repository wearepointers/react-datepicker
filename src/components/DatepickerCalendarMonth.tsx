import { DatepickerConfig, DatepickerMonth } from '@types';

interface Props {
  config: DatepickerConfig;
  month: DatepickerMonth;
  toPreviousMonth: () => void;
  toNextMonth: () => void;
}

export default function DatepickerCalendarMonth({ config, month, toPreviousMonth, toNextMonth }: Props) {
  return (
    <div className={config.classNames?.calendarHeader || 'mb-2 flex'}>
      <DatepickerCalendarMonthNavigate onClick={toPreviousMonth} config={config}>
        {config.icons?.previousMonth || (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        )}
      </DatepickerCalendarMonthNavigate>
      <div
        className={config.classNames?.calendarHeaderMonth || 'flex flex-1 items-center justify-center text-sm font-medium text-gray-900'}>
        {new Date(month.year, month.month).toLocaleDateString(config.locale, { month: 'long', year: 'numeric' })}
      </div>
      <DatepickerCalendarMonthNavigate onClick={toNextMonth} config={config}>
        {config.icons?.nextMonth || (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </DatepickerCalendarMonthNavigate>
    </div>
  );
}

function DatepickerCalendarMonthNavigate({
  children,
  onClick,
  config
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  config: DatepickerConfig;
}) {
  return (
    <button
      onClick={onClick}
      className={
        config.classNames?.calendarHeaderIconButton ||
        'flex size-8 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100'
      }>
      {children}
    </button>
  );
}
