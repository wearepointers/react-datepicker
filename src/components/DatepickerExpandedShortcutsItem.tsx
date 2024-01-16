export interface Props {
  label: string;
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DatepickerExpandedShortcutsItem({ label, onClick, ...v }: Props) {
  return (
    <button
      className={'rounded-md px-4 py-2 text-start text-sm text-gray-600 hover:bg-gray-50 aria-selected:bg-gray-50'}
      type="button"
      aria-selected={!!v.selected}
      onClick={onClick}>
      {label}
    </button>
  );
}
