import React from 'react';

import { DatepickerConfig, DatepickerMonth, DatepickerValue, DateRange } from '@types';
import {
  dateIsEq,
  dateIsLess,
  dateIsLessOrEq,
  dateIsMore,
  dateIsMoreOrEq,
  dateIsToday,
  dateValueType,
  generate42CalendarDates
} from '@utils';

import DatepickerCalendarDatesItem from './DatepickerCalendarDatesItem';

interface Props {
  config: DatepickerConfig;
  month: DatepickerMonth;
  value: DatepickerValue;
  onChange: (date: DatepickerValue) => void;
}

export default function DatepickerCalendarDates({ config, month, value, onChange }: Props) {
  const generatedDates = React.useMemo(() => generate42CalendarDates(month, config), [month, config]);

  const weekDays = React.useMemo(() => {
    const today = new Date();
    const days: {
      short: string;
      narrow: string;
      long: string;
    }[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(today.getFullYear(), today.getMonth(), i + (config.weeksStartOnMonday ? 1 : 0));
      days.push({
        short: d.toLocaleDateString(config.locale, { weekday: 'short' }),
        narrow: d.toLocaleDateString(config.locale, { weekday: 'narrow' }),
        long: d.toLocaleDateString(config.locale, { weekday: 'long' })
      });
    }

    if (config.dir === 'rtl') {
      days.reverse();
    }
    return days;
  }, [config.locale, config.weeksStartOnMonday]);

  const isSelected = React.useCallback(
    (date: Date) => {
      if (!value) return false;
      const type = dateValueType(value, config);

      if (type === 'single') {
        return dateIsEq(date, value as Date);
      }

      if (type === 'multiple') {
        return !!(value as Date[]).find((sd) => dateIsEq(sd, date));
      }

      if (type === 'range') {
        const startDate = (value as DateRange)?.startDate;
        const endDate = (value as DateRange)?.endDate;

        if (startDate && endDate) {
          return dateIsEq(date, startDate) || dateIsEq(date, endDate);
        }

        if (startDate) {
          return dateIsEq(date, startDate);
        }

        if (endDate) {
          return dateIsEq(date, endDate);
        }
      }
      return false;
    },
    [value, config]
  );

  const onClick = React.useCallback(
    (d: Date) => {
      const type = dateValueType(value, config);
      if (type === 'single') {
        return onChange(d);
      }

      if (type === 'multiple') {
        const dates = (value as Date[]) || [];
        const f = dates.find((sd) => dateIsEq(sd, d));
        if (f) {
          return onChange(dates.filter((sd) => !dateIsEq(sd, d)));
        }

        return onChange([...dates, d]);
      }

      if (type === 'range') {
        const startDate = (value as DateRange)?.startDate;
        const endDate = (value as DateRange)?.endDate;

        if (startDate && endDate) {
          if (dateIsEq(startDate, d) || dateIsEq(endDate, d)) {
            return onChange({ startDate: null, endDate: null });
          }

          if (dateIsMore(startDate, d)) {
            return onChange({ startDate, endDate: d });
          }

          if (dateIsLess(startDate, d)) {
            return onChange({ startDate: d, endDate });
          }

          return onChange({ startDate: d, endDate: null });
        }

        if (startDate) {
          if (dateIsMore(startDate, d)) {
            return onChange({ startDate, endDate: d });
          }

          return onChange({ startDate: d, endDate: startDate });
        }

        return onChange({ startDate: d, endDate: null });
      }
    },
    [config, onChange, value]
  );

  const isInRange = React.useCallback(
    (date: Date) => {
      if (!value) return false;
      if (config.type !== 'range') return false;

      const v = value as DateRange;
      if (!v.startDate || !v.endDate) return false;

      return dateIsMoreOrEq(v.startDate, date) && dateIsLessOrEq(v.endDate, date);
    },
    [config.type, value]
  );

  const isEndRange = React.useCallback(
    (date: Date) => {
      if (!value) return false;
      if (config.type !== 'range') return false;

      const v = value as DateRange;
      if (!v.startDate || !v.endDate) return false;

      return dateIsEq(v.endDate, date);
    },
    [config.type, value]
  );

  const isSameDay = React.useCallback(
    (date: Date) => {
      if (!value) return false;
      if (config.type !== 'range') return false;

      const v = value as DateRange;
      if (!v.startDate || !v.endDate) return false;

      return dateIsEq(v.startDate, date) && dateIsEq(v.endDate, date);
    },
    [config.type, value]
  );

  return (
    <table className="border-collapse" role="grid">
      <thead>
        <tr className="mb-1 flex">
          {weekDays.map((day) => (
            <th key={day.long} scope="col" className="w-8 text-xs font-medium text-gray-700">
              {day.short}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {generatedDates.map((week) => (
          <tr key={week[0].toString()} className="mt-1 flex">
            {week.map((day) => (
              <DatepickerCalendarDatesItem
                key={day.toString()}
                label={day.getDate().toLocaleString(config.locale)}
                focussed={day.getMonth() === month.month}
                onClick={() => onClick(day)}
                selected={isSelected(day)}
                withDot={dateIsToday(day)}
                isInRange={isInRange(day)}
                isEndRange={isEndRange(day)}
                isSameDay={isSameDay(day)}
                dir={config.dir}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
