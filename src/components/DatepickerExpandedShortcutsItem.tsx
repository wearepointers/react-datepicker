import * as Popover from '@radix-ui/react-popover';

export interface Props {
  label: string;
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeAfterClick?: boolean;
}

export default function DatepickerExpandedShortcutsItem({ label, onClick, closeAfterClick, ...v }: Props) {
  const Child = () => (
    <button
      className={'rounded-md px-4 py-2 text-start text-sm text-gray-600 hover:bg-gray-50 aria-selected:bg-gray-50'}
      type="button"
      aria-selected={!!v.selected}
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
