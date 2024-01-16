import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import { DatepickerConfig, DatepickerMonth, DatepickerValue } from '@types';
import { getNextMonthAndYear, getPreviousMonthAndYear } from '@utils';

import DatepickerCalendarDates from './DatepickerCalendarDates';
import DatepickerCalendarMonth from './DatepickerCalendarMonth';

const variants = cva(['px-4 py-3'], {
  variants: {
    standalone: {
      true: ['border-1 relative rounded-xl border-gray-100 px-4 py-3 shadow-sm']
    }
  },
  defaultVariants: {
    standalone: false
  }
});

interface Props extends VariantProps<typeof variants> {
  config: DatepickerConfig;
  value: DatepickerValue;
  onChange: (date: DatepickerValue) => void;
  month: DatepickerMonth;
  onChangeMonth: (month: DatepickerMonth) => void;
}

export default function DatepickerCalendar({ config, value, onChange, month, onChangeMonth, ...v }: Props) {
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
    <div className="inline-flex bg-white">
      <div className={twMerge(variants(v))}>
        <DatepickerCalendarMonth config={config} month={month} toNextMonth={toNextMonth} toPreviousMonth={toPreviousMonth} />
        <DatepickerCalendarDates config={config} month={month} value={value} onChange={onChange} />
      </div>
    </div>
  );
}
