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
      <body className="dark:bg-zink-900 bg-gray-100 transition-all duration-700">
        <div className="mx-auto max-w-6xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
