import './globals.css'

export const metadata = {
  title: 'Frontend Mentor #1',
  description: 'Built in Next.js 13, using Tailwind'
}

export default function RootLayout({ children }){
  return (<html lang="en">
    <body>{children}</body>
  </html>)
};