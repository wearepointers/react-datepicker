import * as React from 'react';

import { twMerge } from 'tailwind-merge';

import * as Popover from '@radix-ui/react-popover';
import { DatepickerConfig, DatepickerValue } from '@types';
import { displayDateValue } from '@utils';

import DatepickerCalendar from './DatepickerCalendar';
import DatepickerExpanded from './DatepickerExpanded';

interface ButtonProps<T extends DatepickerValue> {
  label?: string;
  value?: T;
}

interface Props<T extends DatepickerValue> extends DatepickerConfig {
  value: T;
  onChange: (date: T) => void;
  children?: (props: ButtonProps<T>) => React.ReactNode;
}

export default function Datepicker<T extends DatepickerValue>({
  value,
  onChange,
  children,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<typeof Popover.Trigger>, 'children' | 'onChange' | 'value' | 'type'>) {
  const [month, setMonth] = React.useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  });

  const config = {
    ...props,
    dir: props.dir || 'ltr',
    type: props.type || 'single'
  };

  const displayValue = displayDateValue(value, config);

  return (
    <Popover.Root>
      {/* @ts-ignore - Does not see child when compiling*/}
      <Popover.Trigger {...props} asChild>
        {children ? (
          children({
            label: displayValue.label,
            value: displayValue.value as T
          })
        ) : (
          <button
            className={twMerge(
              'border-1 font-regular relative flex items-center justify-center gap-2 rounded-md border-gray-100 px-4 py-2 text-sm text-gray-900 shadow-xs',
              !!displayValue.value && 'text-gray-500'
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
            {displayValue.label}
          </button>
        )}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content align="start" sideOffset={8} className="">
          {config.expand ? (
            <DatepickerExpanded config={config} value={value} onChange={(v) => onChange(v as T)} />
          ) : (
            <DatepickerCalendar
              config={config}
              value={value}
              onChange={(v) => onChange(v as T)}
              month={month}
              onChangeMonth={setMonth}
              className={'border-1 relative rounded-xl border-gray-100 px-4 py-3 shadow-sm'}
            />
          )}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
