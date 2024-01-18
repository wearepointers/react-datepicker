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
  disabled?: {
    from?: Date;
    to?: Date;
  }[];
  classNames?: DatepickerConfigClassNames;
  icons?: DatepickerConfigComponents;
}

export interface DatepickerConfigComponents {
  nextMonth?: React.ReactNode;
  previousMonth?: React.ReactNode;
}

export interface DatepickerConfigClassNames {
  calendarWrapper?: string;
  calendar?: string;
  calendarHeader?: string;
  calendarHeaderMonth?: string;
  calendarHeaderIconButton?: string;
  calendarTable?: string;
  calendarTableHeader?: string;
  calendarTableHeaderDay?: string;
  calendarTableBodyRow?: string;
  calendarTableBodyRowDateWrapper?: string;
  calendarTableBodyRowDate?: (props: {
    focussed: boolean;
    indicate: boolean;
    isInRange: boolean;
    isEndRange: boolean;
    isStartRange: boolean;
    isSameDay: boolean;
    direction: 'ltr' | 'rtl';
  }) => string;
  expanded?: string;
  expandedContainer?: string;
  expandedCalendarsWrapper?: string;
  expandedCalendar?: string;
  footer?: string;
  footerButtonsWrapper?: string;
  footerDatesWrapper?: string;
  footerDateButton?: string;
  footerDateDivider?: string;
  footerCloseButton?: string;
  footerApplyButton?: string;
  shortcuts?: string;
  shortcutsButton?: string;
}

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
