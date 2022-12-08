import "../src/styles/globals.css";

import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
