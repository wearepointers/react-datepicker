import { twMerge } from 'tailwind-merge';

import { DatepickerConfig, DatepickerMonth, DatepickerValue } from '@types';
import { getNextMonthAndYear, getPreviousMonthAndYear } from '@utils';

import DatepickerCalendarDates from './DatepickerCalendarDates';
import DatepickerCalendarMonth from './DatepickerCalendarMonth';

interface Props {
  config: DatepickerConfig;
  value: DatepickerValue;
  onChange: (date: DatepickerValue) => void;
  month: DatepickerMonth;
  onChangeMonth: (month: DatepickerMonth) => void;
  className?: string;
}

export default function DatepickerCalendar({ config, value, onChange, month, onChangeMonth, className }: Props) {
  const toPreviousMonth = () => {
    if (config.dir === 'rtl') {
      onChangeMonth(getNextMonthAndYear(month));
      return;
    }
    onChangeMonth(getPreviousMonthAndYear(month));
  };

  const toNextMonth = () => {
    if (config.dir === 'rtl') {
      onChangeMonth(getPreviousMonthAndYear(month));
      return;
    }

    onChangeMonth(getNextMonthAndYear(month));
  };

  return (
    <div className={config.classNames?.calendarWrapper || 'inline-flex bg-white'}>
      <div className={config.classNames?.calendar || twMerge('px-4 py-3', className)}>
        <DatepickerCalendarMonth config={config} month={month} toNextMonth={toNextMonth} toPreviousMonth={toPreviousMonth} />
        <DatepickerCalendarDates config={config} month={month} value={value} onChange={onChange} />
      </div>
    </div>
  );
}
