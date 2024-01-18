import * as React from 'react';

import { twMerge } from 'tailwind-merge';

import * as Popover from '@radix-ui/react-popover';
import { DatepickerConfig, DatepickerValue } from '@types';
import { displayDateValue } from '@utils';

import DatepickerCalendar from './DatepickerCalendar';
import DatepickerExpanded from './DatepickerExpanded';

interface Props extends DatepickerConfig {
  value: DatepickerValue;
  onChange: (date: DatepickerValue) => void;
}

export default function Datepicker({ value, onChange, ...rest }: Props) {
  const [month, setMonth] = React.useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  });

  const config = {
    ...rest,
    dir: rest.dir || 'ltr',
    type: rest.type || 'single'
  };

  const { label, hasValue } = displayDateValue(value, config);

  return (
    <Popover.Root>
      {/* @ts-ignore - Does not see child when compiling*/}
      <Popover.Trigger
        className={twMerge(
          'border-1 font-regular relative flex items-center justify-center gap-2 rounded-md border-gray-100 px-4 py-2 text-sm text-gray-900 shadow-xs',
          !hasValue && 'text-gray-500'
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        {label}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content align="start" sideOffset={8} className="">
          {config.expand ? (
            <DatepickerExpanded config={config} value={value} onChange={onChange} />
          ) : (
            <DatepickerCalendar config={config} value={value} onChange={onChange} month={month} onChangeMonth={setMonth} standalone />
          )}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
