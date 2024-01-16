import React from 'react';

import { DatepickerCalendarDate, DatepickerConfig, DatepickerMonth, DatepickerValue, DateRange } from '@types';
import { dateIsEq, dateIsLess, dateIsLessOrEq, dateIsMore, dateIsMoreOrEq, dateIsToday, days, generate42CalendarDates } from '@utils';

import DatepickerCalendarDatesItem from './DatepickerCalendarDatesItem';

interface Props {
  config: DatepickerConfig;
  month: DatepickerMonth;
  value: DatepickerValue;
  onChange: (date: DatepickerValue) => void;
}

export default function DatepickerCalendarDates({ config, month, value, onChange }: Props) {
  const generatedDays = React.useMemo(() => generate42CalendarDates(month, config), [month, config]);

  const d = React.useMemo(() => {
    const d = [...days];
    if (config.weeksStartOnMonday) {
      const fd = d.shift();
      if (fd) d.push(fd);
    }
    return d;
  }, [config.weeksStartOnMonday]);

  const isSelected = React.useCallback(
    (day: DatepickerCalendarDate) => {
      if (config.type === 'single') {
        return dateIsEq(day.date, value as Date);
      }

      if (config.type === 'multiple') {
        return !!(value as Date[]).find((sd) => dateIsEq(sd, day.date));
      }

      if (config.type === 'range') {
        const startDate = (value as DateRange)?.startDate;
        const endDate = (value as DateRange)?.endDate;

        if (startDate && endDate) {
          return dateIsEq(day.date, startDate) || dateIsEq(day.date, endDate);
        }

        if (startDate) {
          return dateIsEq(day.date, startDate);
        }

        if (endDate) {
          return dateIsEq(day.date, endDate);
        }
      }
      return false;
    },
    [value, config.type]
  );

  const onClick = React.useCallback(
    (d: Date) => {
      if (config.type === 'single') {
        return onChange(d);
      }

      if (config.type === 'multiple') {
        const dates = value as Date[];
        const f = dates.find((sd) => dateIsEq(sd, d));
        if (f) {
          return onChange(dates.filter((sd) => !dateIsEq(sd, d)));
        }

        return onChange([...dates, d]);
      }

      if (config.type === 'range') {
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
    [config.type, onChange, value]
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
          {d.map((day) => (
            <th key={day.short} scope="col" className="w-8 text-xs font-medium text-gray-700">
              {day.short}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {generatedDays.map((week) => (
          <tr key={week[0].day} className="mt-1 flex">
            {week.map((day) => (
              <DatepickerCalendarDatesItem
                key={day.date.toString()}
                label={`${day.day}`}
                focussed={day.isInSelectedMonth}
                onClick={() => onClick(day.date)}
                selected={isSelected(day)}
                withDot={dateIsToday(day.date)}
                isInRange={isInRange(day.date)}
                isEndRange={isEndRange(day.date)}
                isSameDay={isSameDay(day.date)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
