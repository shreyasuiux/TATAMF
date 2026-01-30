import './globals.css'

export const metadata = {
  title: 'Learn - Investment Education',
  description: 'Master the essentials of investing through comprehensive topics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
