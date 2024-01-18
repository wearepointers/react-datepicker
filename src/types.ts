export type DatepickerType = 'single' | 'multiple' | 'range';

export interface DatepickerConfig {
  weeksStartOnMonday?: boolean;
  type?: DatepickerType;
  placeholder?: string;
  locale?: string;
  expand?: boolean;
  shortcuts?: boolean | Partial<Record<DateRangeType, string>>;
  footer?: boolean;
  dir?: 'ltr' | 'rtl';
  max?: number;
  min?: number;
  classNames?: DatepickerConfigClassNames;
}

export interface DatepickerConfigClassNames {}

export type DatepickerValue = Date | Date[] | DateRange | undefined;

export interface DatepickerMonth {
  month: number;
  year: number;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export type DateRangeType = 'all_time' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'this_month' | 'last_month';
