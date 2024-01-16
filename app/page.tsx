'use client';

import React from 'react';

import Datepicker from '@/index';
import { DatepickerValue } from '@types';

export default function Page() {
  const [date, setDate] = React.useState<DatepickerValue>();
  const [multipleDate, setMultipleDate] = React.useState<DatepickerValue>();
  const [dateRange, setDateRange] = React.useState<DatepickerValue>();

  return (
    <div className="m-12 flex flex-wrap gap-2">
      <Datepicker type="single" value={date} onChange={setDate} dir="rtl" />
      <Datepicker type="single" value={date} onChange={setDate} dir="rtl" locale="ar-SA" />
      <Datepicker type="multiple" value={multipleDate} onChange={setMultipleDate} />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} expand dir="rtl" />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} expand shortcuts />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} expand shortcuts footer />
    </div>
  );
}
