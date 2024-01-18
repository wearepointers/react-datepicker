import * as Popover from '@radix-ui/react-popover';
import { DatepickerConfig } from '@types';

export interface Props {
  label: string;
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeAfterClick?: boolean;
  config: DatepickerConfig;
}

export default function DatepickerExpandedShortcutsItem({ label, onClick, closeAfterClick, config, selected }: Props) {
  const Child = () => (
    <button
      className={
        config.classNames?.shortcutsButton ||
        'rounded-md px-4 py-2 text-start text-sm text-gray-600 hover:bg-gray-50 aria-selected:bg-gray-50'
      }
      type="button"
      aria-selected={!!selected}
      onClick={onClick}
    >
      {label}
    </button>
  );

  if (closeAfterClick)
    return (
      <Popover.PopoverClose asChild>
        <Child />
      </Popover.PopoverClose>
    );

  return <Child />;
}
