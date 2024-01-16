import { DatepickerConfig, DatepickerValue } from '@types';
import { dateRangeTypes, displayDateRangeType, getDateRange, isEqualToRange } from '@utils';

import DatepickerExpandedShortcutsItem from './DatepickerExpandedShortcutsItem';

interface Props {
  value: DatepickerValue;
  onChange: (date: DatepickerValue) => void;
  config: DatepickerConfig;
}

export default function DatepickerExpandedShortcuts({ value, onChange, config }: Props) {
  return (
    <div className="inline-flex flex-row flex-wrap gap-1 px-4 py-3 md:flex-col">
      {dateRangeTypes.map((drt) => (
        <DatepickerExpandedShortcutsItem
          key={drt}
          label={displayDateRangeType(drt, config)}
          onClick={() => onChange(getDateRange(drt))}
          selected={isEqualToRange(value, drt)}
        />
      ))}
    </div>
  );
}
