import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        {/* Header */}
        <header className="border-b bg-white sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="font-semibold text-lg">
              AI Insights
            </h1>

            <span className="text-sm text-gray-500">
              Beta
            </span>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-4xl mx-auto px-6 py-6">
          {children}
        </main>

      </body>
    </html>
  );
}