# React Datepicker

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

## Roadmap
- [ ] Custom date format

## Installation

### Install via pnpm

```bash
pnpm install @expanselabs/react-datepicker
```

### Install via npm

```bash
npm install @expanselabs/react-datepicker
```

### Install via yarn

```bash
yarn add @expanselabs/react-datepicker
```

## Current Version

![Different pick modes](https://raw.githubusercontent.com/expanse-agency/react-datepicker/main/assets/react-datepicker-modes.jpg?raw=true)

## Usage
This is an example usage with different modes. Go to the [example](./app/page.tsx) to see all possible options.

```tsx
import * as React from 'react';

import Datepicker from '@expanseagency/react-datepicker';

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
```bash
pnpm i && pnpm dev
```

### Using npm
```bash
npm i && npm dev
```
### Using yarn
```bash
yarn install && yarn dev
```
The playground runs on `http://localhost:3000`

## Contributing
See [CONTRIBUTING.md](https://github.com/expanse-agency/react-datepicker/blob/main/CONTRIBUTING.md)

## License

[MIT](LICENSE) Licensed. Copyright (c) Expanse Agency 2024