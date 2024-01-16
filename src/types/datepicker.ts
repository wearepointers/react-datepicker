export type DatepickerType = 'single' | 'multiple' | 'range';

export interface DatepickerConfig {
  weeksStartOnMonday?: boolean;
  type: DatepickerType;
  placeholder?: string;
  locale?: string;
  expand?: boolean;
  shortcuts?: boolean;
  footer?: boolean;
}
export type DatepickerValue = Date | Date[] | DateRange | undefined;

export interface DatepickerCalendarDate {
  date: Date;
  day: number;
  isInSelectedMonth: boolean;
  isToday: boolean;
}

export interface DatepickerMonth {
  month: number;
  year: number;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export type DateRangeType = 'all_time' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'this_month' | 'last_month';
