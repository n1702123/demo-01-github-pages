export const metadata = {
  title: 'Hello World',
  description: 'Next.js + GitHub Actions + GitHub Pages Demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
