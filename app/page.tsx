'use client';

import React from 'react';

import Datepicker from '@/index';
import { DatepickerValue } from '@types';

export default function Page() {
  const [date, setDate] = React.useState<DatepickerValue>();

  return (
    <div className="m-48">
      <Datepicker type="range" value={date} onChange={setDate} expand shortcuts footer />
    </div>
  );
}
