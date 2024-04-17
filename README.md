# React Datepicker

<img alt="React Tailwindcss Datepicker" width="100" style="border-radius: 100%;" src="https://raw.githubusercontent.com/wearepointers/react-datepicker/main/assets/calendar-icon.svg?raw=true">


Modular date picker component for React using the native date class. Supports single, multiple and range.

## Features
- ✅ Select single date
- ✅ Select multiple dates
- ✅ Select date range
- ✅ Use shortcuts to select a date range
- ✅ TypeScript support
- ✅ Locale support
- ✅ Modular
- ✅ Localization
- ✅ Min, Max select dates
- ✅ Bring your own styles
- ✅ Disable specific dates
- ✅ Minimum Date and Maximum Date
- ✅ Custom date format


## Installation

### Install via pnpm

```sh
pnpm install @wearepointers/react-datepicker
```

### Install via npm

```sh
npm install @wearepointers/react-datepicker
```

### Install via yarn

```sh
yarn add @wearepointers/react-datepicker
```

## Current Version

![Different pick modes](https://raw.githubusercontent.com/wearepointers/react-datepicker/main/assets/react-datepicker-modes.jpg?raw=true)

## Usage
This is an example usage with different modes. Go to the [example](./app/page.tsx) to see all possible options.

```jsx
import * as React from 'react';

import Datepicker from '@wearepointers/react-datepicker';

export default function Page() {
  const [date, setDate] = React.useState<Date>();
  const [multipleDate, setMultipleDate] = React.useState<Date[]>();
  const [dateRange, setDateRange] = React.useState<{ startDate: Date; endDate: Date }>();

  return (
    <>
      <Datepicker type="single" value={date} onChange={setDate} placeholder="Pick a single date" />
      <Datepicker type="multiple" value={multipleDate} onChange={setMultipleDate} placeholder="Pick multiple dates" />
      <Datepicker type="range" value={dateRange} onChange={setDateRange} placeholder="Pick a date range" />
    </>
  );
}

```



## Playground
Clone the repository and run the following commands:

### Using pnpm
```sh
pnpm i && pnpm dev
```

### Using npm
```sh
npm i && npm dev
```
### Using yarn
```sh
yarn install && yarn dev
```
The playground runs on `http://localhost:3000`

## Contributing
See [CONTRIBUTING.md](https://github.com/wearepointers/react-datepicker/blob/main/CONTRIBUTING.md)

## License

[MIT](LICENSE) Licensed. Copyright (c) Pointers 2024