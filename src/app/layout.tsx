"use client";

import ProgressBar from "@/components/ProgressBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ProgressBar />
      </body>
    </html>
  );
}
