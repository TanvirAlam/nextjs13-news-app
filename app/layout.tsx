import "../src/styles/globals.css";

import Header from "./Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <Providers>
        <body className="bg-gray-100 transition-all duration-700 dark:bg-zinc-900">
          <div className="mx-auto max-w-6xl">
            <Header />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
