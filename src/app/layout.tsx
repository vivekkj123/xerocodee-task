import type { Metadata } from "next";
import { DM_Sans, Epilogue, Inter } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });
const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechSynergy",
  description: "Frontend Intern Task given by Xerocodee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
