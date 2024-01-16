import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const variants = cva(['inline-flex size-8 items-center justify-center rounded-full hover:bg-gray-100'], {
  variants: {
    focussed: {
      true: ['aria-selected:bg-primary aria-selected:text-primary-foreground'],
      false: ['text-gray-300 aria-selected:bg-gray-100']
    },
    withDot: {
      true: ['before:bg-primary before:absolute before:bottom-1 before:left-1/2 before:size-1 before:-translate-x-1/2 before:rounded-full']
    },
    isInRange: {
      true: ['hover:bg-gray-50']
    },
    isEndRange: {
      true: ['rounded-none aria-selected:rounded-r-full']
    },
    isSameDay: {
      true: ['aria-selected:rounded-full']
    }
  },
  defaultVariants: {
    focussed: true
  },
  compoundVariants: [
    { isEndRange: false, isInRange: true, className: 'rounded-none bg-gray-50 aria-selected:rounded-l-full' },
    {
      focussed: false,
      withDot: true,
      className: 'before:bg-gray-300'
    }
  ]
});

export interface Props extends VariantProps<typeof variants> {
  label: string;
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DatepickerCalendarDatesItem({ label, onClick, ...v }: Props) {
  return (
    <td className="relative p-0 text-center text-sm" role="gridcell">
      <button className={twMerge(variants(v))} type="button" aria-selected={!!v.selected} onClick={onClick}>
        {label}
      </button>
    </td>
  );
}
