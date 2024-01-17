'use client';

import React from 'react';

import Datepicker from '@/index';
import { DatepickerValue } from '@types';

export default function Page() {
  const [date, setDate] = React.useState<DatepickerValue>();
  const [multipleDate, setMultipleDate] = React.useState<DatepickerValue>();
  const [dateRange, setDateRange] = React.useState<DatepickerValue>();

  return (
    <div className="m-12 flex flex-col flex-wrap items-start gap-2">
      <Datepicker type="single" value={date} onChange={setDate} placeholder="Single - Normal" />
      <Datepicker type="single" value={date} onChange={setDate} dir="rtl" placeholder="Single - RTL" />
      <Datepicker type="single" value={date} onChange={setDate} dir="rtl" locale="ar-SA" placeholder="Single - RTL - Locale" />
      <Datepicker type="multiple" value={multipleDate} onChange={setMultipleDate} placeholder="Multiple - Normal" />
      <Datepicker type="multiple" value={multipleDate} onChange={setMultipleDate} max={3} placeholder="Multiple - Max" />
      <Datepicker type="multiple" value={multipleDate} onChange={setMultipleDate} min={3} placeholder="Multiple - Min" />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} placeholder="Range - Normal" />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} min={1} placeholder="Range - Min/max" />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} expand placeholder="Range - Expand" />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} expand shortcuts placeholder="Range - Expand - Shortcuts" />
      <Datepicker
        type="range"
        value={dateRange}
        onChange={setDateRange}
        expand
        locale="nl-NL"
        shortcuts={{
          all_time: 'Selecteer alles'
          // ...
        }}
        placeholder="Range - Expand - Custom Shortcuts"
      />
      <Datepicker
        type="range"
        value={dateRange}
        onChange={setDateRange}
        expand
        shortcuts
        footer
        placeholder="Range - Expand - Shortcuts - Footer"
      />
    </div>
  );
}
