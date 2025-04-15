import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proxmox VE Dashboard",
  description: "Proxmox Dashboard is a lightweight, customizable dashboard interface for managing and monitoring your Proxmox Virtual Environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
