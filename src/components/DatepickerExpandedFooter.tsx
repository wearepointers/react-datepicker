import * as Popover from '@radix-ui/react-popover';
import { DatepickerConfig, DatepickerValue } from '@types';
import { displayDateRange } from '@utils';

interface Props {
  value: DatepickerValue;
  onApply: () => void;
  config: DatepickerConfig;
}

export default function DatepickerExpandedFooter({ value, onApply, config }: Props) {
  const { start, end } = displayDateRange(value, config);
  return (
    <div className={config.classNames?.footer || 'inline-flex flex-wrap gap-x-4 gap-y-2 px-4 py-3'}>
      <div className={config.classNames?.footerDatesWrapper || 'inline-flex flex-1 items-center gap-2'}>
        {start && (
          <span className={config.classNames?.footerDateButton || 'border-1 rounded-md border-gray-200 p-2 text-sm text-gray-900'}>
            {start}
          </span>
        )}
        <span className={config.classNames?.footerDateDivider || 'text-gray-400'}>-</span>
        {end && (
          <span className={config.classNames?.footerDateButton || 'border-1 rounded-md border-gray-200 p-2 text-sm text-gray-900'}>
            {end}
          </span>
        )}
      </div>
      <div className={config.classNames?.footerButtonsWrapper || 'inline-flex items-center gap-2'}>
        <Popover.PopoverClose
          className={config.classNames?.footerCloseButton || 'border-1 rounded-md border-gray-200 px-5 py-2 text-sm  text-gray-500'}
        >
          Close
        </Popover.PopoverClose>
        <Popover.PopoverClose
          onClick={onApply}
          className={config.classNames?.footerApplyButton || 'bg-primary text-primary-foreground rounded-md px-5 py-2 text-sm'}
        >
          Apply
        </Popover.PopoverClose>
      </div>
    </div>
  );
}
