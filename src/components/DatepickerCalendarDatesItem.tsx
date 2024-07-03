import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import { DatepickerConfig } from '@types';

const variants = cva(['inline-flex size-8 items-center justify-center rounded-full hover:bg-gray-100 aria-disabled:bg-none'], {
  variants: {
    focussed: {
      true: ['aria-selected:bg-primary aria-selected:text-primary-foreground'],
      false: ['text-gray-300 aria-selected:bg-gray-100']
    },
    indicate: {
      true: ['before:bg-primary before:absolute before:bottom-1 before:left-1/2 before:size-1 before:-translate-x-1/2 before:rounded-full']
    },
    isInRange: {
      true: ['hover:bg-gray-50 '],
      false: ['aria-disabled:text-gray-300 aria-disabled:hover:bg-transparent']
    },
    isEndRange: {
      true: ['rounded-none']
    },
    isStartRange: {
      true: ['rounded-none']
    },
    isSameDay: {
      true: ['aria-selected:rounded-full']
    },
    dir: {
      ltr: [],
      rtl: []
    }
  },
  defaultVariants: {
    focussed: true
  },
  compoundVariants: [
    { isEndRange: false, isInRange: true, className: 'rounded-none bg-gray-50 aria-selected:rounded-l-full', dir: 'ltr' },
    { isEndRange: false, isInRange: true, className: 'rounded-none bg-gray-50 aria-selected:rounded-r-full', dir: 'rtl' },
    {
      focussed: false,
      indicate: true,
      className: 'before:bg-gray-300'
    },
    {
      isEndRange: true,
      dir: 'rtl',
      className: 'aria-selected:rounded-l-full'
    },
    {
      isEndRange: true,
      dir: 'ltr',
      className: 'aria-selected:rounded-r-full'
    }
  ]
});

export interface Props extends VariantProps<typeof variants> {
  label: string;
  selected: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dir: DatepickerConfig['dir'];
  config: DatepickerConfig;
}

export default function DatepickerCalendarDatesItem({ label, onClick, selected, disabled, config, ...v }: Props) {
  return (
    <td className={config.classNames?.calendarTableBodyRowDateWrapper || 'relative p-0 text-center text-sm'} role="gridcell">
      <button
        className={
          config.classNames?.calendarTableBodyRowDate
            ? config.classNames?.calendarTableBodyRowDate({
                focussed: !!v.focussed,
                indicate: !!v.indicate,
                isInRange: !!v.isInRange,
                isEndRange: !!v.isEndRange,
                isStartRange: !!v.isStartRange,
                isSameDay: !!v.isSameDay,
                direction: v.dir || 'ltr'
              })
            : twMerge(variants(v))
        }
        type="button"
        aria-selected={!!selected}
        aria-disabled={!!disabled}
        disabled={!!disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </td>
  );
}
