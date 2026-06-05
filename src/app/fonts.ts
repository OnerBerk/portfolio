import localFont from 'next/font/local';

export const chillax = localFont({
  src: [
    {
      path: './fonts/local/Chillax-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/local/Chillax-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/local/Chillax-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/local/Chillax-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-chillax',
  display: 'swap',
});

export const gambarino = localFont({
  src: [
    {
      path: './fonts/local/Gambarino-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gambarino',
  display: 'swap',
});
