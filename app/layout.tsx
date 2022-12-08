import "../src/styles/globals.css";
import Head from "./head";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
