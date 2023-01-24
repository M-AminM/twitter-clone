"use client";
import "./globals.scss";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <body>{children}</body>
      </SessionProvider>
    </html>
  );
}
