import '@styles/globals.css';

import { type PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const font = Inter({
  subsets: ['latin', 'latin-ext'],
  style: 'normal'
});

export const metadata: Metadata = {
  title: {
    default: 'React Tailwind Datepicker',
    template: `%s - React Tailwind Datepicker`
  },
  description: 'A simple, lightweight, accessible, and easily customizable datepicker built with React and Tailwind CSS.'
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html className={font.className} lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
